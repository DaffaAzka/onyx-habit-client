import { HabitLogAPI } from "@/lib/api/habit_log";
import type { CreateBody } from "@/types/habit_log";
import { useState } from "react";

export default function useHabitLogCreate() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const create = async (data: CreateBody, onSuccess: () => void) => {
    try {
      setLoading(true);
      setError(null);
      await HabitLogAPI.create(data);
      onSuccess();
    } catch (err) {
      const message = err instanceof Error ? err.message : "";
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, create };
}
