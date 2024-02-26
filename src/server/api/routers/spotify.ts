import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const spotifyRouter = createTRPCRouter({
  getMostRecentEpisode: publicProcedure.query(async () => {
    return process.env.SPOTIFY_EPISODE;
  }),
});
