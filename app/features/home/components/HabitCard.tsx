import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { DynamicIcon } from "@/components/blocks/dynamicIcon";
import { getUserFromLocalStorage } from "@/lib/utils";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import InputCheckbox from "@/components/blocks/input-checkbox";
import { Input } from "@/components/ui/input";
import { useHabitToday } from "../hooks/useHabitToday";

export default function HabitCard() {
  const user = getUserFromLocalStorage();

  return (
    <>
      <Card className="py-2 px-2">
        <CardContent className="flex flex-row justify-between px-2">
          <Avatar size="lg">
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </CardContent>
      </Card>
    </>
  );
}
