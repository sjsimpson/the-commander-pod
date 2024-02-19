import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";

import { cardRouter } from "./routers/card";
import { youtubeRouter } from "./routers/youtube";
import { spotifyRouter } from "./routers/spotify";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  card: cardRouter,
  youtube: youtubeRouter,
  spotify: spotifyRouter
});

// export type definition of API
export type AppRouter = typeof appRouter;
