import { createContext, useContext, useEffect, useState, type ReactNode } from 'react';
import { mockUser } from '../data/user';

interface AuthContextValue {
  isAuthenticated: boolean;
  firstName: string;
  login: (email?: string) => void;
  logout: () => void;
}

const STORAGE_KEY = 'hm-auth';

const AuthContext = createContext<AuthContextValue | null>(null);

export function AuthProvider({ children }: { children: ReactNode }) {
  const [isAuthenticated, setIsAuthenticated] = useState<boolean>(() => localStorage.getItem(STORAGE_KEY) === '1');

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, isAuthenticated ? '1' : '0');
  }, [isAuthenticated]);

  const login = () => setIsAuthenticated(true);
  const logout = () => setIsAuthenticated(false);

  return (
    <AuthContext.Provider value={{ isAuthenticated, firstName: mockUser.firstName, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  const ctx = useContext(AuthContext);
  if (!ctx) throw new Error('useAuth must be used within AuthProvider');
  return ctx;
}
