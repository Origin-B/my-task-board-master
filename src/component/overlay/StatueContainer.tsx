// hooks
import { useMemo } from "react";

// component
import ProgressIcon from "../shared/ProgressIcon";

// type
import type { statusType } from "../../data-type";

export default function StatueContainer({
  status,
  updateAddEditingTask,
  taskStatus,
}: {
  status: statusType;
  updateAddEditingTask: (name: string, value: string) => void;
  taskStatus: string;
}) {
  const { path, id, title } = status;

  const style = useMemo(() => {
    return id === "completed"
      ? "bg-task-completed-icon"
      : id === "in-progress"
        ? "bg-task-in-progress-icon"
        : "bg-task-wont-do-icon";
  }, [id]);

  return (
    <button
      className={`${id === taskStatus ? "border-btn-save" : "border-btn-delete"} text-main-text gap-xs flex w-[calc(50%-4px)] items-center rounded-xl border p-1 transition-colors`}
      id={id}
      type="button"
      aria-label={`click to chose ${id} statue`}
      onClick={() => updateAddEditingTask("status", id)}
    >
      <ProgressIcon icon={{ path, alt: id, style }} />
      <p className="flex-1 text-sm">{title}</p>
      <div
        className={`${id === taskStatus ? "opacity-100" : "opacity-0"} bg-btn-save mr-1 rounded-full p-1 transition-opacity`}
      >
        <img src="/Done_round.svg" alt="Done icon" className="size-3" />
      </div>
    </button>
  );
}
