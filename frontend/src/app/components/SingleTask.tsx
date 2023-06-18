import { Task } from "../interfaces/Task";
import { AiFillCheckCircle, AiFillDelete } from "react-icons/ai";

interface SingleTaskProps {
  task: Task;
  updateModal: (status: boolean, content: string) => void;
  updateTask: (id: string, status: boolean) => Promise<boolean>;
  deleteTask: (id: string) => Promise<boolean>;
}

const SingleTask: React.FC<SingleTaskProps> = ({
  task,
  updateModal,
  updateTask,
  deleteTask,
}) => {
  const updateTaskAndSetModal = async () => {
    const isSuccess = await updateTask(task.id, !task.status);
    let content = task.status ? "Back" : "Complete";
    updateModal(isSuccess, content);
  };

  const deleteTaskAndSetModal = async () => {
    const isSuccess = await deleteTask(task.id);
    updateModal(isSuccess, "Delete");
  };

  return (
    <>
      <div className="flex justify-between items-center w-full px-14 py-2 text-3xl mb-2">
        <p>{task.name}</p>
        <div className="flex gap-2">
          {task.status ? (
            <AiFillCheckCircle
              onClick={() => updateTaskAndSetModal()}
              className="cursor-pointer text-green-400 hover:text-green-100 duration-300"
            />
          ) : (
            <AiFillCheckCircle
              onClick={() => updateTaskAndSetModal()}
              className="cursor-pointer text-gray-400 hover:text-gray-100 duration-300"
            />
          )}
          <AiFillDelete
            onClick={() => deleteTaskAndSetModal()}
            className="cursor-pointer text-red-400 hover:text-red-100 duration-300"
          />
        </div>
      </div>
    </>
  );
};

export default SingleTask;
