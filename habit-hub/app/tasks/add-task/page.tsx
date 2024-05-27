"use client";

import InputComponent from "@/components/input";
import { AddTaskStore } from "@/app/tasks/add-task/addTaskState";
import { Button } from "@/components/ui/button";
import { X } from "lucide-react";
import { useState } from "react";
import { Separator } from "@/components/ui/separator";
import { ChevronRight } from "lucide-react";
import BottomBar from "@/components/bottomBar";
import { tasksStore } from "../tasksState";
import { useRouter } from "next/navigation";

export default function AddTaskPage() {
  const tasks = AddTaskStore((state) => state.task);
  const category = AddTaskStore((state) => state.category);
  const emoji = AddTaskStore((state) => state.emoji);
  const [bgColor, setBgColor] = useState<string>("bg-yellow");
  const [taskState, setTaskState] = useState(tasks);
  const [categoryState, setCategoryState] = useState(category);

  const addTaskToTaskStore = tasksStore((state) => state.addTask);

  const router = useRouter();

  const idGenerator = () => {
    return Math.floor(Math.random() * 1000);
  };

  const [unselectedColor, setUnselectedColor] = useState<string>("bg-gray-300");
  const [selectedButton, setSelectedButton] = useState<string | null>(null);
  const [selectedRoutine, setSelectedRoutine] = useState<string | null>(null);
  const [selectedDays, setSelectedDays] = useState({
    Mon: false,
    Tue: false,
    Wed: false,
    Thu: false,
    Fri: false,
    Sat: false,
    Sun: false,
  });

  const selectedDaysArray = Object.keys(selectedDays).filter(
    (day) => selectedDays[day]
  );

  const taskToBeAdded = {
    task: taskState,
    category: categoryState,
    emoji: emoji,
    bgColor: `${bgColor}/60`,
    selectedButton: selectedButton,
    selectedRoutine: selectedRoutine,
    selectedDays: selectedDaysArray,
    id: idGenerator(), // Terrible way to generate an id btw :D
  };

  const toggleDay = (day) => {
    setSelectedDays({ ...selectedDays, [day]: !selectedDays[day] });
  };

  const getButtonColor = (day: string) => {
    return selectedDays[day] ? bgColor : "bg-gray-400/60";
  };

  return (
    <div className={`grid grid-cols-3  ${bgColor}/60`}>
      <div className="grid col-start-2 justify-center text-8xl mt-8">
        {emoji}
      </div>
      <div className="grid col-start-3 justify-center mt-8 ml-8">
        <Button className="w-14 h-14 rounded-full bg-ash">
          <X size={24} className="text-black" />
        </Button>
      </div>
      <div className="grid col-start-2 mt-2 justify-center font-poppins font-semibold text-2xl text-nowrap">
        {tasks}
      </div>
      <div className="grid col-start-2 justify-center mt-1 font-light font-poppins text-xs text-nowrap">
        Click to change the emoji
      </div>
      <div className="grid col-start-1 col-end-4 px-3 mt-2">
        <InputComponent
          placeholder={tasks}
          value={taskState}
          onChange={(e) => setTaskState(e.target.value)}
        />
      </div>
      <div className="grid col-start-1 col-end-4 px-3">
        <InputComponent
          placeholder={category}
          value={categoryState}
          onChange={(e) => setCategoryState(e.target.value)}
        />
      </div>
      <div className="grid col-start-1 ml-4 mt-3 font-poppins font-bold text-black/80">
        Card color
      </div>
      <div className="grid grid-cols-7 col-start-1 col-end-4 mt-2 justify-center justify-items-center px-5">
        <Button
          className="w-9 h-9 rounded-full bg-yellow/60 border-2 border-white hover:bg-purple"
          onClick={() => {
            setBgColor("bg-yellow");
            taskToBeAdded.bgColor = "bg-yellow";
          }}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-green/60 border-2 border-white"
          onClick={() => {
            setBgColor("bg-green");
            taskToBeAdded.bgColor = "bg-green";
          }}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-purple/60 border-2 border-white"
          onClick={() => {
            setBgColor("bg-purple");
            taskToBeAdded.bgColor = "bg-purple";
          }}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-pink/60 border-2 border-white"
          onClick={() => {
            setBgColor("bg-pink");
            taskToBeAdded.bgColor = "bg-pink";
          }}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-red-500/60 border-2 border-white"
          onClick={() => {
            setBgColor("bg-red-500");
            taskToBeAdded.bgColor = "bg-red-500";
          }}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-lime/60 border-2 border-white"
          onClick={() => {
            setBgColor("bg-lime");
            taskToBeAdded.bgColor = "bg-lime";
          }}
        ></Button>
        <Button
          className="w-9 h-9 rounded-full bg-orange/60 border-2 border-white"
          onClick={() => {
            setBgColor("bg-orange");
            taskToBeAdded.bgColor = "bg-orange";
          }}
        ></Button>
      </div>
      <div className="grid col-start-1 font-poppins font-bold text-black/80 ml-4 mt-3 ">
        Repeat
      </div>
      <div className="grid grid-rows-4 col-start-1 col-end-4 border-4 rounded-xl border-white">
        <div className="grid row-start-1 justify-items-start p-2 bg-white font-poppins text-black/60">
          Set a cycle for your task
          <Separator className="bg-gray-700/60" />
        </div>
        <div className="grid row-start-2 grid-cols-3 bg-white font-poppins text-black/60">
          <Button
            className={`grid col-start-1 w-32 ml-11 hover:bg-purple ${
              selectedButton === "daily" ? bgColor : unselectedColor
            } text-black/60 font-poppins rounded-full`}
            onClick={() => setSelectedButton("daily")}
          >
            Daily
          </Button>
          <Button
            className={`grid col-start-2 w-32 relative z-10 hover:bg-purple ${
              selectedButton === "weekly" ? bgColor : unselectedColor
            } text-black/60 font-poppins rounded-full`}
            onClick={() => setSelectedButton("weekly")}
          >
            Weekly
          </Button>
          <Button
            className={`grid col-start-3 w-32 -ml-11 hover:bg-purple ${
              selectedButton === "monthly" ? bgColor : unselectedColor
            } text-black/60 font-poppins rounded-full`}
            onClick={() => setSelectedButton("monthly")}
          >
            Monthly
          </Button>
          <Separator className="grid col-start-1 col-end-4 mt-2 w-full bg-gray-700/60" />
        </div>
        <div className="grid col-start-1 grid-cols-7 px-5 py-2 font-poppins bg-white">
          {["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"].map((day) => (
            <Button
              key={day}
              className={`grid w-10 h-10 rounded-full ${getButtonColor(
                day
              )} hover:bg-purple text-black/60`}
              onClick={() => toggleDay(day)}
            >
              {day}
            </Button>
          ))}
          <Separator className="grid col-start-1 col-end-8 mt-2 w-full bg-gray-700/60" />
        </div>
        <div className="grid row-start-4 grid-cols-2 bg-white px-2 py-2 font-poppins text-black/60">
          <div className="justify-self-start ml-2">Repeat</div>
          <div className="grid grid-cols-1 mr-2">
            <div className="grid col-start-1 justify-self-end">Every week</div>
            <ChevronRight
              size={24}
              className="grid col-start-2 justify-self-start"
            />
          </div>
          <Separator className="grid col-start-1 col-end-9 mt-2 w-full bg-gray-700/60" />
        </div>
        <div className=" grid grid-rows-2 rounded-2xl mt-3">
          <div className=" grid row-start-1 bg-white font-poppins text-black/60 p-2">
            <div>Set a tag for your task</div>
            <Separator className="bg-gray-700/60" />
          </div>
          <div className="grid row-start-2 grid-cols-3 px-2 py-2 bg-white">
            <Button
              className={`grid col-start-1 w-32 hover:bg-purple ${
                selectedRoutine === "daily routine" ? bgColor : unselectedColor
              } text-black/60 font-poppins rounded-full`}
              onClick={() => setSelectedRoutine("daily routine")}
            >
              Daily routine
            </Button>
            <Button
              className={`grid col-start-2 w-32 relative z-10 hover:bg-purple ${
                selectedRoutine === "weekly routine" ? bgColor : unselectedColor
              } text-black/60 font-poppins rounded-full`}
              onClick={() => setSelectedRoutine("weekly routine")}
            >
              Weekly routine
            </Button>
            <Button
              className={`grid col-start-3 w-32 hover:bg-purple ${
                selectedRoutine === "monthly routine"
                  ? bgColor
                  : unselectedColor
              } text-black/60 font-poppins rounded-full`}
              onClick={() => setSelectedRoutine("monthly routine")}
            >
              Monthly routine
            </Button>
          </div>
        </div>
      </div>

      <div className="mt-11 w-[430px] ml-0">
        <Button
          className="w-full h-20 rounded-2xl bg-white text-black font-poppins font-bold text-2xl mb-5 hover:bg-purple hover:text-white"
          onClick={() => {
            addTaskToTaskStore(taskToBeAdded);
            router.push("/tasks");
          }}
        >
          Add Task
        </Button>
        <BottomBar />
      </div>
    </div>
  );
}
