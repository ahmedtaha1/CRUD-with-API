import React, { useState } from "react";

function Add({ addEmployee }) {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const add = () => {
    if (name !== "" && title !== "") {
      addEmployee(name, title);
    } else {
      alert("Please Fill All Data");
    }
    setName("");
    setTitle("");
  };
  return (
    <div className="mt-4">
      <input
        type="text"
        name="name"
        value={name}
        className="bg-white mb-3 p-3 w-2/3 block  md:w-1/2 lg:w-1/4 m-auto focus:outline-none"
        placeholder="Employee Name"
        onChange={(e) => {
          setName(e.target.value);
        }}
      />

      <input
        type="text"
        name="email"
        value={title}
        className="bg-white mb-3 p-3 w-2/3 block  md:w-1/2 lg:w-1/4 m-auto focus:outline-none"
        placeholder="Employee Title"
        onChange={(e) => {
          setTitle(e.target.value);
        }}
      />

      <button
        className="rounded-full inline-block px-12 py-2  font-semibold  bg-blue text-white mb-4"
        onClick={add}
      >
        Add
      </button>
    </div>
  );
}

export default Add;
