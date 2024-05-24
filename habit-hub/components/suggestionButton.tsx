"use client";
import { Plus } from "lucide-react";
import { Button } from "./ui/button";
import { AddTaskStore } from "@/app/tasks/add-task/addTaskState";
import { useRouter } from "next/navigation";

export default function SuggestionButton(task, category, emoji, taskId) {
  const addTaskToCreator = AddTaskStore((state) => state.addTaskToCreator);
  const router = useRouter();

  console.log("ANANI SİKECEM AMA", emoji);
  return (
    <div>
      <Button
        variant="primary"
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
