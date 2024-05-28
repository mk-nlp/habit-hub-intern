import { create } from "zustand";

export const loginStore = create((set) => ({
  email: "",
  password: "",
  setEmail: (e: string) => set({ email: e }),
  setPassword: (p: string) => set({ password: p }),
}));
