// @ts-ignore
import { create } from "zustand";

export const tasksStore = create((set) => ({
  tasks: [],
  setTasks: (tasks: any) => set({ tasks }),
  addTask: (task: any) =>
    set((state: any) => ({ tasks: [...state.tasks, task].flat() })),
  removeTask: (task: any) =>
    set((state: any) => ({
      tasks: state.tasks.filter((t: any) => t.id !== task.id),
    })),
  completeTask: (taskId: any) => {
    set((state: any) => {
      const newTasks = state.tasks.map((task: any) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      });
      return { tasks: newTasks };
    });
  },
  emptyTasks: () => set({ tasks: [] }),
}));
