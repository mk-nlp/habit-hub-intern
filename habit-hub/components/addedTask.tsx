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
  const taskColor = tasks && tasks.find((t) => t.id === id)?.bgColor;
  const taskCategory = tasks && tasks.find((t) => t.id === id)?.category;
  const emoji = tasks && tasks.find((t) => t.id === id)?.emoji;
  const isTaskCompleted = tasks && tasks.find((t) => t.id === id)?.completed;

  async function completeTaskBackend(taskId: string) {
    const response = await fetch("/api/complete-task", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": "http://localhost:3000",
      },
      body: JSON.stringify({
        taskId,
      }),
    });
  }

  console.log("TASKS", tasks);
  console.log("TASK COLOR", taskColor);
  console.log("TASK CATEGORY", taskCategory);
  console.log("TASK EMOJI", emoji);

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
            completeTaskBackend(id.toString());
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
