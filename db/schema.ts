import { sqliteTable, text } from "drizzle-orm/sqlite-core";
export const inquiries = sqliteTable("inquiries", {
  id: text("id").primaryKey(),
  name: text("name").notNull(),
  email: text("email").notNull(),
  projectType: text("project_type").notNull(),
  budget: text("budget").notNull(),
  message: text("message").notNull(),
  createdAt: text("created_at").notNull(),
});
