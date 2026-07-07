import { cookies } from 'next/headers';
import { jwtVerify } from 'jose';
import { Estimation } from '@/lib/db/models';
import { syncModels } from '@/lib/db/models';
import { HistoryTable } from '@/components/history/HistoryTable';
import type { HistoryItem } from '@/types/api';

const secret = new TextEncoder().encode(
  process.env.JWT_SECRET || 'fallback-secret-change-in-production'
);

async function getHistory(userId: string): Promise<HistoryItem[]> {
  await syncModels();
  const items = await Estimation.findAll({
    where: { userId },
    order: [['createdAt', 'DESC']],
    limit: 50,
  });
  return items.map((e) => ({
    id: e.id,
    imageName: e.imageName,
    collectibleType: e.collectibleType,
    condition: e.condition,
    estimatedPriceMin: Number(e.estimatedPriceMin),
    estimatedPriceMax: Number(e.estimatedPriceMax),
    currency: e.currency,
    confidence: e.confidence,
    reasoning: e.reasoning,
    createdAt: e.createdAt.toISOString(),
  }));
}

export default async function HistoryPage() {
  const cookieStore = await cookies();
  const token = cookieStore.get('token')?.value;

  let items: HistoryItem[] = [];

  if (token) {
    try {
      const { payload } = await jwtVerify(token, secret);
      items = await getHistory(payload.id as string);
    } catch {
      // middleware should have redirected, but handle gracefully
    }
  }

  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Estimation History</h1>
        <p className="text-gray-500 mt-1">Your previously analyzed collectibles.</p>
      </div>
      <HistoryTable items={items} />
    </div>
  );
}
