import type { User } from "./user";

export interface SignInBody {
  email: string;
  password: string;
}

export interface SignInResponse {
  token: string;
  user: User;
}

export interface SignUpBody {
  name: string;
  email: string;
  password: string;
  retry_password: string;
}

export interface SignUpResponse {
  user: User;
}
