import React, { useRef } from "react";
import { useNavigate } from "react-router-dom";
function Register() {
  const navigate = useNavigate();

  const input_username = useRef();
  const input_password = useRef();
  const input_verify_password = useRef();

  const submitHandler = (e) => {
    e.preventDefault();
    if (input_password.current.value === input_verify_password.current.value) {
      fetch("http://localhost:8000/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          name: input_username.current.value,
          website: input_password.current.value,
        }),
      }).then((res) =>
        res.json().then((data) => {
          navigate("/login");
        })
      );
    }
  };
  return (
    <form onSubmit={submitHandler}>
      <label htmlFor="username">choose username</label>
      <input type="text" ref={input_username} />
      <label htmlFor="password">choose password</label>
      <input type="password" ref={input_password} />
      <label htmlFor="verify-password">verify password</label>
      <input type="password" ref={input_verify_password} />
      <button>submit</button>
    </form>
  );
}

export default Register;
