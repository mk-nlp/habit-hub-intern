import { sql } from "drizzle-orm";
import { boolean } from "drizzle-orm/mysql-core";
import { text, integer, sqliteTable } from "drizzle-orm/sqlite-core";

export const user = sqliteTable("user", {
  id: integer("id").primaryKey(),
  name: text("name").unique(),
  email: text("email").unique(),
  password: text("password"),
});

export const task = sqliteTable("task", {
  id: integer("id").primaryKey(),
  task: text("task"),
  category: text("category"),
  emoji: text("emoji"),
  bgColor: text("bgColor"),
  routine: text("routine"),
  date: text("date"),
  userId: integer("userId").references(() => user.id),
  completed : integer("completed", { mode: "boolean"})
});

