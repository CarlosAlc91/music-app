import { Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Home from "./pages/Home";
import Page404 from "./pages/Page404";
import TrackDetails from "./pages/TrackDetails";
import ArtistDetails from "./pages/ArtistDetails";
import Playlists from "./pages/Playlists";
import PlaylistDetails from "./pages/PlaylistDetails";
import PlaylistShared from "./pages/PlaylistShared";

function App() {
  return (
    /* 1. configuracion de rutas */
    /* 2. go to login.jsx */
    <>
      <Routes>
        {/* 3. renderizar <Login/>  */}
        <Route path="/auth/login" element={<Login />} />
        {/* 4. renderizar <Register/> */}
        <Route path="/auth/register" element={<Register />} />

        {/* 5. ruta base <Home/> */}
        <Route path="/" element={<Home />} />
        {/* 7. ruta tracks details */}
        <Route path="/tracks/:id" element={<TrackDetails />} />
        {/* 8. ruta artist details */}
        <Route path="/artists/:id" element={<ArtistDetails />} />
        {/* 9. ruta playlists */}
        <Route path="/playlists" element={<Playlists />} />
        {/* 10. ruta playlists */}
        <Route path="/playlists/:id" element={<PlaylistDetails />} />
        {/* 11. ruta playlist */}
        <Route path="/playlists/public/:id" element={<PlaylistShared />} />

        {/* 6. ruta errores 404 */}
        <Route path="*" element={<Page404 />} />
      </Routes>
    </>
  );
}

export default App;
