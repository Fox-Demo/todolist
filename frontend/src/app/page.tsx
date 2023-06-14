"use client";
import React, { useState } from "react";
import { useFetch } from "./hooks/useFetch";
import SingleTask from "./components/SingleTask";

const Home = () => {
  const { tasks } = useFetch();

  return (
    <>
      <main className="w-screen h-screen flex flex-col justify-center items-center">
        <div>
          <p className="text-7xl font-bold mb-10 tracking-widest">Todo List </p>
          <section className="py-5 min-h-fit flex flex-col justify-center items-center bg-white shadow-white shadow-lg rounded-lg text-black">
            <div className="my-5 flex items-center gap-5">
              <input className="rounded-lg py-2 px-5 bg-gray-200" />
              <button className="py-2 px-5 rounded-lg bg-sky-400 hover:bg-sky-100 duration-300 ">
                <p className="text-white text-2xl "> + </p>
              </button>
            </div>
            {tasks ? (
              tasks.map((task) => <SingleTask key={task.id} {...task} />)
            ) : (
              <p className="text-2xl my-5"> Loading... </p>
            )}
          </section>
        </div>
      </main>
    </>
  );
};

export default Home;
