import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "../schema";
import { eq, and } from "drizzle-orm";
import { get } from "http";
import { hashPassword, comparePassword } from "@/utils/password";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { user, session } from "../schema";
const sqlite = new Database("test.db");
const db = drizzle(sqlite, { schema });

export const addUser = async (
  username: string,
  email: string,
  password: string
) => {
  const hash = await hashPassword(password);
  await db.insert(schema.user).values({
    id: Math.random().toString(36).substring(7),
    username,
    email,
    password_hash: hash,
  });
};

export const getUserByName = async (name: string) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.username, name));
  return user;
};

export const logInUser = async (email: string, password: string) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.email, email));
  console.log("USER", user);
  if (!user || !user[0].password_hash) {
    return null;
  }
  const result = await comparePassword(password, user[0].password_hash);
  console.log("RESULT", result);
  if (!result) {
    return null;
  }
  return user;
};

export const getUserFromDb = async (email: string, password: string) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(
      and(eq(schema.user.email, email), eq(schema.user.password, password))
    );
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

export const adapter = new DrizzleSQLiteAdapter(db, session, user);
