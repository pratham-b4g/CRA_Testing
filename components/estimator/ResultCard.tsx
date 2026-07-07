import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import type { EstimateResult } from '@/types/api';

interface ResultCardProps {
  result: EstimateResult;
}

function ConfidenceBadge({ value }: { value: number }) {
  const color =
    value >= 75 ? 'bg-green-100 text-green-800' :
    value >= 50 ? 'bg-yellow-100 text-yellow-800' :
    'bg-red-100 text-red-800';

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${color}`}>
      {value}% confidence
    </span>
  );
}

export function ResultCard({ result }: ResultCardProps) {
  const priceRange =
    result.estimatedPriceMin === result.estimatedPriceMax
      ? `${result.currency} ${result.estimatedPriceMin.toLocaleString()}`
      : `${result.currency} ${result.estimatedPriceMin.toLocaleString()} – ${result.estimatedPriceMax.toLocaleString()}`;

  return (
    <Card className="mt-6">
      <CardHeader>
        <div className="flex items-start justify-between gap-4">
          <div>
            <h3 className="text-lg font-semibold text-gray-900">{result.collectibleType}</h3>
            <p className="text-sm text-gray-500">Condition: <span className="font-medium text-gray-700">{result.condition}</span></p>
          </div>
          <ConfidenceBadge value={result.confidence} />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <div className="text-center py-4">
          <p className="text-sm text-gray-500 mb-1">Estimated Market Value</p>
          <p className="text-3xl font-bold text-indigo-600">{priceRange}</p>
        </div>
        <div>
          <p className="text-sm font-medium text-gray-700 mb-1">Appraiser Notes</p>
          <p className="text-sm text-gray-600 leading-relaxed">{result.reasoning}</p>
        </div>
      </CardContent>
    </Card>
  );
}
