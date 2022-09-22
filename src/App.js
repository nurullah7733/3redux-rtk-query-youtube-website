import React from "react";
import Home from "./pages/home";
import VideoDetails from "./pages/video-details";
import Navbar from "./components/Home/navbar/navbar";
import Footer from "./components/Home/footer/footer";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AuthorVideos from "./pages/author-videos";
import axios from "./utils/axios";

function App() {
  return (
    <>
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/videos/:videoId" element={<VideoDetails />} />
          <Route path="/videos/author=:authorName" element={<AuthorVideos />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}

export default App;
