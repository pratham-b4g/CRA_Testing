'use client';

import { useCallback, useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/store/authStore';
import type { LoginRequest, SignupRequest } from '@/types/api';

export function useAuth() {
  const { user, isAuthenticated, isLoading, setUser, setLoading, logout: clearUser } = useAuthStore();
  const router = useRouter();

  const fetchCurrentUser = useCallback(async () => {
    try {
      const res = await fetch('/api/user/me');
      if (res.ok) {
        const data = await res.json();
        setUser(data.data);
      } else {
        setUser(null);
      }
    } catch {
      setUser(null);
    }
  }, [setUser]);

  useEffect(() => {
    fetchCurrentUser();
  }, [fetchCurrentUser]);

  const login = async (credentials: LoginRequest) => {
    setLoading(true);
    const res = await fetch('/api/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(credentials),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.data);
      router.push('/estimator');
      return { success: true };
    }
    setLoading(false);
    return { success: false, message: data.message, errors: data.errors };
  };

  const signup = async (payload: SignupRequest) => {
    setLoading(true);
    const res = await fetch('/api/auth/signup', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(payload),
    });
    const data = await res.json();
    if (res.ok) {
      setUser(data.data);
      router.push('/estimator');
      return { success: true };
    }
    setLoading(false);
    return { success: false, message: data.message, errors: data.errors };
  };

  const logout = async () => {
    await fetch('/api/auth/logout', { method: 'POST' });
    clearUser();
    router.push('/login');
  };

  return { user, isAuthenticated, isLoading, login, signup, logout };
}
