import { createTRPCRouter } from "~/server/api/trpc";
import { postRouter } from "./post";

export const appRouter = createTRPCRouter({
  post: postRouter,
});
