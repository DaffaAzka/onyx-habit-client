import type {
  SignInBody,
  SignInResponse,
  SignUpBody,
  SignUpResponse,
} from "@/types/auth";
import type { ApiResponse } from "@/types/response";
import { api } from "../axios";

export const authAPI = {
  signIn: async (body: SignInBody): Promise<SignInResponse> => {
    const response = await api.post<ApiResponse<SignInResponse>>(
      "/auth/sign-in",
      body,
    );

    return response.data.data!;
  },

  signUp: async (body: SignUpBody): Promise<SignUpResponse> => {
    const response = await api.post<ApiResponse<SignUpResponse>>(
      "/auth/sign-up",
      body,
    );

    return response.data.data!;
  },
};
