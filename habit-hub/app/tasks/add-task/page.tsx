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
import { useEffect } from "react";
import { validateSession } from "@/utils/validate-session-client";
import { useTranslations } from "next-intl";

export default function AddTaskPage() {
  const tasks = AddTaskStore((state: any) => state.task);
  const category = AddTaskStore((state: any) => state.category);
  const emoji = AddTaskStore((state: any) => state.emoji);
  const setEmoji = AddTaskStore((state: any) => state.setEmoji);
  const [bgColor, setBgColor] = useState<string>("bg-yellow");
  const [taskState, setTaskState] = useState(tasks);
  const [categoryState, setCategoryState] = useState(category);
  const t = useTranslations();

  const addTaskToTaskStore = tasksStore((state: any) => state.addTask);

  const router = useRouter();

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
    (day: string) => selectedDays[day as keyof typeof selectedDays]
  );

  const taskToBeAdded = {
    task: taskState,
    category: categoryState,
    emoji: emoji,
    bgColor: `${bgColor}/60`,
    routine: selectedButton,
    date: selectedDaysArray,
  };

  const today = new Date();

  const preciseDate = today.toISOString().split("T")[0];

  const preciseDatesOfSelectedDays = selectedDaysArray.map((day) => {
    const dayIndex = [
      t("TaskAddPage.Sun"),
      t("TaskAddPage.Mon"),
      t("TaskAddPage.Tue"),
      t("TaskAddPage.Wed"),
      t("TaskAddPage.Thu"),
      t("TaskAddPage.Fri"),
      t("TaskAddPage.Sat"),
    ].indexOf(day);
    const date = new Date(today);
    date.setDate(today.getDate() + ((dayIndex + 7 - today.getDay()) % 7));
    return date.toISOString().split("T")[0];
  });

  const loopTasks = () => {
    for (let i = 0; i < preciseDatesOfSelectedDays.length; i++) {
      const task = {
        task: taskState,
        category: categoryState,
        emoji: emoji,
        bgColor: `${bgColor}/60`,
        routine: selectedButton,
        date: preciseDatesOfSelectedDays[i],
      };
      async function addTask() {
        await fetch("/api/task-add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
          },
          body: JSON.stringify(task),
        });
      }
      addTask();
    }
  };

  const increaseSelectedDaysWeekly = selectedDaysArray.map((day) => {
    const dayIndex = [
      t("TaskAddPage.Sun"),
      t("TaskAddPage.Mon"),
      t("TaskAddPage.Tue"),
      t("TaskAddPage.Wed"),
      t("TaskAddPage.Thu"),
      t("TaskAddPage.Fri"),
      t("TaskAddPage.Sat"),
    ].indexOf(day);
    const date = new Date(today);
    date.setDate(today.getDate() + ((dayIndex + 7 - today.getDay()) % 7) * 7);
    return date.toISOString().split("T")[0];
  });

  const loopTasksWeekly = () => {
    for (let i = 0; i < increaseSelectedDaysWeekly.length; i++) {
      const task = {
        task: taskState,
        category: categoryState,
        emoji: emoji,
        bgColor: `${bgColor}/60`,
        routine: selectedButton,
        date: increaseSelectedDaysWeekly[i],
      };
      async function addTask() {
        await fetch("/api/task-add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
            Host: process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
          },
          body: JSON.stringify(task),
        });
      }
      addTask();
    }
  };

  const increaseSelectedDaysMonthly = selectedDaysArray.map((day) => {
    const dayIndex = [
      t("TaskAddPage.Sun"),
      t("TaskAddPage.Mon"),
      t("TaskAddPage.Tue"),
      t("TaskAddPage.Wed"),
      t("TaskAddPage.Thu"),
      t("TaskAddPage.Fri"),
      t("TaskAddPage.Sat"),
    ].indexOf(day);
    const date = new Date(today);
    date.setDate(today.getDate() + ((dayIndex + 7 - today.getDay()) % 7) * 30);
    return date.toISOString().split("T")[0];
  });

  const loopTasksMonthly = () => {
    for (let i = 0; i < increaseSelectedDaysMonthly.length; i++) {
      const task = {
        task: taskState,
        category: categoryState,
        emoji: emoji,
        bgColor: `${bgColor}/60`,
        routine: selectedButton,
        date: increaseSelectedDaysMonthly[i],
      };
      async function addTask() {
        await fetch("/api/task-add", {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
          },
          body: JSON.stringify(task),
        });
      }
      addTask();
    }
  };

  const toggleDay = (day: keyof typeof selectedDays) => {
    setSelectedDays({ ...selectedDays, [day]: !selectedDays[day] });
  };

  const getButtonColor = (day: string) => {
    return selectedDays[day as keyof typeof selectedDays]
      ? bgColor
      : "bg-gray-400/60";
  };

  useEffect(() => {
    validateSession().then((data) => {
      if (data.success === false) {
        if (window.location.pathname === "/") {
          return;
        }
        router.push("/login");
      }
      if (data.success === true) {
        if (
          window.location.pathname === "/login" ||
          window.location.pathname === "/"
        ) {
          router.push("/tasks");
        }
      }
    });
  }, []);
  return (
    <div className={`grid grid-cols-3  ${bgColor}/60`}>
      <div className={`grid col-start-2 justify-center text-8xl mt-8 `}>
        <input
          type="text"
          value={emoji}
          onChange={(e) => setEmoji(e.target.value)}
          maxLength={1}
          className={`w-32 bg-transparent text-center`}
        />
      </div>
      <div className="grid col-start-3 justify-center mt-8 ml-8">
        <Button
          className="w-14 h-14 rounded-full bg-ash"
          onClick={() => router.push("/tasks/suggestions")}
        >
          <X size={24} className="text-black" />
        </Button>
      </div>
      <div className="grid col-start-2 mt-2 justify-center font-poppins font-semibold text-2xl text-nowrap">
        {tasks}
      </div>
      <div className="grid col-start-2 justify-center mt-1 font-light font-poppins text-xs text-nowrap">
        {t("TaskAddPage.ClickToChange")}
      </div>
      <div className="grid col-start-1 col-end-4 px-3 mt-2">
        <InputComponent
          type="text"
          placeholder={tasks}
          value={taskState}
          onChange={(e) => setTaskState(e.target.value)}
        />
      </div>
      <div className="grid col-start-1 col-end-4 px-3">
        <InputComponent
          type="text"
          placeholder={category}
          value={categoryState}
          onChange={(e) => setCategoryState(e.target.value)}
        />
      </div>
      <div className="grid col-start-1 ml-4 mt-3 font-poppins font-bold text-black/80">
        {t("TaskAddPage.CardColor")}
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
        {t("TaskAddPage.Repeat")}
      </div>
      <div className="grid grid-rows-4 col-start-1 col-end-4 border-4 rounded-xl border-white">
        <div className="grid row-start-1 justify-items-start p-2 bg-white font-poppins text-black/60">
          {t("TaskAddPage.SetACycle")}
          <Separator className="bg-gray-700/60" />
        </div>
        <div className="grid row-start-2 grid-cols-3 bg-white font-poppins text-black/60">
          <Button
            className={`grid col-start-1 w-32 ml-11 hover:bg-purple ${
              selectedButton === "daily" ? bgColor : unselectedColor
            } text-black/60 font-poppins rounded-full`}
            onClick={() => setSelectedButton("daily")}
          >
            {t("TaskAddPage.RepeatDaily")}
          </Button>
          <Button
            className={`grid col-start-2 w-32 relative z-10 hover:bg-purple ${
              selectedButton === "weekly" ? bgColor : unselectedColor
            } text-black/60 font-poppins rounded-full`}
            onClick={() => setSelectedButton("weekly")}
          >
            {t("TaskAddPage.RepeatWeekly")}
          </Button>
          <Button
            className={`grid col-start-3 w-32 -ml-11 hover:bg-purple ${
              selectedButton === "monthly" ? bgColor : unselectedColor
            } text-black/60 font-poppins rounded-full`}
            onClick={() => setSelectedButton("monthly")}
          >
            {t("TaskAddPage.RepeatMonthly")}
          </Button>
          <Separator className="grid col-start-1 col-end-4 mt-2 w-full bg-gray-700/60" />
        </div>
        <div className="grid col-start-1 grid-cols-7 px-5 py-2 font-poppins bg-white">
          {[
            t("TaskAddPage.Mon"),
            t("TaskAddPage.Tue"),
            t("TaskAddPage.Wed"),
            t("TaskAddPage.Thu"),
            t("TaskAddPage.Fri"),
            t("TaskAddPage.Sat"),
            t("TaskAddPage.Sun"),
          ].map((day: string) => (
            <Button
              key={day}
              className={`grid w-10 h-10 rounded-full ${getButtonColor(
                day
              )} hover:bg-purple text-black/60`}
              onClick={() =>
                toggleDay(
                  day as "Mon" | "Tue" | "Wed" | "Thu" | "Fri" | "Sat" | "Sun"
                )
              }
            >
              {day}
            </Button>
          ))}
          <Separator className="grid col-start-1 col-end-8 mt-2 w-full bg-gray-700/60" />
        </div>
        <div className="grid row-start-4 grid-cols-2 bg-white px-2 py-2 font-poppins text-black/60">
          <div className="justify-self-start ml-2">
            {t("TaskAddPage.Repeat")}
          </div>
          <div className="grid grid-cols-1 mr-2">
            <div className="grid col-start-1 justify-self-end">
              {t("TaskAddPage.EveryWeek")}
            </div>
            <ChevronRight
              size={24}
              className="grid col-start-2 justify-self-start"
            />
          </div>
          <Separator className="grid col-start-1 col-end-9 mt-2 w-full bg-gray-700/60" />
        </div>
        <div className=" grid grid-rows-2 rounded-2xl mt-3">
          <div className=" grid row-start-1 bg-white font-poppins text-black/60 p-2">
            <div>{t("TaskAddPage.SetATag")}</div>
            <Separator className="bg-gray-700/60" />
          </div>
          <div className="grid row-start-2 grid-cols-3 px-2 py-2 bg-white">
            <Button
              className={`grid col-start-1 w-32 hover:bg-purple ${
                selectedRoutine === "daily routine" ? bgColor : unselectedColor
              } text-black/60 font-poppins rounded-full`}
              onClick={() => setSelectedRoutine("daily routine")}
            >
              {t("TaskAddPage.DailyRoutine")}
            </Button>
            <Button
              className={`grid col-start-2 w-32 relative z-10 hover:bg-purple ${
                selectedRoutine === "weekly routine" ? bgColor : unselectedColor
              } text-black/60 font-poppins rounded-full`}
              onClick={() => setSelectedRoutine("weekly routine")}
            >
              {t("TaskAddPage.WeeklyRoutine")}
            </Button>
            <Button
              className={`grid col-start-3 w-32 hover:bg-purple ${
                selectedRoutine === "monthly routine"
                  ? bgColor
                  : unselectedColor
              } text-black/60 font-poppins rounded-full`}
              onClick={() => setSelectedRoutine("monthly routine")}
            >
              {t("TaskAddPage.MonthlyRoutine")}
            </Button>
          </div>
        </div>
      </div>

      <div className="py-16 w-[430px] ml-0">
        <Button
          className="w-full h-20 rounded-2xl bg-white text-black font-poppins font-bold text-2xl mb-5 hover:bg-purple hover:text-white"
          onClick={async () => {
            if (selectedButton === "daily") {
              await loopTasks();
              router.push("/tasks");
            }
            if (selectedButton === "weekly") {
              await loopTasksWeekly();
              router.push("/tasks");
            }
            if (selectedButton === "monthly") {
              await loopTasksMonthly();
              router.push("/tasks");
            }
          }}
        >
          {t("TaskAddPage.AddTask")}
        </Button>
        <BottomBar />
      </div>
    </div>
  );
}
