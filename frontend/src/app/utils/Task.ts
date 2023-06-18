import axios from "axios";
import { HOST } from "./constants";
import { TasksRes, Task } from "../interfaces/Task";

export const createTask = async (
  name: string,
  id: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): Promise<number> => {
  try {
    const { data } = await axios.post<TasksRes>(`${HOST}/tasks`, { id, name });
    setTasks(data.data);
    return 200;
  } catch (e) {
    console.log(e);
    return 404;
  }
};

export const updateTask = async (
  id: string,
  status: boolean,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): Promise<number> => {
  try {
    const res = await axios.put<TasksRes>(`${HOST}/tasks/${id}`, {
      status,
    });
    setTasks(res.data.data);
    return 200;
  } catch (e) {
    console.log(e);
    return 404;
  }
};

export const deleteTask = async (
  id: string,
  setTasks: React.Dispatch<React.SetStateAction<Task[]>>
): Promise<number> => {
  try {
    const res = await axios.delete<TasksRes>(`${HOST}/tasks/${id}`);
    setTasks(res.data.data);
    return 200;
  } catch (e) {
    console.log(e);
    return 404;
  }
};
