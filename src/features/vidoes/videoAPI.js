import axios from "../../utils/axios";
// http://localhost:9000/videos?tags_like=tips

const getVideos = async (tags, search, pageNumber) => {
  let queryString = "";
  if (tags?.length > 0) {
    queryString += tags.map((tag) => `tags_like=${tag}`).join("&");
  }
  if (search) {
    queryString += `&q=${search}`;
  }

  const response = await axios.get(
    `/videos/?${queryString}&_page=${pageNumber}&_limit=5`
  );
  return response.data;
};

export default getVideos;
