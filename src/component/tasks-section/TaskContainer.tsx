// type
import type { task } from "../../data-type";

// component
import ProgressIcon from "../shared/ProgressIcon";
import { useAddEditingTask } from "../../context/AddEditingTaskProvider";

export default function TaskContainer({ task }: { task: task }) {
  const { description, icon, status, id, title } = task;

  const { addEditingTask, handelAddEditingTask } = useAddEditingTask();

  const progressIcon =
    status === "completed"
      ? {
          path: "/Done_round_duotone.svg",
          alt: "Done round",
          style: "bg-task-completed-icon",
        }
      : status === "in-progress"
        ? {
            path: "/Time_atack_duotone.svg",
            alt: "Time atack duotone",
            style: "bg-task-in-progress-icon",
          }
        : {
            path: "/close_ring_duotone.svg",
            alt: "close ring duotone",
            style: "bg-task-wont-do-icon",
          };

  const bg =
    status === ""
      ? "bg-task-todo-bg"
      : status === "completed"
        ? "bg-task-completed-bg"
        : status === "in-progress"
          ? "bg-task-in-progress-bg"
          : "bg-task-wont-do-bg";

  return (
    <button
      type="button"
      aria-label="click to edit task"
      className={`${addEditingTask.id === id && "outline-btn-save outline-2"} border-main-bg border-2 text-left ${bg} gap-no p-no flex items-start rounded-xl`}
      onClick={() => handelAddEditingTask("editing", id)}
    >
      <span className="bg-main-bg rounded-lg p-2">{icon}</span>

      <article className="flex-1">
        <h3 className="text-xl font-semibold capitalize">{title}</h3>
        <p className="max-w-[35ch] font-light text-pretty">{description}</p>
      </article>

      {status !== "" && <ProgressIcon icon={progressIcon} />}
    </button>
  );
}

//
