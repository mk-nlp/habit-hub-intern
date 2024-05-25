import { create } from "zustand";

// This is just a carry state for the AddTask component
// Carries the state of the task, category, explanation, task2, and emoji from suggestions
export const AddTaskStore = create((set) => ({
  task: "Enter a task name",
  category: "Enter a category",
  explanation: "",
  task2: "",
  emoji: "⭐",

  setTask: (task: string) => set({ task }),
  setCategory: (category: string) => set({ category }),
  setExplanation: (explanation: string) => set({ explanation }),
  setTask2: (task2: string) => set({ task2 }),
  setEmoji: (emoji: string) => set({ emoji }),
  addTaskToCreator: (
    task: string,
    category: string,
    emoji: string,
    taskId: number
  ) => {
    set({ task });
    set({ category });
    set({ emoji });
  },
}));
