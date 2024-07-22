import { create } from "zustand";
import { useTranslations } from "next-intl";

const backendLanguage = async () => {
  const response = await fetch(
    `${process.env.NEXT_PUBLIC_ORIGIN ?? ""}/api/get-user-language`,
    {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-Custom-Origin": process.env.NEXT_PUBLIC_ORIGIN?.toString() ?? "",
      },
    }
  );

  return response.json();
};

const currentLanguage = "en";
function ChangeLanguage(currentLanguage: any) {
  if (currentLanguage === "en") {
    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
    return days;
  } else {
    let days = ["Paz", "Pzt", "Sal", "Çrş", "Prş", "Cum", "Cmt"];
    return days;
  }
}

export const daysStore = create(async (set) => {
  const userLanguage = await backendLanguage();
  const today = new Date();
  const day = ChangeLanguage(userLanguage)[today.getDay()];
  const startOfWeek = today.getDate() - today.getDay();
  const datesOfWeek = ChangeLanguage(userLanguage).map((_, i) => {
    const newDate = new Date(today);
    newDate.setDate(startOfWeek + i);
    return newDate.getDate();
  });
  const preciseDatesOfWeek = ChangeLanguage(userLanguage).map((_, i) => {
    const newDate = new Date(today);
    newDate.setDate(startOfWeek + i);
    return newDate.toLocaleDateString("en-CA", {
      year: "numeric",
      month: "2-digit",
      day: "2-digit",
    });
  });
  const lastSelectedDay: any = [];
  set({
    day: day as string,
    currentLanguage: currentLanguage as string,
    selectedDay: day as string,
    setSelectedDay: (d: string) => set({ selectedDay: d }),
    datesOfWeek: datesOfWeek as number[],
    days: ChangeLanguage(userLanguage) as string[],
    preciseDatesOfWeek: preciseDatesOfWeek as string[],
    lastSelectedDay: lastSelectedDay as string[],
    setLastSelectedDay: (d: string) => set({ lastSelectedDay: d }),
    setCurrentLanguage: (lang: string) => set({ currentLanguage: lang }),
    ChangeLanguage: (lang: string) => {
      let days = ChangeLanguage(lang);
      set({ days });
    },
    backendLanguage: backendLanguage,
  });
});
