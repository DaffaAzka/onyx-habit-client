import { authAPI } from "@/lib/api/auth";
import type { SignUpBody } from "@/types/auth";
import { useState } from "react";
import { useNavigate } from "react-router";

export default function useSignUp() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const navigate = useNavigate();

  const signUp = async (data: SignUpBody) => {
    try {
      setLoading(true);
      setError(null);
      await authAPI.signUp(data);
      navigate("/sign-in");
    } catch (err) {
      const message =
        err instanceof Error ? err.message : "Fields are invalid!";
      setError(message);
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, signUp };
}
