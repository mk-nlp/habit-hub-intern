"use client";
import SuggestionButton from "./suggestionButton";
import { tasksStore } from "@/app/tasks/tasksState";
import { useEffect, useState } from "react";
import { AddTaskStore } from "@/app/tasks/add-task/addTaskState";
import { useRouter } from "next/navigation";
import { Button } from "./ui/button";
import { Plus } from "lucide-react";

interface TaskProps {
  task: string;
  category: string;
  emoji: string;
}

export default function Task({ task, category, emoji }: TaskProps) {
  type ColorType = {
    [key: string]: {
      [key: string]: string;
    };
  };

  const colors: ColorType = {
    study: {
      yellow: "bg-yellow/60",
      green: "bg-green/60",
    },
    exercise: {
      blue: "bg-blue/60",
      orange: "bg-orange/60",
    },
    cleaning: {
      lime: "bg-lime/60",
      pink: "bg-pink/60",
    },
  };

  const taskId = Math.floor(Math.random() * 1000);

  const router = useRouter();

  const addTask = tasksStore((state) => state.addTask);
  const tasks = tasksStore((state) => state.tasks);
  const addTaskToCreator = AddTaskStore((state) => state.addTaskToCreator);
  const CreatorTasks = AddTaskStore((state) => state.tasks);
  console.log("Creator tasks", CreatorTasks);
  const [selectedColor, setSelectedColor] = useState<string>("");

  useEffect(() => {
    const colorKeys = Object.keys(colors[category as keyof typeof colors]);
    const selectedColorKey = colorKeys[(colorKeys.length * Math.random()) << 0];
    const selectedColor =
      colors[category as keyof typeof colors][selectedColorKey];
    setSelectedColor(selectedColor);
  }, []);

  console.log("yarrak kafalı", task);
  console.log("EMOJİM NERDE AMINAK ODUMU COCU", emoji);

  return (
    <div className="grid grid-cols-8 col-start-1 col-end-9">
      <div
        className={`grid col-start-1 col-end-5 py-4 items-center px-3 mt-4 w-80 ml-5 rounded-xl text-lg font-poppins ${selectedColor} `}
      >
        {emoji} {task}
      </div>
      <div className="grid col-start-5 col-end-8 ml-56 justify-center items-center mt-2 bg-white">
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
    </div>
  );
}
