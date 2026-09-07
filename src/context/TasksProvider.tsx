import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";

import { type task } from "../data-type";

const tasksContext = createContext<{
  tasks: task[];
  setTasks: (n: task[]) => void;
}>({ tasks: [], setTasks: (n) => n });

export default function TasksProvider({ children }: { children: ReactNode }) {
  const [tasks, setTasks] = useState<task[]>(() => {
    const save = localStorage.getItem("tasks");

    return save ? JSON.parse(save) : [];
  });

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <tasksContext.Provider value={{ tasks, setTasks }}>
      {children}
    </tasksContext.Provider>
  );
}

const useTasks = () => useContext(tasksContext);

export { useTasks };
