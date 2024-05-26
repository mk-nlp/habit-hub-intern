"use client";
import { tasksStore } from "@/app/tasks/tasksState";

import { Button } from "./ui/button";
import { Check } from "lucide-react";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface TaskProps {
  task: string;
  category: string;
  id: number;
}

export default function AddedTask({ id, task, category }: TaskProps) {
  const completeTask = tasksStore((state) => state.completeTask);
  const tasks = tasksStore((state) => state.tasks);
  const isTaskCompleted = tasks.find((t) => t.id === id)?.completed;
  const emoji = tasks.find((t) => t.id === id)?.emoji;
  const taskCategory = tasks.find((t) => t.id === id)?.category;
  const taskColor = tasks.find((t) => t.id === id)?.bgColor;

  console.log("My tasks bruh", tasks);

  return (
    <div className="grid grid-cols-8 items-center justify-center">
      <div
        className={`grid grid-cols-2 col-start-1 col-end-8 py-4 items-center px-3 mt-4 w-full ml-5 rounded-xl text-lg text-nowrap font-poppins ${taskColor} ${
          isTaskCompleted ? "line-through" : ""
        }`}
      >
        {emoji} {task}
        <Button
          className={`bg-ash rounded-full w-9 h-9 border-2 border-gray-300 justify-self-end hover:bg-purple hover:border-purple`}
          onClick={() => {
            completeTask(id);
          }}
        >
          {isTaskCompleted ? (
            <motion.div
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              transition={{ duration: 0.2 }}
            >
              <div>
                <Check className="text-black" />
              </div>
            </motion.div>
          ) : (
            ""
          )}
        </Button>
      </div>
    </div>
  );
}
