import { youtube } from "@googleapis/youtube";

import { env } from "~/env";
import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const youtubeRouter = createTRPCRouter({
  getMostRecentVideo: publicProcedure.query(async () => {
    const apiKey = env.GOOGLE_API_KEY;
    const defaultYoutubeVideo = env.DEFAULT_YOUTUBE_VIDEO;

    const youtubeClient = youtube({ version: "v3", auth: apiKey });

    const res = await youtubeClient.activities.list({
      part: ["contentDetails"],
      channelId: "UCOwX8yocmkjkJ3hCbwNY7Xg",
      fields: "items(contentDetails/upload)",
    });

    const mostRecentVideoId =
      res.data.items?.at(0)?.contentDetails?.upload?.videoId;

    if (!mostRecentVideoId) {
      return buildVideoUrl(defaultYoutubeVideo);
    }

    return buildVideoUrl(mostRecentVideoId);
  }),
});

function buildVideoUrl(videoId: string) {
  return `https://youtube.com/embed/${videoId}`;
}
