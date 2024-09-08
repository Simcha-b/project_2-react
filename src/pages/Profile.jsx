import React from "react";

function Profile() {
  const user = JSON.parse(localStorage.getItem("currentUser"));

  return (
    <div className="content">
      <h1>{user.name}</h1>
      <h1>{user.website}</h1>
      <h2>{user.email}</h2>
      <h2>{user.phone}</h2>
    </div>
  );
}

export default Profile;
