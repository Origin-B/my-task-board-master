// component
import Header from "./layout/Header";
import TaskSection from "./layout/TasksSection";
import AddEditingTaskOverlay from "./layout/AddEditingTaskOverlay";

export default function TasksApp() {
  return (
    <main className="flex-col-style gap-no p-no md:w-4/5 lg:w-1/2 xl:w-[40%]">
      <Header />

      <TaskSection />

      <AddEditingTaskOverlay />
    </main>
  );
}
