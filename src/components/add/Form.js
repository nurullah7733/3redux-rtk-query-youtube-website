// import Success from "../ui/Success";
import { useState } from "react";
import { useAddvideoMutation } from "../../features/api/apiSlice";
import Error from "../ui/Error";
import Success from "../ui/Success";
import TextArea from "../ui/TextArea";
import TextInput from "../ui/TextInput";

export default function Form() {
  const [addvideo, { isLoading, isError, isSuccess, error }] =
    useAddvideoMutation();

  const [inputData, setInputData] = useState({
    title: "",
    author: "",
    description: "",
    youtubeLink: "",
    thumbnail: "",
    date: "",
    duration: "",
    views: "",
  });

  const handleChange = (e) => {
    setInputData({
      ...inputData,
      [e.target.name]: e.target.value,
    });
  };

  const reset = () => {
    setInputData({
      title: "",
      author: "",
      description: "",
      youtubeLink: "",
      thumbnail: "",
      date: "",
      duration: "",
      views: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addvideo(inputData);
    reset();
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="shadow overflow-hidden sm:rounded-md">
        <div className="px-4 py-5 bg-white sm:p-6">
          <div className="grid grid-cols-6 gap-6">
            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Video Title"
                name="title"
                onChange={handleChange}
                value={inputData.title}
              />
            </div>

            <div className="col-span-6 sm:col-span-3">
              <TextInput
                title="Author"
                name="author"
                onChange={handleChange}
                value={inputData.author}
              />
            </div>

            <div className="col-span-6">
              <TextArea
                title="Description"
                name="description"
                onChange={handleChange}
                value={inputData.description}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="YouTube Video link"
                name="youtubeLink"
                onChange={handleChange}
                value={inputData.youtubeLink}
              />
            </div>

            <div className="col-span-6">
              <TextInput
                title="Thumbnail link"
                name="thumbnail"
                onChange={handleChange}
                value={inputData.thumbnail}
              />
            </div>

            <div className="col-span-6 sm:col-span-6 lg:col-span-2">
              <TextInput
                title="Upload Date"
                name="date"
                onChange={handleChange}
                value={inputData.date}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video Duration"
                name="duration"
                onChange={handleChange}
                value={inputData.duration}
              />
            </div>

            <div className="col-span-6 sm:col-span-3 lg:col-span-2">
              <TextInput
                title="Video no of views"
                name="views"
                onChange={handleChange}
                value={inputData.views}
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
            Save
          </button>
        </div>

        {isSuccess && <Success message="Video was added successfully" />}
        {isError && <Error message={error} />}
      </div>
    </form>
  );
}
