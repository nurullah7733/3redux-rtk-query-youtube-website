import axios from "../../utils/axios";

const getVideo = async (oldLike, addNew, id) => {
  try {
    const response = await axios.patch(`/videos/${id}`, {
      likes: oldLike + addNew,
      unlikes: 100,
    });
    return response.data;
  } catch (error) {
    console.log(error);
  }
};

export default getVideo;
