import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Login from "./pages/Login";
import Home from "./pages/Home";
import NoPage from "./pages/NoPage";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Posts from "./pages/Posts";
import Todos from "./pages/Todos";
import Albums from "./pages/Albums";
import Navbar from "./pages/Navbar";
import ProtectedPages from "./pages/ProtectedPages";

function App() {
  return (
    <BrowserRouter>
      {localStorage.getItem("currentUser")&&<Navbar />}
      <Routes>
        {/* <Route path="/" element={<Login />} /> */}
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />

        <Route element={<ProtectedPages />}>
          <Route path="/home" element={<Home />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/albums" element={<Albums />} />
          <Route path="/posts" element={<Posts />} />
          <Route path="/todos" element={<Todos />} />
        </Route>

        <Route path="*" element={<NoPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
