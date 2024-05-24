"use client";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { tasksStore } from "@/app/tasks/tasksState";
import AddedTask from "./addedTask";
import BottomBar from "@/components/bottomBar";
import PlusButton from "@/components/plusButton";

export default function EmptyTasks() {
  const tasks = tasksStore((state) => state.tasks);

  if (tasks.length > 0) {
    return (
      <div className="grid grid-cols-1">
        {tasks.map((task) => (
          <AddedTask
            key={task.id}
            task={task.task}
            category={task.category}
            id={task.id}
          />
        ))}
        <div className="mt-[500px]">
          <BottomBar />
        </div>
        <div className="">
          <PlusButton buttonUrl="/tasks/suggestions" />
        </div>
      </div>
    );
  }

  return (
    <div>
      <div className="flex flex-col items-center justify-center h-full mt-5">
        <div className="text-3xl font-bold">
          <Image
            src={"vector-art.svg"}
            width={300}
            height={300}
            alt={"Vector Art"}
          />
        </div>
        <Separator className="mt-5 w-96" />
        <div className="text-lg mt-2 font-poppins font-bold">
          Nothing here yet...
        </div>
      </div>
      <div className="mt-52">
        <BottomBar />
      </div>
      <div>
        <PlusButton buttonUrl="/tasks/suggestions" />
      </div>
    </div>
  );
}
