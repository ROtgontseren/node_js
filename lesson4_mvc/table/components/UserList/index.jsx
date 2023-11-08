import React from "react";
import TBody from "./tbody";
import Thead from "./thead";


const Table = ({ users, handleUpdate, handleDelete }) => {
    return (
      <div className="mt-12 mb-12 border border-black rounded-2xl">
        <table className="table">
          <Thead />
          <TBody
            users={users}
            handleUpdate={handleUpdate}
            handleDelete={handleDelete}
          />
        </table>
      </div>
    );
  };
  
  export default Table;
  