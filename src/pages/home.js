import React from "react";
import Footer from "../components/Home/footer/footer";
import Navbar from "../components/Home/navbar/navbar";
import Pagination from "../components/Home/pagination/pagination";
import Tags from "../components/Home/tags/tags";
import VideoList from "../components/Home/videos/videoList";

const Home = () => {
  return (
    <div>
      <Tags />
      <VideoList />
      <Pagination />
    </div>
  );
};

export default Home;
