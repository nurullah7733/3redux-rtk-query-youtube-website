// http://localhost:9000/videos?tags_like=tips&tags_like=vscode&id_ne=1
// http://localhost:9000/videos?id_ne=7&_limit=2

import axiosInstance from "../../utils/axios";

// let tags = ["tips", "react"];

const getRelatedVideos = async ({ tags, id }) => {
  const limit = 5;
  const queryString =
    tags?.length > 0
      ? tags.map((tag) => `tags_like=${tag}`).join("&") + `&id_ne=${id}`
      : `id_ne=${id}&_limit=${limit}`;

  const response = await axiosInstance.get(`/videos?${queryString}`);
  return response.data;
};

export default getRelatedVideos;
