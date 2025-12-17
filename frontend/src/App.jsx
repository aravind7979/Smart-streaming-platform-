import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./components/Navbar";
import SideMenu from "./components/SideMenu";

import Home from "./pages/Home";
import Explore from "./pages/Explore";
import Search from "./pages/Search";
import VideoPlayer from "./pages/VideoPlayer";
import AudioPlayer from "./pages/AudioPlayer";
import Playlist from "./pages/Playlist";
import Upload from "./pages/Upload";
import Profile from "./pages/Profile";

function App() {
  return (
    <BrowserRouter>
      {/* Top Navbar */}
      <Navbar />

      {/* Main Layout */}
      <div style={{ display: "flex", minHeight: "calc(100vh - 60px)" }}>
        {/* Left Sidebar */}
        <SideMenu />

        {/* Page Content */}
        <div style={{ flex: 1 }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/explore" element={<Explore />} />
            <Route path="/search" element={<Search />} />
            <Route path="/video/:id" element={<VideoPlayer />} />
            <Route path="/audio/:id" element={<AudioPlayer />} />
            <Route path="/playlist/:id" element={<Playlist />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/profile" element={<Profile />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
