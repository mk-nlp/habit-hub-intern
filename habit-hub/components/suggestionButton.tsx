"use client";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { AddTaskStore } from "@/app/tasks/add-task/addTaskState";
import { useRouter } from "next/navigation";

export default function SuggestionButton(
  task: any,
  category: any,
  emoji: any,
  taskId: any
) {
  const addTaskToCreator = AddTaskStore((state: any) => state.addTaskToCreator);
  const router = useRouter();

  return (
    <div>
      <Button
        className="bg-ash rounded-full w-12 h-12 font-bold hover:bg-purple hover:text-white"
        onClick={() => [
          addTaskToCreator(task, category, emoji, taskId),
          router.push("/tasks/add-task"),
        ]}
      >
        <Plus size={24} />
      </Button>
    </div>
  );
}
