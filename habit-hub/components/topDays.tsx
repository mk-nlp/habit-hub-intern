"use client";
import { useState } from "react";

import { Button } from "./ui/button";
import { useRef } from "react";
import { daysStore } from "@/app/tasks/daysState";
import { useEffect } from "react";
import { validateSession } from "@/utils/validate-session-client";
import { useRouter } from "next/navigation";
import { tasksStore } from "@/app/tasks/tasksState";

export default function TopDays() {
  const day = daysStore((state: any) => state.day);
  const selectedDay = daysStore((state: any) => state.selectedDay);
  const setSelectedDay = daysStore((state: any) => state.setSelectedDay);
  const datesOfWeek = daysStore((state: any) => state.datesOfWeek);
  const days = daysStore((state: any) => state.days);
  const preciseDatesOfWeek = daysStore(
    (state: any) => state.preciseDatesOfWeek
  );
  const tasks = tasksStore((state: any) => state.tasks);
  const addTask = tasksStore((state: any) => state.addTask);
  const emptyTasks = tasksStore((state: any) => state.emptyTasks);

  const router = useRouter();

  const getTaskByDate = async (date: string) => {
    const response = await fetch(`/api/get-task-date?date=${date}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
      },
    });
    const data = await response.json();
    addTask(data);
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

  const buttonRef = useRef<HTMLButtonElement | null>(null);
  useEffect(() => {
    if (buttonRef.current) {
      buttonRef.current.click();
    }
  }, []);

  return (
    <div className="grid grid-cols-4 bg-pink/60 h-40">
      <div className="grid col-start-2 col-end-4 justify-center mt-5 font-poppins font-bold">
        {selectedDay === day ? "Today" : selectedDay}
      </div>
      <div className="grid grid-cols-7 col-start-1 col-end-5 mb-6 font-poppins font-bold items-center gap-2 p-0.5">
        {days.map((d: any, i: any) => (
          <Button
            ref={d === day ? buttonRef : null}
            key={d}
            className={`grid grid-rows-2 w-13 h-18 rounded-xl hover:bg-purple hover:font-extrabold ${
              selectedDay === d ? "bg-purple" : "bg-pink-2/60"
            }`}
            onClick={() => {
              setSelectedDay(d);
              emptyTasks();
              getTaskByDate(preciseDatesOfWeek[i]);
            }}
          >
            <div
              className={`text-sm mb-2 text-black ${
                selectedDay === d ? "font-extrabold" : ""
              }`}
            >
              {d}
            </div>
            <div className=" text-base border rounded-full px-2 py-1 bg-white text-black ">
              {datesOfWeek[i]}
            </div>
          </Button>
        ))}
      </div>
    </div>
  );
}
