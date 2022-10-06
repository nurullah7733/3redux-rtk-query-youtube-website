import { useState } from "react";
import { useEditVideoMutation } from "../../features/api/apiSlice";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";
import Success from "../ui/Success";
import Error from "../ui/Error";

export default function Form({ video = {} }) {
  const [editVideo, { isError, isLoading, error, isSuccess }] =
    useEditVideoMutation();

  const [inputData, setInputData] = useState({
    title: video.title,
    author: video.author,
    description: video.description,
    youtubeLink: video.youtubeLink,
    thumbnail: video.thumbnail,
    date: video.date,
    duration: video.duration,
    views: video.views,
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    editVideo({ id: video.id, data: inputData });
    console.log(inputData);
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                value={inputData.title}
                name="title"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                value={inputData.author}
                name="author"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                value={inputData.description}
                name="description"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                value={inputData.youtubeLink}
                name="youtubeLink"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                value={inputData.thumbnail}
                name="thumbnail"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                value={inputData.date}
                name="date"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                value={inputData.duration}
                name="duration"
                onChange={handleChange}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                value={inputData.views}
                name="views"
                onChange={handleChange}
              />
            </div>
          </div>
        </div>
        <div className="px-4 py-3 bg-gray-50 text-right sm:px-6">
          <button
            disabled={isLoading}
            type="submit"
            className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-0 focus:ring-offset-0 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
        {/* success message */}
        {isSuccess && <Success message="Edit Video successfully" />}
        {isError && <Error message={error} />}
      </div>
    </form>
  );
}
