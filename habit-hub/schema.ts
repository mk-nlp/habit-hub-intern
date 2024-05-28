import { sql } from "drizzle-orm";
import { boolean } from "drizzle-orm/mysql-core";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: text("id").notNull().primaryKey(),
  username: text("username").unique(),
  email: text("email").unique(),
  password_hash: text("password_has"),
});

export const session = sqliteTable("session", {
  id: text("id").notNull().primaryKey(),
  userId: text("userId").notNull().references(() => user.id),
  expiresAt: integer("expiresAt").notNull(),
});

export const task = sqliteTable("task", {
  id: text("id").primaryKey(),
  task: text("task"),
  category: text("category"),
  emoji: text("emoji"),
  bgColor: text("bgColor"),
  routine: text("routine"),
  date: text("date"),
  userId: text("userId").references(() => user.id),
  completed : integer("completed", { mode: "boolean"})
});

