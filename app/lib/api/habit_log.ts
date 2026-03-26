import type { CreateBody, HabitLog } from "@/types/habit_log";
import { api } from "../axios";
import type { ApiResponse } from "@/types/response";

export const HabitLogAPI = {
  create: async (body: CreateBody): Promise<HabitLog> => {
    const response = await api.post<ApiResponse<HabitLog>>("habit_log", body);
    return response.data.data!;
  },
};
