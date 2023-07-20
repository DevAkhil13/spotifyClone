import React from "react";
import Header from "./Header";
import Footer from "./Footer";
import Mainbody from "./Mainbody";
import Album from "./AlbumsAndSongs/Album";
import Five from "./AlbumsAndSongs/Five";
import One from "./AlbumsAndSongs/One";
import "./Mainx.css";
import { Route, Routes } from "react-router-dom";

const Mainx = () => {
  return (
    <div className="bgr m-1 rounded overflow-auto">
      <Header />
      <Routes>
        <Route path="/" element={<Mainbody />}></Route>
        <Route path="/one" element={<One />}></Route>
        <Route path="/five" element={<Five />}></Route>
        <Route path="/album" element={<Album />}></Route>
      </Routes>
      <Footer />
    </div>
  );
};

export default Mainx;
