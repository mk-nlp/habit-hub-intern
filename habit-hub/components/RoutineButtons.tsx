"use client";
import { Button } from "./ui/button";
import Image from "next/image";
import { daysStore } from "@/app/tasks/daysState";
import { useRouter } from "next/navigation";
import { useTranslations } from "next-intl";

import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const deleteTasks = async (lastSelectedDay: any) => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN}/api/delete-task-date?date=${lastSelectedDay}`,
    {
      method: "DELETE",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
        Host: process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
      },
    }
  );
  const data = await response.json();
  return data;
};

export default function RoutineButtons() {
  const lastSelectedDay = daysStore((state: any) => state.lastSelectedDay);
  const router = useRouter();
  const t = useTranslations();

  return (
    <div className="grid grid-cols-4 justify-center items-center">
      <div className="grid col-start-2 justify-center">
        <Button className="bg-purple font-poppins font-bold rounded-xl mr-4 text-sm text-white shadow-xl w-20 h-8 hover:bg-purple hover:text-white">
          {t("TasksPage.All")}
        </Button>
      </div>
      <div className="grid col-start-3 justify-center">
        <Button className=" bg-white border border-gray-300 mr-2 font-poppins font-bold rounded-xl text-xs  text-gray-400 shadow-xl w-20 px-11 h-8 hover:bg-purple hover:text-white hover:border-purple">
          {t("TasksPage.DailyRoutine")}
        </Button>
      </div>
      <div className="grid col-start-4 justify-center">
        <Button className="bg-white border border-gray-300 font-poppins font-bold rounded-xl ml-2 text-xs  text-gray-400 shadow-xl w-20 px-11 h-8 hover:bg-purple hover:text-white hover:border-purple">
          {t("TasksPage.StudyRoutine")}
        </Button>
      </div>
      <div className=" grid grid-rows-2 col-start-5 ml-9 justify-center">
        <DropdownMenu>
          <DropdownMenuTrigger>
            <Button variant={"ghost"}>
              <Image
                src="dots.svg"
                alt="dots"
                width={6}
                height={6}
                className="mt-20"
              />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent>
            <DropdownMenuItem className="flex items-center justify-center">
              <Button
                className="bg-white font-poppins font-bold rounded-xl w-20 text-xs  text-gray-400   hover:bg-purple hover:text-white hover:border-purple"
                onClick={() => {
                  deleteTasks(lastSelectedDay);
                  router.refresh();
                }}
              >
                {t("TasksPage.DeleteTasks")}
              </Button>
            </DropdownMenuItem>
          </DropdownMenuContent>
        </DropdownMenu>
      </div>
    </div>
  );
}
