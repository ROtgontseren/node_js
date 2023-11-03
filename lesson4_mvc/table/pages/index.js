import Thead from "@/components/UserList/thead";
import Tbody from "@/components/UserList/tbody";
import Form from "@/components/Form";
import { useState, useEffect } from "react";

export default function Home({users}) {
    const [open, setOpen] = useState(false);
    const [count, setCount] = useState(0);
    const [refresh, setRefresh] = useState(false);
    const [userList, setUserList] = useState([]);

    const closeForm = () => {
         console.log("Formee");
         setOpen(false);
         setCount(5);
         setRefresh(!refresh);
  };

    const getAllUser = async () => {
    const { users } = await fetch("http://localhost:8008/api/users").then(
          (res) => res.json()
        );
        setUserList(users);
  };

  useEffect(() => {
    getAllUser();
  }, [refresh]);
  return (
    <main className="flex items-center bg-slate-300 h-screen flex-col">
      <h1 className="text-center text-2xl font-bold my-4">
        Хэрэглэгчийн жагсаалт
      </h1> 
      <div className=" m-5 flex justify-end">
        <button
          className="btn btn-primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Шинэ хэрэглэгч нэмэх {count}
        </button>
      </div>
      <Form open={open} closeForm={closeForm} />
      <div class="mt-12 mb-12 border border-black rounded-2xl">
        <table class="table">
           <Thead/>
           <Tbody users={userList}/>
        </table>
      </div>
    </main>
  )
}
