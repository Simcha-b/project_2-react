import React, { useEffect, useState } from "react";
// import { Link, useNavigate } from "react-router-dom";
function Home() {
//    const Navigate = useNavigate();
  const [user, setUser] = useState("");
  useEffect(() => {
    setUser(JSON.parse(localStorage.getItem("currentUser")));
  }, []);

  return (
      <div className="content">hello {user.name}</div>
  );
}

export default Home;
