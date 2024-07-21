"use client";
import { Calendar } from "@/components/ui/calendar";
import AddedTask from "@/components/addedTask";
import { validateSession } from "@/utils/validate-session-client";
import { useEffect } from "react";
import { useRouter } from "next/navigation";
import { daysStore } from "@/app/tasks/daysState";
import { tasksStore } from "@/app/tasks/tasksState";
import { useRef } from "react";
import Image from "next/image";
import ButtonComponent from "@/components/button";
import BottomBar from "@/components/bottomBar";

import * as React from "react";
export default function CalendarPage() {
  const day = daysStore((state: any) => state.day);
  const tasks = tasksStore((state: any) => state.tasks);
  const addTask = tasksStore((state: any) => state.addTask);
  const emptyTasks = tasksStore((state: any) => state.emptyTasks);

  const router = useRouter();

  const getTaskByDate = async (date: string) => {
    const response = await fetch(`/api/get-task-date?date=${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": "http://localhost:3000",
      },
    });
    const data = await response.json();
    console.log("DATA", data);
    addTask(data);
  };
  console.log("DAY NE DAY", day);

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

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  const [date, setDate] = React.useState<Date | undefined>(new Date());

  const dateString = date?.toISOString().split("T")[0];
  useEffect(() => {
    console.log("HANGİ GÜNÜ SEÇTİM", dateString);
  });

  useEffect(() => {
    emptyTasks();
    getTaskByDate(dateString as string);
  }, []);
  return (
    <div className="flex flex-col min-h-screen  bg-blue">
      <div className="flex items-center justify-center font-bold font-poppins py-5">
        <h1>Calendar</h1>
      </div>
      <div className="flex items-center justify-center mt-5">
        <Calendar
          mode="single"
          selected={date}
          onSelect={(date) => {
            emptyTasks();
            setDate(date);
            const selectedDateString = `${date?.getFullYear()}-${(
              "0" +
              ((date?.getMonth() ?? 0) + 1)
            ).slice(-2)}-${("0" + date?.getDate()).slice(-2)}`;

            getTaskByDate(selectedDateString);
          }}
          className="rounded-md border bg-white text-black"
        />
      </div>
      <div className="flex-row flex-grow">
        <h5 className=" text-gray-500 font-poppins px-4 py-2 text-sm">
          {dateString}
        </h5>
        {tasks.length > 0 ? (
          <div className="flex-row items-center justify-center">
            {tasks.map((task: any) => (
              <AddedTask
                key={task.id}
                task={task.task}
                category={task.category}
                id={task.id}
              />
            ))}
          </div>
        ) : (
          <div>
            <div className="flex items-center justify-center text-sm text-gray-500">
              <h1>No tasks for this day...</h1>
            </div>
            <div className="flex items-center justify-center mt-5">
              <Image
                src="/sademo.webp"
                alt="Loading"
                width={200}
                height={300}
              />
            </div>
            <div className="flex items-center justify-center mt-12">
              <ButtonComponent
                buttontext="Add a task"
                buttonurl="/tasks/suggestions"
              ></ButtonComponent>
            </div>
          </div>
        )}
      </div>
      <div className=" flex mt-20">
        <BottomBar />
      </div>
    </div>
  );
}
