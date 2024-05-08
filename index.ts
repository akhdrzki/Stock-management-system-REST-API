import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

// import db from "./src/config/db";
// import { users } from "./src/schema/users";
//
// const test = async () => {
//   const result = await db.select().from(users);
//   console.log(result);
// };
//
// test()

export default {
  port: 2001,
  fetch: app.fetch,
};
