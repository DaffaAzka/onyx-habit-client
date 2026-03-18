import { authAPI } from "@/lib/api/auth";
import type { SignInBody } from "@/types/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useSignIn() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signIn = async (data: SignInBody) => {
    try {
      setLoading(true);
      setError(null);
      const res = await authAPI.signIn(data);
      localStorage.setItem("token", res.token);
      localStorage.setItem("user", JSON.stringify(res.user));
      navigate("/home");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Email or password invalid!";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, signIn };
}
