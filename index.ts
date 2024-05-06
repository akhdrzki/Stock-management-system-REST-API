import { Hono } from "hono";
import dotenv from "dotenv/config";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});


export default {
  port: 2000,
  fetch: app.fetch,
};
