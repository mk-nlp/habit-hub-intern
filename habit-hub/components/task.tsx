"use client";
import SuggestionButton from "./suggestionButton";
import { tasksStore } from "@/app/tasks/tasksState";

interface TaskProps {
  task: string;
  category: string;
}

export default function Task({ task, category }: TaskProps) {
  type ColorType = {
    [key: string]: {
      [key: string]: string;
    };
  };

  const colors: ColorType = {
    study: {
      yellow: "bg-yellow",
      green: "bg-green",
    },
    exercise: {
      blue: "bg-blue",
      orange: "bg-orange",
    },
    cleaning: {
      lime: "bg-lime",
      pink: "bg-pink",
    },
  };

  const colorKeys = Object.keys(colors[category as keyof typeof colors]);

  const randomColorKey =
    colorKeys[Math.floor(Math.random() * colorKeys.length)];

  const taskId = Math.floor(Math.random() * 1000);

  const addTask = tasksStore((state) => state.addTask);
  const tasks = tasksStore((state) => state.tasks);

  console.log(tasks);

  return (
    <div className="grid grid-cols-8 col-start-1 col-end-9">
      <div
        className={`grid col-start-1 col-end-5 py-4 items-center px-3 mt-4 w-80 ml-5 rounded-xl text-lg font-poppins ${
          colors[category as keyof typeof colors][randomColorKey]
        } `}
      >
        {" "}
        {task}{" "}
      </div>
      <div
        className="grid col-start-5 col-end-8 ml-56 justify-center items-center mt-2 bg-white"
        onClick={() => addTask({ id: taskId, task, category })}
      >
        <SuggestionButton />
      </div>
    </div>
  );
}
