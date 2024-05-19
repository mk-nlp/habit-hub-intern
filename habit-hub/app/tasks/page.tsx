import TopDays from "@/components/topDays";
import RoutineButtons from "@/components/RoutineButtons";
import EmptyTasks from "@/components/emptyTasks";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";
import BottomBar from "@/components/bottomBar";
import PlusButton from "@/components/plusButton";

export default function TasksPage() {
  return (
    <div className="relative">
      <TopDays />
      <RoutineButtons />
      <EmptyTasks />
      <BottomBar />
      <PlusButton buttonUrl="/tasks/suggestions" />
    </div>
  );
}
