export interface LoginCredentials {
  email: string;
  password: string;
}

export interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
}

export interface AuthResponse {
  success: boolean;
  message: string;
  data?: {
    user: {
      id: string;
      name: string;
      email: string;
      role?: string;
    };
    accessToken?: string;
    refreshToken?: string;
  };
}



export type TRole  = "ADMIN" | "AGENT" | "USER";