import { GoogleGenerativeAI } from '@google/generative-ai';
import type { EstimateResult } from '@/types/api';

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY || '');

const ANALYSIS_PROMPT = `You are an expert collectibles appraiser. Analyze this image and provide a market value estimate.

Return ONLY valid JSON (no markdown, no code blocks) with this exact structure:
{
  "collectibleType": "specific name of the item (e.g., '1989 Topps Ken Griffey Jr. Rookie Card')",
  "condition": "one of: Poor / Fair / Good / Very Good / Excellent / Near Mint / Mint",
  "estimatedPriceMin": <number in USD>,
  "estimatedPriceMax": <number in USD>,
  "currency": "USD",
  "confidence": <integer 0-100>,
  "reasoning": "brief explanation of the valuation factors"
}

If you cannot identify a collectible item, set confidence to 0 and explain in reasoning.`;

export async function analyzeCollectible(
  base64Image: string,
  mimeType: string
): Promise<EstimateResult> {
  const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

  const result = await model.generateContent([
    ANALYSIS_PROMPT,
    {
      inlineData: {
        data: base64Image,
        mimeType,
      },
    },
  ]);

  const text = result.response.text();

  // Strip markdown code fences if present
  const cleaned = text.replace(/```(?:json)?\s*/g, '').replace(/```\s*$/g, '').trim();

  try {
    const parsed = JSON.parse(cleaned);
    return {
      collectibleType: parsed.collectibleType || 'Unknown Item',
      condition: parsed.condition || 'Unknown',
      estimatedPriceMin: Number(parsed.estimatedPriceMin) || 0,
      estimatedPriceMax: Number(parsed.estimatedPriceMax) || 0,
      currency: parsed.currency || 'USD',
      confidence: Math.min(100, Math.max(0, Number(parsed.confidence) || 0)),
      reasoning: parsed.reasoning || 'No reasoning provided.',
    };
  } catch {
    throw new Error(`Failed to parse Gemini response as JSON. Raw response: ${text}`);
  }
}
