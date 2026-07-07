import type { HistoryItem } from '@/types/api';

interface HistoryTableProps {
  items: HistoryItem[];
}

export function HistoryTable({ items }: HistoryTableProps) {
  if (items.length === 0) {
    return (
      <div className="text-center py-12 text-gray-500">
        <p className="text-lg font-medium">No estimations yet</p>
        <p className="text-sm mt-1">Upload your first collectible to get started.</p>
      </div>
    );
  }

  return (
    <div className="overflow-x-auto rounded-xl border border-gray-200">
      <table className="min-w-full divide-y divide-gray-200">
        <thead className="bg-gray-50">
          <tr>
            {['Item', 'Condition', 'Price Range', 'Confidence', 'Date'].map((h) => (
              <th
                key={h}
                className="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider"
              >
                {h}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="bg-white divide-y divide-gray-200">
          {items.map((item) => (
            <tr key={item.id} className="hover:bg-gray-50 transition-colors">
              <td className="px-4 py-3 text-sm font-medium text-gray-900 max-w-xs truncate">
                {item.collectibleType}
              </td>
              <td className="px-4 py-3 text-sm text-gray-600">{item.condition}</td>
              <td className="px-4 py-3 text-sm text-gray-900 font-medium">
                {item.currency} {item.estimatedPriceMin.toLocaleString()} –{' '}
                {item.estimatedPriceMax.toLocaleString()}
              </td>
              <td className="px-4 py-3 text-sm">
                <span
                  className={`inline-flex px-2 py-0.5 rounded-full text-xs font-medium ${
                    item.confidence >= 75
                      ? 'bg-green-100 text-green-800'
                      : item.confidence >= 50
                      ? 'bg-yellow-100 text-yellow-800'
                      : 'bg-red-100 text-red-800'
                  }`}
                >
                  {item.confidence}%
                </span>
              </td>
              <td className="px-4 py-3 text-sm text-gray-500">
                {new Date(item.createdAt).toLocaleDateString()}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
