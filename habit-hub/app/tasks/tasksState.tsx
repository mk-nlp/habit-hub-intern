import { create } from "zustand";
import { daysStore } from "./daysState";

export const tasksStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
    })),
}));
