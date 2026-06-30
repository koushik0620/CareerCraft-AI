import { api } from "@/lib/api/axios";
import {
  LoginRequest,
  AuthResponse,
  RegisterRequest,
  ForgotPasswordRequest,
  ResetPasswordRequest,
} from "../types/auth";

class AuthService {
  async login(payload: LoginRequest) {
    const { data } = await api.post<AuthResponse>("/auth/login", payload);

    return data;
  }

  register(payload: RegisterRequest) {
    return api.post<AuthResponse>("/auth/register", payload);
  }

  forgotPassword(payload: ForgotPasswordRequest) {
    return api.post("/auth/forgot-password", payload);
  }

  resetPassword(payload: ResetPasswordRequest) {
    return api.post("/auth/reset-password", payload);
  }

  refreshToken() {
    return api.post<AuthResponse>("/auth/refresh-token");
  }

  logout() {
    return api.post("/auth/logout");
  }

  me() {
    return api.get("/auth/me");
  }
}

export const authService = new AuthService();
