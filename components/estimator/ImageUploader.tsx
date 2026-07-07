'use client';

import { useCallback } from 'react';
import { useDropzone } from 'react-dropzone';
import Image from 'next/image';
import { Upload, X } from 'lucide-react';
import { clsx } from 'clsx';
import { useEstimatorStore } from '@/store/estimatorStore';

const MAX_SIZE = 5 * 1024 * 1024;
const ACCEPTED = { 'image/jpeg': [], 'image/png': [], 'image/webp': [], 'image/gif': [] };

export function ImageUploader() {
  const { selectedFile, previewUrl, setFile } = useEstimatorStore();

  const onDrop = useCallback(
    (accepted: File[]) => {
      if (accepted.length > 0) setFile(accepted[0]);
    },
    [setFile]
  );

  const { getRootProps, getInputProps, isDragActive, fileRejections } = useDropzone({
    onDrop,
    accept: ACCEPTED,
    maxSize: MAX_SIZE,
    maxFiles: 1,
  });

  const rejection = fileRejections[0]?.errors[0]?.message;

  if (previewUrl && selectedFile) {
    return (
      <div className="relative">
        <div className="relative w-full h-64 rounded-xl overflow-hidden border border-gray-200">
          <Image src={previewUrl} alt="Preview" fill className="object-contain" />
        </div>
        <button
          onClick={() => setFile(null)}
          className="absolute -top-2 -right-2 p-1 bg-red-500 text-white rounded-full hover:bg-red-600 transition-colors"
          aria-label="Remove image"
        >
          <X className="h-4 w-4" />
        </button>
        <p className="mt-2 text-sm text-gray-500 text-center">{selectedFile.name}</p>
      </div>
    );
  }

  return (
    <div>
      <div
        {...getRootProps()}
        className={clsx(
          'flex flex-col items-center justify-center w-full h-48 border-2 border-dashed rounded-xl cursor-pointer transition-colors',
          isDragActive ? 'border-indigo-500 bg-indigo-50' : 'border-gray-300 hover:border-indigo-400 hover:bg-gray-50'
        )}
      >
        <input {...getInputProps()} />
        <Upload className={clsx('h-10 w-10 mb-3', isDragActive ? 'text-indigo-500' : 'text-gray-400')} />
        <p className="text-sm text-gray-600 font-medium">
          {isDragActive ? 'Drop it here!' : 'Drag & drop your collectible image'}
        </p>
        <p className="text-xs text-gray-400 mt-1">or click to browse — JPEG, PNG, WebP (max 5MB)</p>
      </div>
      {rejection && <p className="mt-2 text-xs text-red-500">{rejection}</p>}
    </div>
  );
}
