import React from "react";

function Tweet({ name, username, date, message }) {
  return (
    <div>
      <span>{name}</span>
      <span>{username}</span>
          <span>{date}</span>
          <p>{message}</p>
    </div>
  );
}

export default Tweet;
