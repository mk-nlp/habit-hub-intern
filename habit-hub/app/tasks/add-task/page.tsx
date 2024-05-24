"use client";

import InputComponent from "@/components/input";
import { AddTaskStore } from "@/app/tasks/add-task/addTaskState";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";

export default function AddTaskPage() {
  const tasks = AddTaskStore((state) => state.task);
  const category = AddTaskStore((state) => state.category);
  const explanation = AddTaskStore((state) => state.explanation);
  const task2 = AddTaskStore((state) => state.task2);
  const emoji = AddTaskStore((state) => state.emoji);

  const [bgColor, setBgColor] = useState<string>("bg-yellow/60");

  console.log(emoji);

  return (
    <div className={`grid grid-cols-3  ${bgColor}`}>
      <div className="grid col-start-2 justify-center text-8xl mt-8">
        {emoji}
      </div>
      <div className="grid col-start-3 justify-center mt-8 ml-8">
        <Button className="w-14 h-14 rounded-full bg-ash">
          <X size={24} className="text-black" />
        </Button>
      </div>
      <div className="grid col-start-2 mt-2 justify-center font-poppins font-semibold text-2xl">
        {tasks}
      </div>
      <div className="grid col-start-2 justify-center mt-1 font-light font-poppins text-xs text-nowrap">
        Click to change the emoji
      </div>
      <div className="grid col-start-1 col-end-4 px-3 mt-2">
        <InputComponent
          placeholder={tasks}
          value={tasks}
          onChange={(e) => AddTaskStore.getState().setTask(e.target.value)}
        />
      </div>
      <div className="grid col-start-1 col-end-4 px-3">
        <InputComponent
          placeholder={category}
          value={category}
          onChange={(e) => AddTaskStore.getState().setCategory(e.target.value)}
        />
      </div>
      <div className="grid col-start-1 ml-4 mt-3 font-poppins font-bold text-black/80">
        Card color
      </div>
      <div className="grid grid-cols-7 col-start-1 col-end-4 mt-2 justify-center justify-items-center px-5">
        <Button
          className="w-9 h-9 rounded-full bg-yellow/60 border-2 border-white hover:bg-purple"
          onClick={() => setBgColor("bg-yellow/60")}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-green/60 border-2 border-white"
          onClick={() => setBgColor("bg-green/60")}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-purple/60 border-2 border-white"
          onClick={() => setBgColor("bg-purple/60")}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-pink/60 border-2 border-white"
          onClick={() => setBgColor("bg-pink/60")}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-red-500/60 border-2 border-white"
          onClick={() => setBgColor("bg-red-500/60")}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-lime/60 border-2 border-white"
          onClick={() => setBgColor("bg-lime/60")}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-orange/60 border-2 border-white"
          onClick={() => setBgColor("bg-orange/60")}
        ></Button>
      </div>
      <div className="grid col-start-1 font-poppins font-bold text-black/80 ml-4 mt-3 ">
        Repeat
      </div>
      <div className="grid grid-rows-4 col-start-1 col-end-4 border-4 rounded-xl border-white">
        <div className="grid row-start-1 justify-items-start p-2 bg-white font-poppins text-black/60">
          Set a cycle for your task
          <Separator />
        </div>
        <div className="grid row-start-2 grid-cols-3 p-2 bg-white font-poppins text-black/60">
          <Button className="grid col-start-1 w-32 ml-8 bg-gray-500/20 text-black/60 font-poppins rounded-full">
            Daily
          </Button>
          <Button className="grid col-start-2 w-32 bg-gray-500/20 text-black/60 font-poppins rounded-full">
            Weekly
          </Button>
          <Button className="grid col-start-3 w-32   bg-gray-500/20 text-black/60 font-poppins rounded-full">
            Monthly
          </Button>
          <Separator className="grid col-start-1 col-end-4 mt-2 w-full" />
        </div>
      </div>
    </div>
  );
}
