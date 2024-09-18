import Task from "./Task";

function TaskList({ taskList, onAddClick }) {
  const { title, tasks = [], mainColor = "#5030E5" } = taskList;

  return (
    <div className="bg-[#F5F5F5] p-6 rounded-2xl min-w-[354px] max-w-[354px]">
      <div
        className="pb-4 border-b-4 flex items-center gap-2 mb-6"
        style={{ borderColor: mainColor }}
      >
        <div
          className="w-2 h-2 rounded-full"
          style={{ backgroundColor: mainColor }}
        />
        <p>{title}</p>
        <div className="w-6 h-6 rounded-full flex items-center justify-center bg-[#E0E0E0] text-xs text-[#625F6D]">
          <span>{tasks?.length}</span>
        </div>

        <div className="flex-1" />

        {onAddClick ? (
          <button onClick={onAddClick}>
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                opacity="0.2"
                d="M16.19 2H7.81C4.17 2 2 4.17 2 7.81V16.18C2 19.83 4.17 22 7.81 22H16.18C19.82 22 21.99 19.83 21.99 16.19V7.81C22 4.17 19.83 2 16.19 2Z"
                fill="#5030E5"
              />
              <path
                d="M16 11.25H12.75V8C12.75 7.59 12.41 7.25 12 7.25C11.59 7.25 11.25 7.59 11.25 8V11.25H8C7.59 11.25 7.25 11.59 7.25 12C7.25 12.41 7.59 12.75 8 12.75H11.25V16C11.25 16.41 11.59 16.75 12 16.75C12.41 16.75 12.75 16.41 12.75 16V12.75H16C16.41 12.75 16.75 12.41 16.75 12C16.75 11.59 16.41 11.25 16 11.25Z"
                fill="#5030E5"
              />
            </svg>
          </button>
        ) : null}
      </div>
      <div className="space-y-4">
        {tasks?.map((task) => (
          <Task key={task.id} task={task} />
        ))}
      </div>
    </div>
  );
}

export default TaskList;
