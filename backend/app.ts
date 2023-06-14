import express from "express";
import cors from "cors";
const app = express();
const PORT = 3001;

const responseJson = { success: true, data: {} };

let tasks = [
  {
    id: 1,
    name: "Book",
    status: false,
  },
  {
    id: 2,
    name: "Apple",
    status: false,
  },
  {
    id: 3,
    name: "Pen",
    status: false,
  },
];

app.use(cors());
app.use(express.json());

app.get("/tasks", (req, res) => {
  res.status(200).json({ ...responseJson, data: tasks });
});

app.delete("/tasks/:id", (req, res) => {
  const { id } = req.params;

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return res.status(404).json({ success: false, data: {} });
  }
  tasks = tasks.filter((task) => task.id !== Number(id));

  return res.status(200).json({ ...responseJson, data: tasks });
});

app.put("/tasks/:id", (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const task = tasks.find((task) => task.id === Number(id));

  if (!task) {
    return res.status(404).json({ success: false, data: {} });
  }
  tasks = tasks.map((task) =>
    task.id === Number(id) ? { ...task, status } : task
  );

  return res.status(200).json({ ...responseJson, data: tasks });
});

app.listen(PORT, () => {
  console.log(`Server is running on ${PORT} `);
});
