import React from "react";

const trow = ({ user }) => {
  const getDepartment = (department) => {
    switch (department) {
      case "human resource": {
        return (
          <div className={`badge badge-primary badge-outline`}>
            {user.department}
          </div>
        );
      }
      case "technology": {
        return (
          <div className={`badge badge-secondary badge-outline`}>
            {user.department}
          </div>
        );
      }
      default: {
        return (
          <div className={`badge badge-accent badge-outline`}>
            {user.department}
          </div>
        );
      }
    }
  };
  return (
    <tr className="hover:bg-slate-400">
      <th>
        <div class="avatar">
          <div class="mask mask-squircle w-12 h-12">
            <img src={user.avatarUrl} alt={user.firstName} />
          </div>
        </div>
      </th>
      <td>
        <div class="flex items-center space-x-3">
          <div>
            <span className="font-bold">{user.firstName}</span>
          </div>
        </div>
      </td>
      <td>
        <span className="font-bold">{user.lastName}</span>
      </td>
      <td>
        <span className="font-bold">{user.email}</span>
      </td>
      <td>
        <button className="btn btn-ghost btn-xs">{user.birthDate}</button>
      </td>
      <td>{getDepartment(user.department)}</td>
      <th className="flex justify-evenly w-[200px]">
        <button class="btn btn-primary"> Put </button>
        <button class="btn btn-error">Del</button>
      </th>
    </tr>
  );
};

export default trow;
