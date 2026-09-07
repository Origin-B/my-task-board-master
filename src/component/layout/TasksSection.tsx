// component
import ProgressIcon from "../shared/ProgressIcon";
import TaskContainer from "../tasks-section/TaskContainer";

// hooks
import { useTasks } from "../../context/TasksProvider";
import { useAddEditingTask } from "../../context/AddEditingTaskProvider";

export default function TaskSection() {
  const { tasks } = useTasks();

  const { handelAddEditingTask } = useAddEditingTask();

  return (
    <section className="flex-col-style gap-no flex-1 overflow-hidden">
      <div className="flex-col-style gap-no scrollbar-thumb-task-in-progress-bg max-h-100 flex-1 overflow-x-auto p-1">
        {tasks.length === 0 ? (
          <div className="gap-sm flex flex-1 items-center justify-center">
            <img src="/Logo.svg" alt="logo" />{" "}
            <p className="text-task-in-progress-bg overflow-hidden text-2xl font-semibold text-nowrap text-ellipsis">
              There is No Tasks to Show
            </p>
          </div>
        ) : (
          tasks.map((task) => <TaskContainer key={task.id} task={task} />)
        )}
      </div>

      <button
        className="bg-btn-add gap-no p-no flex items-center rounded-xl font-semibold"
        type="button"
        onClick={() => handelAddEditingTask("add", "new-task")}
        aria-label="click to add new task"
      >
        <ProgressIcon
          icon={{
            path: "/Add_round_duotone.svg",
            alt: "add icon",
            style: "bg-task-in-progress-icon",
          }}
        />
        Add new task
      </button>
    </section>
  );
}
