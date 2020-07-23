import Axios from "axios";
export const youtubeApi = Axios.create({
  baseURL: "https://www.googleapis.com/youtube/v3",
  params: {
    part: "snippet",
    maxResults: 5,
    key: process.env.YOUTUBE_API,
  },
});
