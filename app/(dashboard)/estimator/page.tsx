import { EstimatorForm } from '@/components/estimator/EstimatorForm';

export default function EstimatorPage() {
  return (
    <div>
      <div className="mb-8">
        <h1 className="text-2xl font-bold text-gray-900">Price Estimator</h1>
        <p className="text-gray-500 mt-1">
          Upload an image of your collectible to get an AI-powered market value estimate.
        </p>
      </div>
      <EstimatorForm />
    </div>
  );
}
