import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const youtubeRouter = createTRPCRouter({
  getChannel: publicProcedure.query(async () => {
    const apiKey = process.env.GOOGLE_API_KEY;

    const res = await axios.get(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        headers: {
          Accept: "application/json",
        },
        params: {
          key: apiKey,
          part: "contentDetails,snippet",
          id: "UCLsiaNUb42gRAP7ewbJ0ecQ",
        },
      },
    );

    return res.data;
  }),
});
