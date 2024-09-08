import React, { useEffect, useRef, useState } from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

function Login() {
  const [users, setUsers] = useState([]);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    fetch("http://localhost:8000/users")
      .then((data) => data.json())
      .then((u) => setUsers(u));
  }, []);

  const input_username = useRef();
  const input_password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();

    users.forEach((user) => {
      if (
        user.name === input_username.current.value &&
        user.website === input_password.current.value
      ) {
        localStorage.setItem(
          "currentUser",
          JSON.stringify(user)
        );
        setIsAuthenticated(() => true);
        navigate("/home");
      }
    });
  };

  return (
    <>
      <form className="login" onSubmit={submitHandler}>
        <label htmlFor="username">username </label>
        <input type="text" id="username" ref={input_username} />
        <label htmlFor="password">password</label>
        <input type="password" id="password" ref={input_password} />
        <button>submit</button>
      </form>
      <div>
        Do'nt have an account? <Link to="/register">register</Link>
      </div>
    </>
  );
}

export default Login;
