export interface ApiResponse<T = unknown> {
  success: boolean;
  data?: T;
  message?: string;
  errors?: Record<string, string>;
}

export interface LoginRequest {
  email: string;
  password: string;
}

export interface SignupRequest {
  name: string;
  email: string;
  password: string;
}

export interface AuthUser {
  id: string;
  name: string;
  email: string;
}

export interface EstimateResult {
  id?: string;
  collectibleType: string;
  condition: string;
  estimatedPriceMin: number;
  estimatedPriceMax: number;
  currency: string;
  confidence: number;
  reasoning: string;
  createdAt?: string;
}

export interface HistoryItem extends EstimateResult {
  id: string;
  imageName: string;
  createdAt: string;
}

export interface JwtPayload {
  id: string;
  email: string;
  name: string;
}
