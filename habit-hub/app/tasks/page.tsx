import TopDays from "@/components/topDays";
import RoutineButtons from "@/components/RoutineButtons";
import EmptyTasks from "@/components/emptyTasks";
import BottomBar from "../login/bottomBar";
import { Plus } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function TasksPage() {
  return (
    <div className="relative">
      <TopDays />
      <RoutineButtons />
      <EmptyTasks />
      <BottomBar />
      <div className="absolute">
        <Button className="bg-ash shadow-2xl rounded-full absolute bottom-32 left-80 w-14 h-14 hover:bg-purple ">
          <Plus size={30} className="text-black hover:cursor-pointer  " />
        </Button>
      </div>
    </div>
  );
}
