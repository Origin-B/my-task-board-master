// data
import { icons, statusArr } from "../../data-type";

// component
import StatueContainer from "../overlay/StatueContainer";

// hooks
import { useState, useEffect } from "react";
import { useAddEditingTask } from "../../context/AddEditingTaskProvider";

export default function AddEditingTaskOverlay() {
  const { alarm, addEditingTask, handelSaveDeleteTask, overlayActive } =
    useAddEditingTask();

  const [addEditingT, setAddEditingT] = useState(addEditingTask);

  useEffect(() => setAddEditingT(addEditingTask), [addEditingTask]);

  function updateAddEditingTask(name: string, value: string) {
    setAddEditingT({ ...addEditingT, [name]: value });
  }

  return (
    <>
      <div
        className={`${overlayActive ? "block" : "hidden"} bg-overlay-bg fixed inset-0`}
        onClick={() => handelSaveDeleteTask("close", "")}
      />

      <section
        className={`${overlayActive ? "translate-x-0" : "translate-x-full"} p-xs fixed top-0 right-0 h-screen w-full max-w-200 transition-transform duration-500 md:w-1/2`}
        task-editing-active={`${overlayActive}`}
      >
        <div className="bg-main-bg flex-col-style gap-no p-no h-full rounded-lg">
          <div className="flex items-center justify-between">
            <h2 className="text-[1.25rem] font-semibold">Task details</h2>

            <button
              className="border-task-todo-bg hover:border-main-text rounded-md border p-1"
              aria-label="click to close the task editing overlay"
              onClick={() => handelSaveDeleteTask("close", "")}
            >
              <img src="/close_ring_duotone-1.svg" alt="close icon" />
            </button>
          </div>

          <form className="text-btn-delete flex-col-style gap-sm *:not-last:flex-col-style *:gap-xs flex-1">
            <div>
              <label htmlFor="task-title" className="label-style">
                Task name
              </label>

              <input
                type="text"
                name="title"
                id="task-title"
                placeholder="write task title"
                className="input-style placeholder:text-btn-delete"
                value={addEditingT.title}
                onChange={(e) =>
                  updateAddEditingTask(e.target.name, e.target.value)
                }
              />
              <p
                className={`${alarm.taskHeadingAlarm ? "block" : "hidden"} text-task-wont-do-icon label-style capitalize`}
              >
                This field is required
              </p>
            </div>

            <div>
              <label htmlFor="task-desc" className="label-style">
                Description
              </label>

              <textarea
                name="description"
                id="task-desc"
                rows={5}
                placeholder="Enter a short description"
                className="input-style placeholder:text-btn-delete resize-none font-medium"
                value={addEditingT.description}
                onChange={(e) =>
                  updateAddEditingTask(e.target.name, e.target.value)
                }
              />
            </div>

            <div>
              <span className="label-style">Icon</span>

              <div
                className="gap-xs flex text-lg"
                active-icon={addEditingT.icon}
              >
                {icons.map((icon) => (
                  <button
                    type="button"
                    aria-label={`click to choose ${icon.ariaLabel}`}
                    key={icon.id}
                    className={`${icon.title === addEditingT.icon ? "bg-task-in-progress-bg" : "bg-task-todo-bg"} hover:outline-btn-save rounded-lg p-2 transition-colors hover:outline`}
                    onClick={() => updateAddEditingTask("icon", icon.title)}
                  >
                    {icon.title}
                  </button>
                ))}
              </div>
              <p
                className={`${alarm.iconAlarm ? "block" : "hidden"} text-task-wont-do-icon label-style capitalize`}
              >
                you must choose an icon
              </p>
            </div>

            <div className="flex-1">
              <span className="label-style">Status</span>

              <div className="gap-xs flex flex-wrap">
                {statusArr.map((status) => (
                  <StatueContainer
                    key={status.id}
                    status={status}
                    updateAddEditingTask={updateAddEditingTask}
                    taskStatus={addEditingT.status}
                  />
                ))}
              </div>
            </div>

            <div className="gap-xs text-main-bg flex items-center justify-end text-sm *:flex *:w-1/4 *:min-w-30 *:items-center *:justify-center *:gap-1 *:rounded-full *:p-2 *:transition-colors">
              <button
                type="button"
                disabled={addEditingT.id === ""}
                className="bg-btn-delete hover:bg-btn-delete/50 disabled:bg-btn-delete/50"
                aria-label="click to delete the task"
                onClick={() => handelSaveDeleteTask("delete", addEditingT.id)}
              >
                Delete
                <img src="/Trash.svg" alt="trash icon" />
              </button>

              <button
                type="button"

                className="bg-btn-save hover:bg-btn-save/50 disabled:bg-btn-save/50"
                aria-label="click to save the task"
                onClick={() =>
                  handelSaveDeleteTask("save", addEditingT.id, addEditingT)
                }
              >
                Save
                <img src="/Done_round.svg" alt="Done icon" />
              </button>
            </div>
          </form>
        </div>
      </section>
    </>
  );
}
