export interface Task {
  id: string;
  name: string;
  status: boolean;
}

export interface TasksRes {
  success: boolean;
  data: Task[];
}
