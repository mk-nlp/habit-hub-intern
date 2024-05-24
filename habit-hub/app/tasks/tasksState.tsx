import { create } from "zustand";

export const tasksStore = create((set) => ({
  tasks: [],
  setTasks: (tasks) => set({ tasks }),
  addTask: (task) => set((state) => ({ tasks: [...state.tasks, task] })),
  removeTask: (task) =>
    set((state) => ({
      tasks: state.tasks.filter((t) => t.id !== task.id),
    })),
  completeTask: (taskId) => {
    set((state) => {
      const newTasks = state.tasks.map((task) => {
        if (task.id === taskId) {
          return { ...task, completed: true };
        }
        return task;
      });
      return { tasks: newTasks };
    });
  },
}));
