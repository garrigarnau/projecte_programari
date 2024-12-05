export interface User {
  id: string;
  name: string;
  email: string;
  userType: 'patient' | 'family' | 'doctor';
}

export interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
}