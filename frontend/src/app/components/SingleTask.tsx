import React, { useState } from "react";
import { Task } from "../interfaces/Task";
import { HOST } from "../utils/constants";
import axios from "axios";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

const SingleTask: React.FC<Task> = ({ id, name, status: taskStatus }) => {
  const [status, setStatus] = useState(taskStatus);

  const updateTaskStatus = async (_status: boolean) => {
    await axios.put(`${HOST}/tasks/${id}`, {
      status: _status,
    });
    setStatus(_status); // Refresh the web page
  };

  const deleteTask = async () => {
    // No rerendering
    await axios.delete(`${HOST}/tasks/${id}`);
  };

  return (
    <>
      <div className="flex justify-between items-center w-full px-14 py-2 text-3xl mb-2">
        <p>{name}</p>
        <div className="flex gap-2">
          {status ? (
            <AiFillCheckCircle
              onClick={() => updateTaskStatus(false)}
              className="cursor-pointer text-green-400 hover:text-green-100 duration-300"
            />
          ) : (
            <AiFillCheckCircle
              onClick={() => updateTaskStatus(true)}
              className="cursor-pointer text-gray-400 hover:text-gray-100 duration-300"
            />
          )}
          <AiFillDelete
            onClick={() => deleteTask()}
            className="cursor-pointer text-red-400 hover:text-red-100 duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default SingleTask;
