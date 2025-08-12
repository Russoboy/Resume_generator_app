import { useState } from "react";
import api from "../services/api";

export function useAuth() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const login = async (email: string, password: string) => {
    try {
      setLoading(true);
      setError(null);
      const res = await api.post("/auth/login", { email, password });
      localStorage.setItem("accessToken", res.data.accessToken);
      localStorage.setItem("refreshToken", res.data.refreshToken);
      return true;
    } catch (err) {
      setError("Invalid credentials");
      return false;
    } finally {
      setLoading(false);
    }
  };

  return { login, loading, error };
}
