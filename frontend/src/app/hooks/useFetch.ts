import { useState, useEffect, use } from "react";
import { TasksRes, Task } from "../interfaces/Task";
import { HOST } from "../utils/constants";
import axios from "axios";

export const useFetch = () => {
  const [tasks, setTasks] = useState<Task[]>();

  const getTasks = async () => {
    const res = await axios.get<TasksRes>(`${HOST}/tasks`);
    setTasks(res.data.data);
  };

  useEffect(() => {
    getTasks();
  }, []);

  return { tasks };
};
