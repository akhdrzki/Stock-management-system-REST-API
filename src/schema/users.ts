import { mysqlEnum, varchar, serial, mysqlTable } from "drizzle-orm/mysql-core";

// users schema
export const users = mysqlTable("users", {
  userId: serial("userId").primaryKey(),
  name: varchar("name", { length: 50 }),
  role: mysqlEnum("role", ["admin", "chef", "bartender", "waiter"]),
  password: varchar("password", { length: 200 })
})


