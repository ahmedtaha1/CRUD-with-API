import React from "react";
import Add from "./Add";
import { useState, useEffect } from "react";
import axios from "axios";

function Crud() {
  const [employees, setEmployees] = useState([]);
  const [edit, setEdit] = useState(false);
  const [id, setId] = useState(null);
  const [updatedName, setUpdatedName] = useState("");
  const [updatedTitle, setUpdatedTitle] = useState("");
  //read
  const fetchEmployees = async () => {
    const res = await axios.get("https://jsonplaceholder.typicode.com/users");
    return res.data;
  };
  useEffect(() => {
    const getAllEmployees = async () => {
      const allEmployees = await fetchEmployees();
      if (allEmployees) setEmployees(allEmployees);
    };
    getAllEmployees();
  }, []);
  //create
  const addEmployee = async (name, title) => {
    const res = await axios.post("https://jsonplaceholder.typicode.com/users", {
      id: employees.length + 1,
      name: name,
      username: title,
    });
    setEmployees([...employees, res.data]);
  };
  //delete
  const deleteEmployee = async (id) => {
    await axios.delete(`https://jsonplaceholder.typicode.com/users/${id}`);
    const filteredEmployees = employees.filter((employee) => {
      return employee.id !== id;
    });
    setEmployees(filteredEmployees);
  };
  //update
  const updateEmployee = async (id) => {
    const res = await axios.put(
      `https://jsonplaceholder.typicode.com/users/${id}`,
      {
        name: updatedName,
        username: updatedTitle,
      }
    );
    setEmployees(
      employees.map((employee) => {
        return employee.id === id ? { ...res.data } : employee;
      })
    );
    setUpdatedName("");
    setUpdatedTitle("");
  };
  return (
    <div className="bg-gray-100 ">
      <div className="bg-blue p-5">
        <h1 className="text-white text-lg">Apps square Employees Management</h1>
      </div>
      <Add addEmployee={addEmployee} updateTrainee={updateEmployee} />
      <div className="flex gap-10 flex-wrap justify-center  pb-5">
        {employees.map((employee) => (
          <div
            className="lg:w-1/3 bg-white p-5 rounded-md shadow-sm"
            key={employee.id}
          >
            <h2 className="mb-3 text-lg font-bold">{employee.name} </h2>
            <h3 className="text-gray-500 mb-3">{employee.username} </h3>
            <button
              className="rounded-full inline-block px-12 py-2 mx-2 font-semibold  bg-red-600 text-white mb-3"
              onClick={() => deleteEmployee(employee.id)}
            >
              Delete
            </button>
            <button
              className="rounded-full inline-block px-12 py-2 mx-2 font-semibold  bg-cyan-400 text-white mb-3"
              onClick={() => {
                setEdit(true);
                setId(employee.id);
              }}
            >
              Edit
            </button>
            {edit && employee.id === id && (
              <>
                <input
                  type="text"
                  placeholder=" Edit Name"
                  value={updatedName}
                  className="bg-gray-100 mb-3 p-3 w-2/3 block  md:w-1/2 lg:w-2/4 m-auto focus:outline-none"
                  onChange={(e) => {
                    setUpdatedName(e.target.value);
                  }}
                />
                <input
                  type="text"
                  placeholder=" Edit Title"
                  value={updatedTitle}
                  className="bg-gray-100 mb-3 p-3 w-2/3 block  md:w-1/2 lg:w-2/4 m-auto focus:outline-none"
                  onChange={(e) => {
                    setUpdatedTitle(e.target.value);
                  }}
                />
                <button
                  className="rounded-full inline-block px-12 py-2  font-semibold  bg-blue text-white mb-4"
                  onClick={() => {
                    if (updatedName !== "" && updatedTitle !== "") {
                      updateEmployee(employee.id);
                    }
                    setEdit(false);
                  }}
                >
                  Update
                </button>
              </>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default Crud;
