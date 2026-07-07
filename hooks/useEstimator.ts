'use client';

import { useEstimatorStore } from '@/store/estimatorStore';
import toast from 'react-hot-toast';

export function useEstimator() {
  const store = useEstimatorStore();

  const submitEstimate = async () => {
    if (!store.selectedFile) {
      toast.error('Please select an image first');
      return;
    }

    store.setLoading(true);
    store.setError(null);

    try {
      const formData = new FormData();
      formData.append('image', store.selectedFile);

      const res = await fetch('/api/estimate', {
        method: 'POST',
        body: formData,
      });

      const data = await res.json();

      if (res.ok) {
        store.setResult(data.data);
        toast.success('Analysis complete!');
      } else {
        store.setError(data.message || 'Failed to analyze image');
        toast.error(data.message || 'Failed to analyze image');
      }
    } catch {
      store.setError('Network error. Please try again.');
      toast.error('Network error. Please try again.');
    } finally {
      store.setLoading(false);
    }
  };

  return { ...store, submitEstimate };
}
