import { sql } from "drizzle-orm";
import { boolean } from "drizzle-orm/mysql-core";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  username: text("name").unique(),
  email: text("email").unique(),
  password_hash: text("password"),
});

export const session = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("userId").notNull().references(() => user.id),
  expiresAt: integer("expiresAt").notNull(),
});

export const task = sqliteTable("task", {
  id: integer("id").primaryKey(),
  task: text("task"),
  category: text("category"),
  emoji: text("emoji"),
  bgColor: text("bgColor"),
  routine: text("routine"),
  date: text("date"),
  userId: integer("userId").references(() => session.id),
  completed : integer("completed", { mode: "boolean"})
});

