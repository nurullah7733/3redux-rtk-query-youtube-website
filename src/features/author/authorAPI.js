import axiosInstance from "../../utils/axios";

const getAuthorVideos = async (authorName) => {
  const res = await axiosInstance.get(`/videos?author=${authorName}`);

  return res.data;
};

export default getAuthorVideos;
