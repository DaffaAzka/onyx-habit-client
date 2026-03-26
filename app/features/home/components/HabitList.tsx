import InputCheckbox from "@/components/blocks/input-checkbox";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useHabitToday } from "../hooks/useHabitToday";
import useHabitLogCreate from "../hooks/useHabitLogCreate";
import { StatusHabit } from "@/types/habit_log";

export default function HabitList() {
  const { data, loading, error, refresh } = useHabitToday();
  const { create } = useHabitLogCreate();

  return (
    <>
      {data.map((e) => {
        return (
          <Card>
            <CardContent className="flex flex-row justify-between">
              {e.name}
              <InputCheckbox
                checked={e.isLog}
                onChange={(val) => {
                  console.log("clicked");
                  create(
                    {
                      habitId: e.id,
                      status: val ? StatusHabit.DONE : StatusHabit.SKIPPED,
                    },
                    () => {
                      refresh();
                    },
                  );
                }}
              />
            </CardContent>
          </Card>
        );
      })}
    </>
  );
}
