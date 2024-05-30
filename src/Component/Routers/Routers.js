import { lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
const ShowAll = lazy(() => import("../Playlist/ShowAll"));
const Home = lazy(() => import("../Home/Home"));

const Routers = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="/a/:albumId" element={<ShowAll />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Routers;
