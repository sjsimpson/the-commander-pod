import axios from "axios";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const youtubeRouter = createTRPCRouter({
  getChannel: publicProcedure.query(async () => {
    const apiKey = process.env.GOOGLE_API_KEY;

    const res = await axios.get<YoutubeResponse>(
      "https://www.googleapis.com/youtube/v3/channels",
      {
        headers: {
          Accept: "application/json",
        },
        params: {
          key: apiKey,
          part: "contentDetails,snippet",
          id: "UCOwX8yocmkjkJ3hCbwNY7Xg",
        },
      },
    );

    return res.data;
  }),
  getMostRecentEpisode: publicProcedure.query(async () => {
    const episodeUrl = process.env.YOUTUBE_EPISODE

    return episodeUrl
  })
});

interface YoutubeThumbnail {
  url: string;
  width: number;
  height: number;
}

interface YoutubeChannel {
  title: string;
  description: string;
  customUrl: string;
  publishedAt: string;
  thumbnails: {
    default: YoutubeThumbnail;
    medium: YoutubeThumbnail;
    high: YoutubeThumbnail;
  };
  localized: {
    title: string;
    description: string;
  };
  country: "US";
}

interface YoutubeResponseItem {
  kind: string;
  etag: string;
  id: string;
  snippet: YoutubeChannel;
  contentDetails: {
    relatedPlaylists: {
      likes: string;
      uploads: string;
    };
  };
}

interface YoutubeResponse {
  kind: string;
  etag: string;
  pageInfo: {
    totalResults: number;
    resultsPerPage: number;
  };
  items: YoutubeResponseItem;
}
