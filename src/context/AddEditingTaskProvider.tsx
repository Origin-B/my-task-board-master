import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { useTasks } from "./TasksProvider";

// type
import { type addEditingTask } from "../data-type";

// id
import { nanoid } from "nanoid";

const getStorageItem = <T,>(key: string, defaultValue: T): T => {
  try {
    const saved = localStorage.getItem(key);
    return saved ? (JSON.parse(saved) as T) : defaultValue;
  } catch {
    return defaultValue;
  }
};

const defaultTask: addEditingTask = {
  id: "",
  description: "",
  icon: "",
  title: "",
  status: "",
};

const defaultAlarm = {
  iconAlarm: false,
  taskHeadingAlarm: false,
};

const addEditingTaskContext = createContext({
  addEditingTask: defaultTask,
  alarm: defaultAlarm,
  overlayActive: false,
  handelSaveDeleteTask: (
    name: "save" | "delete" | "close",
    id: string,
    addEditingTask?: addEditingTask,
  ) => console.log(id, name, addEditingTask),
  handelAddEditingTask: (name: "add" | "editing", id: string) =>
    console.log(id, name),
});

export default function AddEditingTaskProvider({
  children,
}: {
  children: ReactNode;
}) {
  const { tasks, setTasks } = useTasks();

  const [addEditingTask, setAddEditingTask] = useState(
    getStorageItem<addEditingTask>("addEditingTask", defaultTask),
  );

  const [alarm, setALarm] = useState(
    getStorageItem<{
      iconAlarm: boolean;
      taskHeadingAlarm: boolean;
    }>("alarm", defaultAlarm),
  );

  const [overlayActive, setOverlayActive] = useState<boolean>(
    getStorageItem<boolean>("overlayActive", false),
  );

  useEffect(() => {
    localStorage.setItem("addEditingTask", JSON.stringify(addEditingTask));

    localStorage.setItem("alarm", JSON.stringify(alarm));

    localStorage.setItem("overlayActive", JSON.stringify(overlayActive));
  }, [alarm, overlayActive, addEditingTask]);

  function handelAddEditingTask(name: "add" | "editing", id: string) {
    setAddEditingTask(() => {
      const target = tasks.find((t) => t.id === id);
      return target && name === "editing" ? target : defaultTask;
    });

    setOverlayActive(true);
  }

  function handelSaveDeleteTask(
    name: "save" | "delete" | "close",
    id: string,
    addEditingTask?: addEditingTask,
  ) {
    if (name === "save" && addEditingTask) {
      if (addEditingTask.title !== "" && addEditingTask.icon !== "") {
        setTasks(
          id === ""
            ? [...tasks, { ...addEditingTask, id: nanoid() }]
            : tasks.map((t) => (t.id === id ? addEditingTask : t)),
        );

        setOverlayActive(false);
      }

      setALarm({
        iconAlarm: addEditingTask.icon === "",
        taskHeadingAlarm: addEditingTask.title === "",
      });
    }

    if (name === "delete") {
      setTasks(tasks.filter((t) => t.id !== id));
      setALarm(defaultAlarm);
      setOverlayActive(false);
    }

    if (name === "close") {
      setALarm(defaultAlarm);
      setOverlayActive(false);
    }
  }

  return (
    <addEditingTaskContext.Provider
      value={{
        addEditingTask,
        alarm,
        overlayActive,
        handelSaveDeleteTask,
        handelAddEditingTask,
      }}
    >
      {children}
    </addEditingTaskContext.Provider>
  );
}

const useAddEditingTask = () => useContext(addEditingTaskContext);

export { useAddEditingTask };
