import React from "react";
import Trow from "./trow";

const tbody = ({ users }) => {
  return (
    <tbody>
      {users.map((user) => (
        <Trow user={user} />
      ))}
    </tbody>
  );
};

export default tbody;
