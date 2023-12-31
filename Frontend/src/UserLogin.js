import React from "react";

function User(user) {
  return (
    <div>
      <div className="user">
        <img src={user.profilePicture} alt={user.name} />
        <span>{user.name}</span>
      </div>
    </div>
  );
}

export default User;
