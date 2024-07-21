"use client";
import Image from "next/image";
import { Separator } from "./ui/separator";
import { tasksStore } from "@/app/tasks/tasksState";
import AddedTask from "./addedTask";
import BottomBar from "@/components/bottomBar";
import PlusButton from "@/components/plusButton";
import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { LoaderCircle } from "lucide-react";

export default function EmptyTasks() {
  const tasks = tasksStore((state) => state.tasks);
  const addTask = tasksStore((state) => state.addTask);
  const [loading, setLoading] = useState(false);

  async function fetchTasks() {
    setLoading(true);
    const response = await fetch("/api/get-task", {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": "http://localhost:3000",
      },
    });
    const data = await response.json();
    for (const task of data) {
      addTask(task);
    }
    setLoading(false);
  }

  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center h-full mt-12">
        <motion.div
          animate={{ rotate: 360 }}
          transition={{ duration: 1, repeat: Infinity }}
        >
          <LoaderCircle className="text-purple" size={120} />
        </motion.div>
        <div className="text-lg mt-2 font-poppins font-bold">Loading...</div>
      </div>
    );
  }

  if (tasks.length > 0) {
    console.log("TASKS RENDER ERA", tasks);
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
          <PlusButton buttonurl="/tasks/suggestions" />
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
        <PlusButton buttonurl="/tasks/suggestions" />
      </div>
    </div>
  );
}
