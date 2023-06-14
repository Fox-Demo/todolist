export type Task = {
  id: number;
  name: string;
  status: boolean;
};

export type TasksRes = {
  success: boolean;
  data: Task[];
};
