import { Card, CardContent, CardHeader } from '@/components/ui/Card';
import { SignupForm } from '@/components/auth/SignupForm';
import { Sparkles } from 'lucide-react';

export default function SignupPage() {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-indigo-50 to-gray-100 p-4">
      <div className="w-full max-w-md">
        <div className="flex items-center justify-center gap-2 mb-8">
          <Sparkles className="h-8 w-8 text-indigo-600" />
          <h1 className="text-2xl font-bold text-gray-900">PriceChecker</h1>
        </div>
        <Card>
          <CardHeader>
            <h2 className="text-xl font-semibold text-gray-900">Create an account</h2>
            <p className="text-sm text-gray-500 mt-1">Start estimating collectible prices with AI</p>
          </CardHeader>
          <CardContent>
            <SignupForm />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}
