"use client";
import React, { useState } from "react";
import { useTask } from "./hooks/uesTask";
import SingleTask from "./components/SingleTask";
import Modal from "./components/Modal";
import { ModalData } from "./interfaces/Modal";
import { setModalData } from "./utils/Modal";
import { v4 as uuidv4 } from "uuid";

const Home = () => {
  const { tasks, isLoading, createTask, updateTask, deleteTask } = useTask();
  const [newTask, setNewTask] = useState<string>("");
  const [modal, setModal] = useState<ModalData>({
    content: "",
    status: "success",
  });
  const [isModal, setIsModal] = useState<boolean>(false);

  const updateModal = (_isSuccess: boolean, _content: string) => {
    const modalData = setModalData(_isSuccess, _content);
    setModal(modalData);
    setIsModal(true);
  };

  const createTaskAndSetModal = async (taskName: string) => {
    const id = uuidv4();
    const isSuccess = await createTask(id, taskName);
    updateModal(isSuccess, "Create");
    setNewTask("");
  };

  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div>
          <p className="text-7xl font-bold mb-10 tracking-widest">Todo List </p>
          <section className="py-5 min-h-fit flex flex-col justify-center items-center bg-white shadow-white shadow-normal rounded-lg text-black">
            <div className="my-5 flex items-center gap-5">
              <input
                value={newTask}
                onChange={(e) => setNewTask(e.target.value)}
                className="rounded-lg py-2 px-5 bg-gray-200"
              />
              <button
                onClick={() => createTaskAndSetModal(newTask)}
                className="py-2 px-5 rounded-lg bg-sky-400 hover:bg-sky-100 duration-300 "
              >
                <p className="text-white text-2xl ">+</p>
              </button>
            </div>
            {!isLoading ? (
              tasks.map((task) => (
                <SingleTask
                  key={task.id}
                  task={task}
                  updateModal={updateModal}
                  updateTask={updateTask}
                  deleteTask={deleteTask}
                />
              ))
            ) : (
              <p className="text-2xl my-5"> Loading... </p>
            )}
          </section>
        </div>
        {isModal && <Modal modal={modal} setIsModal={setIsModal} />}
      </main>
    </>
  );
};

export default Home;
