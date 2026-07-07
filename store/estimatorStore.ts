import { create } from 'zustand';
import type { EstimateResult } from '@/types/api';

interface EstimatorState {
  selectedFile: File | null;
  previewUrl: string | null;
  isLoading: boolean;
  result: EstimateResult | null;
  error: string | null;
  setFile: (file: File | null) => void;
  setResult: (result: EstimateResult | null) => void;
  setLoading: (loading: boolean) => void;
  setError: (error: string | null) => void;
  reset: () => void;
}

export const useEstimatorStore = create<EstimatorState>((set, get) => ({
  selectedFile: null,
  previewUrl: null,
  isLoading: false,
  result: null,
  error: null,
  setFile: (file) => {
    const prev = get().previewUrl;
    if (prev) URL.revokeObjectURL(prev);
    set({
      selectedFile: file,
      previewUrl: file ? URL.createObjectURL(file) : null,
      result: null,
      error: null,
    });
  },
  setResult: (result) => set({ result }),
  setLoading: (isLoading) => set({ isLoading }),
  setError: (error) => set({ error }),
  reset: () => {
    const prev = get().previewUrl;
    if (prev) URL.revokeObjectURL(prev);
    set({ selectedFile: null, previewUrl: null, isLoading: false, result: null, error: null });
  },
}));
