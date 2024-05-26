import { create } from "zustand";

const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
const today = new Date();
const day = days[today.getDay()];
const startOfWeek = today.getDate() - today.getDay();
const datesOfWeek = days.map((_, i) => {
  const newDate = new Date(today);
  newDate.setDate(startOfWeek + i);
  return newDate.getDate();
});

export const daysStore = create((set) => ({
  day: day as string,
  selectedDay: day as string,
  setSelectedDay: (d: string) => set({ selectedDay: d }),
  datesOfWeek: datesOfWeek as number[],
  days: days as string[],
}));
