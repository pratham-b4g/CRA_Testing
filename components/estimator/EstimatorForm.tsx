'use client';

import { ImageUploader } from './ImageUploader';
import { ResultCard } from './ResultCard';
import { Button } from '@/components/ui/Button';
import { useEstimator } from '@/hooks/useEstimator';

export function EstimatorForm() {
  const { selectedFile, result, isLoading, error, submitEstimate, reset } = useEstimator();

  return (
    <div className="space-y-6">
      <ImageUploader />

      {error && (
        <div className="rounded-lg bg-red-50 border border-red-200 p-4 text-sm text-red-700">
          {error}
        </div>
      )}

      <div className="flex gap-3">
        <Button
          onClick={submitEstimate}
          disabled={!selectedFile || isLoading}
          loading={isLoading}
          size="lg"
          className="flex-1"
        >
          {isLoading ? 'Analyzing...' : 'Analyze & Estimate Price'}
        </Button>
        {(selectedFile || result) && (
          <Button variant="secondary" size="lg" onClick={reset}>
            Clear
          </Button>
        )}
      </div>

      {result && <ResultCard result={result} />}
    </div>
  );
}
