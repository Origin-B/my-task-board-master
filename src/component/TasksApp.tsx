// component
import Header from "./layout/Header";
import TaskSection from "./layout/TasksSection";
import AddEditingTaskOverlay from "./layout/AddEditingTaskOverlay";

// hooks
import { useAddEditingTask } from "../context/AddEditingTaskProvider";

export default function TasksApp() {
  const { addEditingTask } = useAddEditingTask();

  return (
    <main className="flex-col-style gap-no p-no md:w-4/5 lg:w-1/2 xl:w-[40%]">
      <Header />

      <TaskSection key={addEditingTask.id || "new-task"} />

      <AddEditingTaskOverlay />
    </main>
  );
}
