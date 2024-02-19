import { postRouter } from "~/server/api/routers/post";
import { createTRPCRouter } from "~/server/api/trpc";

import { cardRouter } from "./routers/card";
import { spotifyRouter } from "./routers/spotify";
import { youtubeRouter } from "./routers/youtube";

/**
 * This is the primary router for your server.
 *
 * All routers added in /api/routers should be manually added here.
 */
export const appRouter = createTRPCRouter({
  post: postRouter,
  card: cardRouter,
  youtube: youtubeRouter,
  spotify: spotifyRouter,
});

// export type definition of API
export type AppRouter = typeof appRouter;
