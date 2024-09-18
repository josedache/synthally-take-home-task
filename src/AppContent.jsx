import Button from "common/Button";
import TaskList from "common/TaskList";
import { faker } from "@faker-js/faker";

function AppContent() {
  return (
    <>
      <div className="flex items-center gap-6 py-12">
        <h3 className="text-5xl font-semibold">Mobile App</h3>
        <div className="flex items-center gap-2">
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
              fill="#5030E5"
              fillOpacity="0.2"
            />
            <path
              d="M16.1375 9.80001L9.64998 16.2875C9.39998 16.5375 9.16249 17.025 9.11249 17.375L8.76249 19.85C8.63749 20.75 9.26249 21.375 10.1625 21.25L12.6375 20.9C12.9875 20.85 13.475 20.6125 13.725 20.3625L20.2125 13.875C21.325 12.7625 21.8625 11.4625 20.2125 9.81251C18.5625 8.15001 17.2625 8.67501 16.1375 9.80001Z"
              stroke="#5030E5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M15.2125 10.725C15.7625 12.6875 17.3 14.2375 19.275 14.7875"
              stroke="#5030E5"
              strokeWidth="1.5"
              strokeMiterlimit="10"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
          <svg
            width="30"
            height="30"
            viewBox="0 0 30 30"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M11.25 27.5H18.75C25 27.5 27.5 25 27.5 18.75V11.25C27.5 5 25 2.5 18.75 2.5H11.25C5 2.5 2.5 5 2.5 11.25V18.75C2.5 25 5 27.5 11.25 27.5Z"
              fill="#5030E5"
              fillOpacity="0.2"
            />
            <path
              d="M16.9933 19.3167H18C20.3828 19.3167 22.3167 17.3829 22.3167 15C22.3167 12.6172 20.3828 10.6833 18 10.6833H17C16.6359 10.6833 16.35 10.9785 16.35 11.3333C16.35 11.6895 16.6438 11.9833 17 11.9833H18C19.6638 11.9833 21.0167 13.3362 21.0167 15C21.0167 16.6638 19.6638 18.0167 18 18.0167H16.9933C16.6372 18.0167 16.3433 18.3105 16.3433 18.6667C16.3433 19.0229 16.6372 19.3167 16.9933 19.3167Z"
              fill="#5030E5"
              stroke="#5030E5"
              strokeWidth="0.3"
            />
            <path
              d="M12 19.3167H13C13.3562 19.3167 13.65 19.0229 13.65 18.6667C13.65 18.3105 13.3562 18.0167 13 18.0167H12C10.3362 18.0167 8.98334 16.6638 8.98334 15C8.98334 13.3362 10.3362 11.9833 12 11.9833H13C13.3562 11.9833 13.65 11.6895 13.65 11.3333C13.65 10.9772 13.3562 10.6833 13 10.6833H12C9.61716 10.6833 7.68334 12.6172 7.68334 15C7.68334 17.3829 9.61716 19.3167 12 19.3167Z"
              fill="#5030E5"
              stroke="#5030E5"
              strokeWidth="0.3"
            />
            <path
              d="M12.3333 15.65H17.6667C18.0228 15.65 18.3167 15.3562 18.3167 15C18.3167 14.6438 18.0228 14.35 17.6667 14.35H12.3333C11.9772 14.35 11.6833 14.6438 11.6833 15C11.6833 15.3562 11.9772 15.65 12.3333 15.65Z"
              fill="#5030E5"
              stroke="#5030E5"
              strokeWidth="0.3"
            />
          </svg>
        </div>
        <div className="flex-1" />
        <div className="text-[#5030E5] font-medium flex items-center gap-2">
          <svg
            width="18"
            height="18"
            viewBox="0 0 18 18"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M6 9H12"
              stroke="#5030E5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M9 12V6"
              stroke="#5030E5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M6.75 16.5H11.25C15 16.5 16.5 15 16.5 11.25V6.75C16.5 3 15 1.5 11.25 1.5H6.75C3 1.5 1.5 3 1.5 6.75V11.25C1.5 15 3 16.5 6.75 16.5Z"
              fill="#5030E5"
              fillOpacity="0.2"
            />
          </svg>
          <span>Invite</span>
        </div>
        <div className="flex -space-x-1 overflow-hidden">
          {collaborators.map((collaborator) => (
            <img
              key={collaborator.id}
              alt={collaborator.id}
              src={collaborator.profilePic}
              className="inline-block h-10 w-10 rounded-full ring-1 ring-white"
            />
          ))}

          <div className="inline-flex items-center justify-center h-10 w-10 rounded-full ring-1 ring-white bg-[#F4D7DA] text-[#D25B68] font-medium">
            +2
          </div>
        </div>
      </div>

      <div className="flex items-center gap-4 mb-12">
        <Button
          startIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M3.6 1H12.4C13.1333 1 13.7333 1.6 13.7333 2.33333V3.8C13.7333 4.33333 13.4 5 13.0667 5.33333L10.2 7.86667C9.8 8.2 9.53333 8.86667 9.53333 9.4V12.2667C9.53333 12.6667 9.26666 13.2 8.93333 13.4L8 14C7.13333 14.5333 5.93333 13.9333 5.93333 12.8667V9.33333C5.93333 8.86667 5.66666 8.26667 5.4 7.93333L2.86666 5.26667C2.53333 4.93333 2.26666 4.33333 2.26666 3.93333V2.4C2.26666 1.6 2.86666 1 3.6 1Z"
                stroke="#787486"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          }
          endIcon={
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00001 6.2C5.53335 6.2 5.06668 6.02 4.71335 5.66667L0.36668 1.32C0.173346 1.12667 0.173346 0.806671 0.36668 0.613338C0.560013 0.420005 0.880013 0.420005 1.07335 0.613338L5.42001 4.96C5.74001 5.28 6.26001 5.28 6.58001 4.96L10.9267 0.613338C11.12 0.420005 11.44 0.420005 11.6333 0.613338C11.8267 0.806671 11.8267 1.12667 11.6333 1.32L7.28668 5.66667C6.93335 6.02 6.46668 6.2 6.00001 6.2Z"
                fill="#787486"
              />
            </svg>
          }
        >
          Filter
        </Button>
        <Button
          startIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.33334 1.33333V3.33333"
                stroke="#787486"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 1.33333V3.33333"
                stroke="#787486"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M10.6667 2.33333C12.8867 2.45333 14 3.29999 14 6.43333V10.5533C14 13.3 13.3333 14.6733 10 14.6733H6C2.66667 14.6733 2 13.3 2 10.5533V6.43333C2 3.29999 3.11333 2.45999 5.33333 2.33333H10.6667Z"
                stroke="#787486"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M13.8333 11.7333H2.16666"
                stroke="#787486"
                strokeWidth="1.3"
                strokeMiterlimit="10"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
              <path
                d="M8.00001 5.5C7.18001 5.5 6.48668 5.94667 6.48668 6.81333C6.48668 7.22667 6.68001 7.54 6.97334 7.74C6.56668 7.98 6.33334 8.36667 6.33334 8.82C6.33334 9.64667 6.96668 10.16 8.00001 10.16C9.02668 10.16 9.66668 9.64667 9.66668 8.82C9.66668 8.36667 9.43334 7.97333 9.02001 7.74C9.32001 7.53333 9.50668 7.22667 9.50668 6.81333C9.50668 5.94667 8.82001 5.5 8.00001 5.5ZM8.00001 7.39333C7.65334 7.39333 7.40001 7.18667 7.40001 6.86C7.40001 6.52667 7.65334 6.33333 8.00001 6.33333C8.34668 6.33333 8.60001 6.52667 8.60001 6.86C8.60001 7.18667 8.34668 7.39333 8.00001 7.39333ZM8.00001 9.33333C7.56001 9.33333 7.24001 9.11333 7.24001 8.71333C7.24001 8.31333 7.56001 8.1 8.00001 8.1C8.44001 8.1 8.76001 8.32 8.76001 8.71333C8.76001 9.11333 8.44001 9.33333 8.00001 9.33333Z"
                fill="#787486"
              />
            </svg>
          }
          endIcon={
            <svg
              width="12"
              height="7"
              viewBox="0 0 12 7"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.00001 6.2C5.53335 6.2 5.06668 6.02 4.71335 5.66667L0.36668 1.32C0.173346 1.12667 0.173346 0.806671 0.36668 0.613338C0.560013 0.420005 0.880013 0.420005 1.07335 0.613338L5.42001 4.96C5.74001 5.28 6.26001 5.28 6.58001 4.96L10.9267 0.613338C11.12 0.420005 11.44 0.420005 11.6333 0.613338C11.8267 0.806671 11.8267 1.12667 11.6333 1.32L7.28668 5.66667C6.93335 6.02 6.46668 6.2 6.00001 6.2Z"
                fill="#787486"
              />
            </svg>
          }
        >
          Today
        </Button>

        <div className="flex-1" />

        <Button
          startIcon={
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.1064 7.74666C6.0864 7.74666 6.07307 7.74666 6.05307 7.74666C6.01973 7.73999 5.97307 7.73999 5.93307 7.74666C3.99973 7.68666 2.53973 6.16666 2.53973 4.29333C2.53973 2.38666 4.09307 0.833328 5.99973 0.833328C7.9064 0.833328 9.45973 2.38666 9.45973 4.29333C9.45307 6.16666 7.9864 7.68666 6.1264 7.74666C6.11973 7.74666 6.11307 7.74666 6.1064 7.74666ZM5.99973 1.83333C4.6464 1.83333 3.53973 2.93999 3.53973 4.29333C3.53973 5.62666 4.57973 6.69999 5.9064 6.74666C5.9464 6.73999 6.03307 6.73999 6.11973 6.74666C7.4264 6.68666 8.45307 5.61333 8.45973 4.29333C8.45973 2.93999 7.35307 1.83333 5.99973 1.83333Z"
                fill="#787486"
              />
              <path
                d="M11.0264 7.83334C11.0064 7.83334 10.9864 7.83334 10.9664 7.82667C10.6931 7.85334 10.4131 7.66001 10.3864 7.38667C10.3597 7.11334 10.5264 6.86667 10.7997 6.83334C10.8797 6.82667 10.9664 6.82667 11.0397 6.82667C12.0131 6.77334 12.7731 5.97334 12.7731 4.99334C12.7731 3.98001 11.9531 3.16 10.9397 3.16C10.6664 3.16667 10.4397 2.94001 10.4397 2.66667C10.4397 2.39334 10.6664 2.16667 10.9397 2.16667C12.4997 2.16667 13.7731 3.44001 13.7731 5.00001C13.7731 6.53334 12.5731 7.77334 11.0464 7.83334C11.0397 7.83334 11.0331 7.83334 11.0264 7.83334Z"
                fill="#787486"
              />
              <path
                d="M6.11307 15.0333C4.80641 15.0333 3.49307 14.7 2.49974 14.0333C1.57307 13.42 1.06641 12.58 1.06641 11.6667C1.06641 10.7533 1.57307 9.90667 2.49974 9.28667C4.49974 7.96001 7.73974 7.96001 9.72641 9.28667C10.6464 9.90001 11.1597 10.74 11.1597 11.6533C11.1597 12.5667 10.6531 13.4133 9.72641 14.0333C8.72641 14.7 7.41974 15.0333 6.11307 15.0333ZM3.05307 10.1267C2.41307 10.5533 2.06641 11.1 2.06641 11.6733C2.06641 12.24 2.41974 12.7867 3.05307 13.2067C4.71307 14.32 7.51307 14.32 9.17307 13.2067C9.81307 12.78 10.1597 12.2333 10.1597 11.66C10.1597 11.0933 9.80641 10.5467 9.17307 10.1267C7.51307 9.02 4.71307 9.02 3.05307 10.1267Z"
                fill="#787486"
              />
              <path
                d="M12.2264 13.8333C11.9931 13.8333 11.7864 13.6733 11.7397 13.4333C11.6864 13.16 11.8597 12.9 12.1264 12.84C12.5464 12.7533 12.9331 12.5867 13.2331 12.3533C13.6131 12.0667 13.8197 11.7067 13.8197 11.3267C13.8197 10.9467 13.6131 10.5867 13.2397 10.3067C12.9464 10.08 12.5797 9.92 12.1464 9.82C11.8797 9.76 11.7064 9.49333 11.7664 9.22C11.8264 8.95333 12.0931 8.78 12.3664 8.84C12.9397 8.96666 13.4397 9.19333 13.8464 9.50666C14.4664 9.97333 14.8197 10.6333 14.8197 11.3267C14.8197 12.02 14.4597 12.68 13.8397 13.1533C13.4264 13.4733 12.9064 13.7067 12.3331 13.82C12.2931 13.8333 12.2597 13.8333 12.2264 13.8333Z"
                fill="#787486"
              />
            </svg>
          }
        >
          Share
        </Button>
        <div className="border-l border-[#787486] h-8" />
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="40" height="40" rx="6" fill="#5030E5" />
          <path
            d="M25.925 21.125L14.075 21.125C12.95 21.125 12.5 21.6 12.5 22.8L12.5 25.825C12.5 27.025 12.95 27.5 14.075 27.5L25.925 27.5C27.05 27.5 27.5 27.025 27.5 25.825L27.5 22.8C27.5 21.6 27.05 21.125 25.925 21.125Z"
            fill="white"
          />
          <path
            d="M25.925 12.5L14.075 12.5C12.95 12.5 12.5 12.975 12.5 14.175L12.5 17.2C12.5 18.3917 12.95 18.875 14.075 18.875L25.925 18.875C27.05 18.875 27.5 18.4 27.5 17.2L27.5 14.175C27.5 12.975 27.05 12.5 25.925 12.5Z"
            fill="white"
          />
        </svg>

        <svg
          width="21"
          height="21"
          viewBox="0 0 21 21"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M15.1949 7.99994C16.5756 7.99994 17.6949 6.88065 17.6949 5.49994C17.6949 4.11923 16.5756 2.99994 15.1949 2.99994C13.8142 2.99994 12.6949 4.11923 12.6949 5.49994C12.6949 6.88065 13.8142 7.99994 15.1949 7.99994Z"
            stroke="#787486"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.50001 7.99994C6.88072 7.99994 8 6.88065 8 5.49994C8 4.11923 6.88072 2.99994 5.50001 2.99994C4.11929 2.99994 3 4.11923 3 5.49994C3 6.88065 4.11929 7.99994 5.50001 7.99994Z"
            stroke="#787486"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M15.1949 17.9999C16.5756 17.9999 17.6949 16.8807 17.6949 15.4999C17.6949 14.1192 16.5756 12.9999 15.1949 12.9999C13.8142 12.9999 12.6949 14.1192 12.6949 15.4999C12.6949 16.8807 13.8142 17.9999 15.1949 17.9999Z"
            stroke="#787486"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M5.50001 17.9999C6.88072 17.9999 8 16.8807 8 15.4999C8 14.1192 6.88072 12.9999 5.50001 12.9999C4.11929 12.9999 3 14.1192 3 15.4999C3 16.8807 4.11929 17.9999 5.50001 17.9999Z"
            stroke="#787486"
            strokeWidth="1.5"
            strokeMiterlimit="10"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>

      <div className="overflow-x-auto py-1">
        <div className="flex gap-6">
          {taskLists.map((taskList) => (
            <TaskList key={taskList.id} taskList={taskList} />
          ))}
        </div>
      </div>
    </>
  );
}

export default AppContent;

const collaborators = faker.helpers.multiple(
  () => ({
    id: faker.database.mongodbObjectId(),
    // profilePic: faker.image.urlPicsumPhotos(),
    profilePic: faker.helpers.arrayElement([
      "https://images.unsplash.com/photo-1491528323818-fdd1faba62cc?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2.25&w=256&h=256&q=80",
      "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80",
    ]),
  }),
  { count: 5 }
);

function generateTasks() {
  return {
    id: faker.database.mongodbObjectId(),
    priority: faker.helpers.arrayElement(["Low", "Completed"]),
    title: faker.word.words({ count: { min: 1, max: 3 } }),
    description: faker.lorem.lines({ min: 1, max: 3 }),
    collaborators: faker.helpers.arrayElements(collaborators, {
      min: 1,
      max: 6,
    }),
    commentCount: faker.number.int({ min: 0, max: 1000 }),
    fileCount: faker.number.int({ min: 0, max: 1000 }),
  };
}

const taskLists = [
  {
    id: faker.database.mongodbObjectId(),
    title: "To Do",
    mainColor: "#5030E5",
    tasks: faker.helpers.multiple(() => generateTasks(), {
      count: { min: 0, max: 20 },
    }),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "On Progress",
    mainColor: "#FFA500",
    tasks: faker.helpers.multiple(() => generateTasks(), {
      count: { min: 0, max: 20 },
    }),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Done",
    mainColor: "#8BC48A",
    tasks: faker.helpers.multiple(() => generateTasks(), {
      count: { min: 0, max: 20 },
    }),
  },
  {
    id: faker.database.mongodbObjectId(),
    title: "Bug Fixes",
    mainColor: "#DBDBDB",
    tasks: faker.helpers.multiple(() => generateTasks(), {
      count: { min: 0, max: 20 },
    }),
  },
];
