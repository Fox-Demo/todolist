import { useState, useEffect, use } from "react";
import { TasksRes, Task } from "../interfaces/Task";
import { HOST } from "../utils/constants";
import axios from "axios";

export const useTask = () => {
  const [tasks, setTasks] = useState<Task[]>([]);
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [isError, setIsError] = useState<boolean>(false);

  const getTasks = async () => {
    try {
      const res = await axios.get<TasksRes>(`${HOST}/tasks`);
      setTasks(res.data.data);
      setIsError(false);
    } catch (e) {
      console.log(e);
      setIsError(true);
    }
  };

  const deleteTask = async (id: string): Promise<boolean> => {
    try {
      const res = await axios.delete<TasksRes>(`${HOST}/tasks/${id}`);
      setTasks(res.data.data);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const updateTask = async (id: string, status: boolean): Promise<boolean> => {
    try {
      const res = await axios.put<TasksRes>(`${HOST}/tasks/${id}`, {
        status,
      });
      setTasks(res.data.data);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  const createTask = async (newId: string, name: string): Promise<boolean> => {
    try {
      const { data } = await axios.post<TasksRes>(`${HOST}/tasks`, {
        id: newId,
        name,
      });
      setTasks(data.data);
      return true;
    } catch (e) {
      console.log(e);
      return false;
    }
  };

  useEffect(() => {
    getTasks();
    setIsLoading(false);
  }, []);

  return {
    tasks,
    setTasks,
    isError,
    isLoading,
    deleteTask,
    createTask,
    updateTask,
  };
};
