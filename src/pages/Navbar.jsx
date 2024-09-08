import React from "react";
import { useNavigate, Link, Outlet } from "react-router-dom";
function Navbar() {
  const Navigate = useNavigate();
  return (
    <div className="navbar">
      <button
        onClick={() => {
          localStorage.removeItem("currentUser");
          Navigate("/login");
        }}
      >
        log out
      </button>
      <Link to={"/albums"}>Albums</Link>
      <Link to={"/posts"}>Posts</Link>
      <Link to={"/todos"}> Todos</Link>
      <Link to={"/profile"}>Profile</Link>
      <Outlet />
      <h1>{JSON.parse(localStorage.getItem("currentUser")).name}</h1>
    </div>
  );
}

export default Navbar;
