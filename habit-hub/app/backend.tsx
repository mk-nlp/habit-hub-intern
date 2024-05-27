import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "../schema";
import { eq } from "drizzle-orm";
import { get } from "http";

const sqlite = new Database("test.db");
const db = drizzle(sqlite, { schema });

export const getUser = await db.select().from(schema.user);

export const getUserById = async (id: number) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.id, id));
  return user;
};

export const addUser = async (
  name: string,
  email: string,
  password: string
) => {
  await db.insert(schema.user).values({ name, email, password });
};
export const getUserByName = async (name: string) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.name, name));
  return user;
};

export const createTask = async (
  task: string,
  category: string,
  emoji: string,
  bgColor: string,
  routine: string,
  date: string,
  userId: number
) => {
  await db.insert(schema.task).values({
    task,
    category,
    emoji,
    bgColor,
    routine,
    date,
    userId,
  });
};

export const getTasks = async (userId: number) => {
  const tasks = await db
    .select()
    .from(schema.task)
    .where(eq(schema.task.userId, userId));
  return tasks;
};
