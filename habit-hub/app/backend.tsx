import { drizzle } from "drizzle-orm/better-sqlite3";
import Database from "better-sqlite3";
import * as schema from "../schema";
import { eq, and } from "drizzle-orm";
import { get } from "http";
import { hashPassword, verifyPassword } from "@/utils/password";
import { DrizzleSQLiteAdapter } from "@lucia-auth/adapter-drizzle";
import { user, session } from "../schema";
import { hash } from "crypto";
import { error } from "console";
const sqlite = new Database("test.db");
const db = drizzle(sqlite, { schema });

export const IdGenerator = () => {
  return Math.floor(Math.random() * 100000000).toString();
};

export const getSession = async (id: string) => {
  const session = await db
    .select()
    .from(schema.session)
    .where(eq(schema.session.userId, id));
  return session;
};

export const logOut = async (id: string) => {
  await db.delete(schema.session).where(eq(schema.session.userId, id));
  await db.delete(schema.session).where(eq(schema.session.userId, id));
};

export const addUser = async (
  username: string,
  email: string,
  password: string
) => {
  const hash = (await hashPassword(password)) as string;
  try {
    await db.insert(schema.user).values({
      id: IdGenerator(),
      username,
      email,
      password_hash: hash,
    });
  } catch (error) {
    console.error("Error adding user:", error);
    return { success: false };
  }
  return { success: true };
};

export const addUserWithGithub = async (
  userId: string,
  username: string,
  githubId: number
) => {
  await db.insert(schema.user).values({
    id: userId,
    username,
    github_id: githubId,
  });
};

export const checkGithubUser = async (githubId: number) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.github_id, githubId));
  return user;
};

export const getUserByName = async (name: string) => {
  const user = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.username, name));
  return user;
};

export const logInUser = async (email: string, password: string) => {
  try {
    const [user] = await db
      .select()
      .from(schema.user)
      .where(eq(schema.user.email, email));

    if (!user || !user.password_hash) {
      return false;
    }
    const isValid = (await hashPassword(password)) === user.password_hash;
    if (isValid) {
      return user;
    }
    return false;
  } catch (error) {
    console.error("Error logging in user:", error);
    return false;
  }
};

export const findUserFromSession = async (sessionId: string) => {
  const session = await db
    .select()
    .from(schema.session)
    .where(eq(schema.session.id, sessionId));
  const [user] = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.id, session[0].userId));
  return user.id;
};

export const findUserTasks = async (userId: string) => {
  const tasks = await db
    .select()
    .from(schema.task)
    .where(eq(schema.task.userId, userId));
  return tasks;
};

export const createTask = async (
  task: string,
  category: string,
  emoji: string,
  bgColor: string,
  routine: string,
  date: string,
  userId: string
) => {
  await db.insert(schema.task).values({
    id: IdGenerator(),
    task,
    category,
    emoji,
    bgColor,
    routine,
    date,
    userId,
    completed: false,
  });
};

export const getTasks = async (userId: string) => {
  const tasks = await db
    .select()
    .from(schema.task)
    .where(eq(schema.task.userId, userId));

  return tasks;
};

export const getTaskByDate = async (userId: string, date: string) => {
  const tasks = await db
    .select()
    .from(schema.task)
    .where(and(eq(schema.task.userId, userId), eq(schema.task.date, date)));

  return tasks;
};

export const completeTask = async (taskId: string) => {
  await db
    .update(schema.task)
    .set({ completed: true })
    .where(eq(schema.task.id, taskId));

  return "Task completed successfully";
};

export const findUserDetails = async (userId: string) => {
  const [user] = await db
    .select()
    .from(schema.user)
    .where(eq(schema.user.id, userId));
  return user;
};

export const adapter = new DrizzleSQLiteAdapter(db, session, user);
