import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const spotifyRouter = createTRPCRouter({
  getMostRecentEpisode: publicProcedure.query(async () => {
    const episodeUrl = process.env.SPOTIFY_EPISODE;

    return episodeUrl;
  }),
});
