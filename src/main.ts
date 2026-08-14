import "./style.css";
type TaskStatus = "todo" | "doing" | "done";
interface Subtask {
  id: number;
  title: string;
  completed: boolean;
}
interface Task {
  id: number;
  title: string;
  description: string;
  status: TaskStatus;
  subtasks: Subtask[];
}
interface Board {
  id: number;
  name: string;
  tasks: Task[];
}
const boards: Board[] = [
  {
    id: 1,
    name: "Platform Launch",
    tasks: [
      {
        id: 1,
        title: "Build UI",
        description: "Create the main user interface.",
        status: "todo",
        subtasks: [
          { id: 1, title: "Create HTML", completed: true },
          { id: 2, title: "Add Tailwind", completed: false },
          { id: 3, title: "Make responsive", completed: false },
        ],
      },
      {
        id: 2,
        title: "Create Login Page",
        description: "Build the login page.",
        status: "todo",
        subtasks: [
          { id: 4, title: "Create form", completed: true },
          { id: 5, title: "Add validation", completed: false },
        ],
      },
      {
        id: 3,
        title: "Design Dashboard",
        description: "Design the dashboard.",
        status: "todo",
        subtasks: [
          { id: 6, title: "Wireframe", completed: false },
          { id: 7, title: "Design cards", completed: false },
        ],
      },
      {
        id: 4,
        title: "Create Header",
        description: "Create the header.",
        status: "todo",
        subtasks: [
          { id: 8, title: "Header HTML", completed: true },
          { id: 9, title: "Navigation", completed: false },
        ],
      },
      {
        id: 5,
        title: "Create Footer",
        description: "Create the footer.",
        status: "todo",
        subtasks: [
          { id: 10, title: "Create footer", completed: false },
          { id: 11, title: "Add links", completed: false },
        ],
      },
      {
        id: 6,
        title: "Add Navigation",
        description: "Create navigation system.",
        status: "todo",
        subtasks: [
          { id: 12, title: "Create navigation", completed: true },
          { id: 13, title: "Add links", completed: false },
        ],
      },
      {
        id: 7,
        title: "Settings Page",
        description: "Create settings page.",
        status: "todo",
        subtasks: [
          { id: 14, title: "Settings layout", completed: false },
          { id: 15, title: "Settings options", completed: false },
        ],
      },
      {
        id: 8,
        title: "Create Profile Page",
        description: "Create the user profile page.",
        status: "doing",
        subtasks: [
          { id: 16, title: "Profile layout", completed: true },
          { id: 17, title: "Profile information", completed: false },
        ],
      },
      {
        id: 9,
        title: "Add Authentication",
        description: "Add authentication functionality.",
        status: "doing",
        subtasks: [
          { id: 18, title: "Authentication logic", completed: true },
          { id: 19, title: "Connect login", completed: true },
          { id: 20, title: "Test authentication", completed: false },
        ],
      },
      {
        id: 10,
        title: "Add JavaScript",
        description: "Add JavaScript functionality.",
        status: "doing",
        subtasks: [
          { id: 21, title: "Create events", completed: true },
          { id: 22, title: "Connect buttons", completed: false },
        ],
      },
      {
        id: 11,
        title: "HTML Structure",
        description: "Create the complete HTML structure.",
        status: "done",
        subtasks: [
          { id: 23, title: "Main structure", completed: true },
          { id: 24, title: "Sidebar", completed: true },
          { id: 25, title: "Header", completed: true },
        ],
      },
      {
        id: 12,
        title: "Tailwind Setup",
        description: "Configure Tailwind CSS.",
        status: "done",
        subtasks: [
          { id: 26, title: "Install Tailwind", completed: true },
          { id: 27, title: "Configure Tailwind", completed: true },
        ],
      },
      {
        id: 13,
        title: "Create Sidebar",
        description: "Create sidebar and board navigation.",
        status: "done",
        subtasks: [
          { id: 28, title: "Create sidebar", completed: true },
          { id: 29, title: "Add boards", completed: true },
          { id: 30, title: "Theme switch", completed: true },
        ],
      },
      {
        id: 14,
        title: "Responsive Design",
        description: "Make the application responsive.",
        status: "done",
        subtasks: [
          { id: 31, title: "Mobile layout", completed: true },
          { id: 32, title: "Tablet layout", completed: true },
        ],
      },
      {
        id: 15,
        title: "Testing",
        description: "Test the application.",
        status: "done",
        subtasks: [
          { id: 33, title: "Test buttons", completed: true },
          { id: 34, title: "Test forms", completed: true },
        ],
      },
      {
        id: 16,
        title: "Fix Bugs",
        description: "Fix remaining bugs.",
        status: "done",
        subtasks: [
          { id: 35, title: "Find bugs", completed: true },
          { id: 36, title: "Fix bugs", completed: true },
        ],
      },
      {
        id: 17,
        title: "Final Review",
        description: "Review the project.",
        status: "done",
        subtasks: [
          { id: 37, title: "Review UI", completed: true },
          { id: 38, title: "Review functionality", completed: true },
        ],
      },
    ],
  },
  {
    id: 2,
    name: "Marketing Plan",
    tasks: [
      {
        id: 18,
        title: "Market Research",
        description: "Research the target market and competitors.",
        status: "todo",
        subtasks: [
          { id: 39, title: "Research competitors", completed: false },
          { id: 40, title: "Define target audience", completed: false },
        ],
      },
      {
        id: 19,
        title: "Marketing Strategy",
        description: "Create the main marketing strategy.",
        status: "todo",
        subtasks: [
          { id: 41, title: "Create strategy", completed: false },
          { id: 42, title: "Set goals", completed: false },
        ],
      },
      {
        id: 20,
        title: "Social Media Campaign",
        description: "Plan the social media campaign.",
        status: "doing",
        subtasks: [
          { id: 43, title: "Choose platforms", completed: true },
          { id: 44, title: "Create content plan", completed: false },
        ],
      },
      {
        id: 21,
        title: "Email Campaign",
        description: "Prepare an email marketing campaign.",
        status: "doing",
        subtasks: [
          { id: 45, title: "Create email design", completed: true },
          { id: 46, title: "Write email content", completed: false },
        ],
      },
      {
        id: 22,
        title: "Marketing Report",
        description: "Prepare the monthly marketing report.",
        status: "done",
        subtasks: [
          { id: 47, title: "Collect data", completed: true },
          { id: 48, title: "Create report", completed: true },
        ],
      },
      {
        id: 23,
        title: "Campaign Review",
        description: "Review the marketing campaign results.",
        status: "done",
        subtasks: [
          { id: 49, title: "Review results", completed: true },
          { id: 50, title: "Prepare summary", completed: true },
        ],
      },
    ],
  },
  {
    id: 3,
    name: "Roadmap",
    tasks: [
      {
        id: 24,
        title: "Product Roadmap",
        description: "Create the roadmap for upcoming product features.",
        status: "todo",
        subtasks: [
          { id: 51, title: "List features", completed: false },
          { id: 52, title: "Set priorities", completed: false },
        ],
      },
      {
        id: 25,
        title: "Development Plan",
        description: "Create the development timeline.",
        status: "todo",
        subtasks: [
          { id: 53, title: "Set milestones", completed: false },
          { id: 54, title: "Create timeline", completed: false },
        ],
      },
      {
        id: 26,
        title: "Feature Development",
        description: "Develop the main product features.",
        status: "doing",
        subtasks: [
          { id: 55, title: "Build features", completed: true },
          { id: 56, title: "Test features", completed: false },
        ],
      },
      {
        id: 27,
        title: "Beta Release",
        description: "Prepare the beta version of the product.",
        status: "doing",
        subtasks: [
          { id: 57, title: "Prepare beta", completed: true },
          { id: 58, title: "Beta testing", completed: false },
        ],
      },
      {
        id: 28,
        title: "Version 1 Release",
        description: "Prepare the first official version.",
        status: "done",
        subtasks: [
          { id: 59, title: "Final testing", completed: true },
          { id: 60, title: "Prepare release", completed: true },
        ],
      },
      {
        id: 29,
        title: "Future Updates",
        description: "Plan future product updates.",
        status: "done",
        subtasks: [
          { id: 61, title: "Collect feedback", completed: true },
          { id: 62, title: "Plan updates", completed: true },
        ],
      },
    ],
  },
  {
    id: 4,
    name: "Website Design",
    tasks: [
      {
        id: 30,
        title: "Homepage Design",
        description: "Design the main homepage.",
        status: "todo",
        subtasks: [
          { id: 63, title: "Create wireframe", completed: false },
          { id: 64, title: "Choose colors", completed: false },
        ],
      },
      {
        id: 31,
        title: "Navigation Design",
        description: "Design the website navigation.",
        status: "todo",
        subtasks: [
          { id: 65, title: "Design menu", completed: false },
          { id: 66, title: "Design navigation", completed: false },
        ],
      },
      {
        id: 32,
        title: "Mobile Design",
        description: "Create the mobile version.",
        status: "doing",
        subtasks: [
          { id: 67, title: "Mobile layout", completed: true },
          { id: 68, title: "Responsive design", completed: false },
        ],
      },
      {
        id: 33,
        title: "UI Components",
        description: "Design reusable UI components.",
        status: "doing",
        subtasks: [
          { id: 69, title: "Create buttons", completed: true },
          { id: 70, title: "Create cards", completed: false },
        ],
      },
      {
        id: 34,
        title: "Final Website",
        description: "Complete the final website design.",
        status: "done",
        subtasks: [
          { id: 71, title: "Review design", completed: true },
          { id: 72, title: "Approve final version", completed: true },
        ],
      },
    ],
  },
];
let currentBoardId = 1;
const todoList = document.getElementById("todo-list")!;
const doingList = document.getElementById("doing-list")!;
const doneList = document.getElementById("done-list")!;
const todoCount = document.getElementById("todo-count")!;
const doingCount = document.getElementById("doing-count")!;
const doneCount = document.getElementById("done-count")!;
const boardTitle = document.getElementById("board-title")!;
function getCurrentBoard(): Board {
  return boards.find((board) => board.id === currentBoardId)!;
}
function renderTasks(): void {
  const board = getCurrentBoard();
  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";
  board.tasks.forEach((task) => {
    const taskElement = createTaskElement(task);
    if (task.status === "todo") {
      todoList.appendChild(taskElement);
    }
    if (task.status === "doing") {
      doingList.appendChild(taskElement);
    }
    if (task.status === "done") {
      doneList.appendChild(taskElement);
    }
  });
  todoCount.textContent = `(${board.tasks.filter((task) => task.status === "todo").length})`;
  doingCount.textContent = `(${board.tasks.filter((task) => task.status === "doing").length})`;
  doneCount.textContent = `(${board.tasks.filter((task) => task.status === "done").length})`;
  boardTitle.textContent = board.name;
}
function createTaskElement(task: Task): HTMLDivElement {
  const card = document.createElement("div");
  card.className =
    "cursor-pointer rounded-lg bg-white p-5 shadow-sm hover:shadow-md dark:bg-[#2b2c37]";
  const completed = task.subtasks.filter((subtask) => subtask.completed).length;
  card.innerHTML = `
    <h3 class="mb-2 font-bold text-[#2b2c37] dark:text-white">
      ${task.title}
    </h3>
    <p class="text-xs font-bold text-[#828fa3]">
      ${completed} of ${task.subtasks.length} subtasks
    </p>
  `;
  card.addEventListener("click", () => {
    openTaskDetails(task.id);
  });
  return card;
}
renderTasks();
const taskDetails = document.getElementById("task-details")!;
const detailsTitle = document.getElementById("details-title")!;
const detailsDescription = document.getElementById("details-description")!;
const detailsStatus = document.getElementById(
  "details-status",
) as HTMLSelectElement;

const detailsSubtasks = document.getElementById("details-subtasks")!;

const closeDetails = document.getElementById("close-details")!;

let selectedTaskId: number | null = null;
function openTaskDetails(taskId: number): void {
  const board = getCurrentBoard();

  const task = board.tasks.find((item) => item.id === taskId);

  if (!task) return;

  selectedTaskId = task.id;

  detailsTitle.textContent = task.title;
  detailsDescription.textContent = task.description;
  detailsStatus.value = task.status;

  renderSubtasks(task);

  taskDetails.classList.remove("hidden");
  taskDetails.classList.add("flex");
}
function renderSubtasks(task: Task): void {
  detailsSubtasks.innerHTML = "";

  task.subtasks.forEach((subtask) => {
    const item = document.createElement("label");

    item.className =
      "flex items-center gap-3 rounded-md bg-[#f4f7fd] p-3 dark:bg-[#20212c]";

    item.innerHTML = `
      <input
        type="checkbox"
        class="h-4 w-4 accent-[#635fc7]"
        ${subtask.completed ? "checked" : ""}
      />

      <span class="text-sm ${
        subtask.completed
          ? "text-[#828fa3] line-through"
          : "text-[#2b2c37] dark:text-white"
      }">
        ${subtask.title}
      </span>
    `;

    const checkbox = item.querySelector("input") as HTMLInputElement;

    checkbox.addEventListener("change", () => {
      subtask.completed = checkbox.checked;

      renderSubtasks(task);
      renderTasks();
    });

    detailsSubtasks.appendChild(item);
  });
}
closeDetails.addEventListener("click", () => {
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");

  selectedTaskId = null;
});
detailsStatus.addEventListener("change", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === selectedTaskId);
  if (!task) return;
  task.status = detailsStatus.value as TaskStatus;
  renderTasks();
});
taskDetails.addEventListener("click", (event) => {
  if (event.target === taskDetails) {
    taskDetails.classList.add("hidden");
    taskDetails.classList.remove("flex");

    selectedTaskId = null;
  }
});
const taskModal = document.getElementById("task-modal")!;
const addTaskButton = document.getElementById("add-task")!;
const closeModal = document.getElementById("close-modal")!;
const taskForm = document.getElementById("task-form") as HTMLFormElement;
const taskTitleInput = document.getElementById(
  "task-title",
) as HTMLInputElement;
const taskDescriptionInput = document.getElementById(
  "task-description",
) as HTMLTextAreaElement;
const taskStatusInput = document.getElementById(
  "task-status",
) as HTMLSelectElement;
const subtaskContainer = document.getElementById("subtask-container")!;
addTaskButton.addEventListener("click", () => {
  taskModal.classList.remove("hidden");
  taskModal.classList.add("flex");
});
closeModal.addEventListener("click", () => {
  taskModal.classList.add("hidden");
  taskModal.classList.remove("flex");
});
const addSubtaskButton = document.getElementById("add-subtask")!;
addSubtaskButton.addEventListener("click", () => {
  const wrapper = document.createElement("div");
  wrapper.className = "flex gap-3";
  wrapper.innerHTML = `
    <input
      type="text"
      placeholder="e.g. Make coffee"
      class="subtask-input flex-1 rounded-md border border-[#e4ebfa] bg-white p-3 text-sm outline-none focus:border-[#635fc7] dark:border-[#3e3f4e] dark:bg-[#20212c] dark:text-white"
    />
    <button
      type="button"
      class="remove-subtask px-2 text-xl font-bold text-[#828fa3] hover:text-[#ea5555]"
    >
      ×
    </button>
  `;
  subtaskContainer.appendChild(wrapper);
});
subtaskContainer.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("remove-subtask")) {
    target.parentElement?.remove();
  }
});
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const board = getCurrentBoard();
  const inputs = document.querySelectorAll<HTMLInputElement>(".subtask-input");
  const subtasks: Subtask[] = [];
  inputs.forEach((input, index) => {
    const title = input.value.trim();

    if (title) {
      subtasks.push({
        id: Date.now() + index,
        title,
        completed: false,
      });
    }
  });
  const newTask: Task = {
    id: Date.now(),
    title: taskTitleInput.value.trim(),
    description: taskDescriptionInput.value.trim(),
    status: taskStatusInput.value as TaskStatus,
    subtasks,
  };
  board.tasks.push(newTask);
  renderTasks();
  taskForm.reset();
  taskModal.classList.add("hidden");
  taskModal.classList.remove("flex");
});
const editTaskButton = document.getElementById("edit-task")!;
const deleteTaskButton = document.getElementById("delete-task")!;
editTaskButton.addEventListener("click", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === selectedTaskId);
  if (!task) return;
  taskModal.classList.remove("hidden");
  taskModal.classList.add("flex");
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskStatusInput.value = task.status;
  subtaskContainer.innerHTML = "";
  task.subtasks.forEach((subtask) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex gap-3";
    wrapper.innerHTML = `
      <input
        type="text"
        value="${subtask.title}"
        class="subtask-input flex-1 rounded-md border border-[#e4ebfa] bg-white p-3 text-sm dark:border-[#3e3f4e] dark:bg-[#20212c] dark:text-white"
      />
      <button
        type="button"
        class="remove-subtask px-2 text-xl font-bold text-[#828fa3]"
      >
        ×
      </button>
    `;
    subtaskContainer.appendChild(wrapper);
  });
});
let editingTaskId: number | null = null;
editTaskButton.addEventListener("click", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === selectedTaskId);
  if (!task) return;
  editingTaskId = task.id;
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskStatusInput.value = task.status;
  subtaskContainer.innerHTML = "";
  task.subtasks.forEach((subtask) => {
    const wrapper = document.createElement("div");
    wrapper.className = "flex gap-3";
    wrapper.innerHTML = `
      <input
        type="text"
        value="${subtask.title}"
        class="subtask-input flex-1 rounded-md border border-[#e4ebfa] bg-white p-3 text-sm outline-none focus:border-[#635fc7] dark:border-[#3e3f4e] dark:bg-[#20212c] dark:text-white"
      />
      <button
        type="button"
        class="remove-subtask px-2 text-xl font-bold text-[#828fa3] hover:text-[#ea5555]"
      >
        ×
      </button>
    `;
    subtaskContainer.appendChild(wrapper);
  });
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
  taskModal.classList.remove("hidden");
  taskModal.classList.add("flex");
});
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const board = getCurrentBoard();
  const inputs = document.querySelectorAll<HTMLInputElement>(".subtask-input");
  const subtasks: Subtask[] = [];
  inputs.forEach((input, index) => {
    const title = input.value.trim();

    if (title) {
      subtasks.push({
        id: Date.now() + index,
        title,
        completed: false,
      });
    }
  });
  if (editingTaskId !== null) {
    const task = board.tasks.find((item) => item.id === editingTaskId);
    if (task) {
      task.title = taskTitleInput.value.trim();
      task.description = taskDescriptionInput.value.trim();
      task.status = taskStatusInput.value as TaskStatus;
      task.subtasks = subtasks;
    }
    editingTaskId = null;
  } else {
    board.tasks.push({
      id: Date.now(),
      title: taskTitleInput.value.trim(),
      description: taskDescriptionInput.value.trim(),
      status: taskStatusInput.value as TaskStatus,
      subtasks,
    });
  }
  renderTasks();
  taskForm.reset();
  taskModal.classList.add("hidden");
  taskModal.classList.remove("flex");
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
});
deleteTaskButton.addEventListener("click", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const index = board.tasks.findIndex((task) => task.id === selectedTaskId);
  if (index === -1) return;
  board.tasks.splice(index, 1);
  selectedTaskId = null;
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
  renderTasks();
});
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const board = getCurrentBoard();
  const inputs = document.querySelectorAll<HTMLInputElement>(".subtask-input");
  const subtasks: Subtask[] = [];
  inputs.forEach((input, index) => {
    const title = input.value.trim();
    if (title) {
      subtasks.push({
        id: Date.now() + index,
        title,
        completed: false,
      });
    }
  });
  if (editingTaskId !== null) {
    const task = board.tasks.find((item) => item.id === editingTaskId);

    if (task) {
      task.title = taskTitleInput.value.trim();
      task.description = taskDescriptionInput.value.trim();
      task.status = taskStatusInput.value as TaskStatus;
      task.subtasks = subtasks;
    }
    editingTaskId = null;
  } else {
    board.tasks.push({
      id: Date.now(),
      title: taskTitleInput.value.trim(),
      description: taskDescriptionInput.value.trim(),
      status: taskStatusInput.value as TaskStatus,
      subtasks,
    });
  }
  renderTasks();
  taskForm.reset();
  subtaskContainer.innerHTML = `
    <div class="flex gap-3">
      <input
        type="text"
        placeholder="e.g. Make coffee"
        class="subtask-input flex-1 rounded-md border border-[#e4ebfa] bg-white p-3 text-sm outline-none focus:border-[#635fc7] dark:border-[#3e3f4e] dark:bg-[#20212c] dark:text-white"
      />
      <button
        type="button"
        class="remove-subtask px-2 text-xl font-bold text-[#828fa3] hover:text-[#ea5555]"
      >
        ×
      </button>
    </div>
  `;
  taskModal.classList.add("hidden");
  taskModal.classList.remove("flex");
});
deleteTaskButton.addEventListener("click", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const taskIndex = board.tasks.findIndex((task) => task.id === selectedTaskId);
  if (taskIndex === -1) return;
  const confirmed = confirm("Are you sure you want to delete this task?");
  if (!confirmed) return;
  board.tasks.splice(taskIndex, 1);
  selectedTaskId = null;
  editingTaskId = null;
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
  renderTasks();
});
const boardButtons =
  document.querySelectorAll<HTMLButtonElement>(".board-button");

boardButtons.forEach((button) => {
  button.addEventListener("click", () => {
    const boardId = Number(button.id.replace("board-", ""));

    currentBoardId = boardId;

    renderTasks();

    boardButtons.forEach((item) => {
      item.classList.remove("bg-[#635fc7]", "text-white");
      item.classList.add("text-[#828fa3]");
    });

    button.classList.add("bg-[#635fc7]", "text-white");
    button.classList.remove("text-[#828fa3]");
  });
});
const createBoardButton = document.getElementById("create-board")!;
const boardModal = document.getElementById("board-modal")!;
const closeBoardModal = document.getElementById("close-board-modal")!;
const boardForm = document.getElementById("board-form") as HTMLFormElement;
const boardNameInput = document.getElementById(
  "board-name",
) as HTMLInputElement;
createBoardButton.addEventListener("click", () => {
  boardModal.classList.remove("hidden");
  boardModal.classList.add("flex");
  boardNameInput.focus();
});
closeBoardModal.addEventListener("click", () => {
  boardModal.classList.add("hidden");
  boardModal.classList.remove("flex");
  boardForm.reset();
});
boardForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = boardNameInput.value.trim();
  if (!name) return;
  const newBoard: Board = {
    id: Date.now(),
    name,
    tasks: [],
  };
  boards.push(newBoard);
  boardForm.reset();
  boardModal.classList.add("hidden");
  boardModal.classList.remove("flex");
});
const boardsNav = document.querySelector("nav")!;
function renderSidebar(): void {
  const createButton = document.getElementById("create-board")!;
  boardsNav.querySelectorAll(".board-button").forEach((button) => {
    button.remove();
  });
  boards.forEach((board) => {
    const button = document.createElement("button");
    button.className =
      "board-button flex h-12 w-[231px] items-center gap-3 rounded-r-2xl px-6 text-left text-[#828fa3] hover:bg-[#f0effa] hover:text-[#635fc7] dark:hover:bg-[#3e3f4e]";
    if (board.id === currentBoardId) {
      button.classList.add("bg-[#635fc7]", "text-white");
      button.classList.remove("text-[#828fa3]");
    }
    button.innerHTML = `
      <span>▰</span>
      <span>${board.name}</span>
    `;
    button.addEventListener("click", () => {
      currentBoardId = board.id;
      renderSidebar();
      renderTasks();
    });
    boardsNav.insertBefore(button, createButton);
  });
}
const boardsCount = document.getElementById("boards-count")!;
function updateBoardsCount(): void {
  boardsCount.textContent = `All Boards (${boards.length})`;
}
loadData();
renderSidebar();
updateBoardsCount();
renderTasks();
function editBoard(): void {
  const board = getCurrentBoard();
  const newName = prompt("Enter new board name:", board.name);
  if (!newName) return;
  const name = newName.trim();
  if (!name) return;
  board.name = name;
  renderSidebar();
  renderTasks();
  updateBoardsCount();
}
const moreButton = document.getElementById("more-button")!;
moreButton.addEventListener("click", () => {
  const action = prompt("1. Edit Board\n2. Delete Board\n\nEnter 1 or 2:");
  if (action === "1") {
    editBoard();
  }
  if (action === "2") {
    deleteBoard();
  }
});
const board = getCurrentBoard();
moreButton.addEventListener("click", () => {
  editBoard();
});
moreButton.addEventListener("click", () => {
  const action = prompt("1. Edit Board\n2. Delete Board\n\nEnter 1 or 2:");
  if (action === "1") {
    editBoard();
  }
  if (action === "2") {
    deleteBoard();
  }
});
function saveData(): void {
  localStorage.setItem("kanban-boards", JSON.stringify(boards));
  localStorage.setItem("kanban-current-board", String(currentBoardId));
}
function loadData(): void {
  const savedBoards = localStorage.getItem("kanban-boards");
  const savedBoardId = localStorage.getItem("kanban-current-board");
  if (savedBoards) {
    const data = JSON.parse(savedBoards);
    boards.splice(0, boards.length, ...data);
  }
  if (savedBoardId) {
    currentBoardId = Number(savedBoardId);
  }
}
const themeToggle = document.getElementById("theme-toggle");
if (themeToggle) {
  themeToggle.addEventListener("click", () => {
    document.documentElement.classList.toggle("dark");
    const isDark = document.documentElement.classList.contains("dark");
    localStorage.setItem("kanban-theme", isDark ? "dark" : "light");
  });
}
const savedTheme = localStorage.getItem("kanban-theme");
if (savedTheme === "dark") {
  document.documentElement.classList.add("dark");
}
if (savedTheme === "light") {
  document.documentElement.classList.remove("dark");
}
function updateTaskAfterSubtaskChange(task: Task): void {
  renderTasks();
  if (selectedTaskId === task.id) {
    renderSubtasks(task);
  }
  saveData();
}
// MOVE TASK BETWEEN COLUMNS

function moveTask(taskId: number, newStatus: TaskStatus): void {
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === taskId);
  if (!task) return;
  task.status = newStatus;
  saveData();
  renderTasks();
}
function createMoveSelect(task: Task): HTMLSelectElement {
  const select = document.createElement("select");
  select.className =
    "mt-3 w-full rounded-md border border-[#e4ebfa] bg-white p-2 text-xs dark:border-[#3e3f4e] dark:bg-[#20212c] dark:text-white";
  select.innerHTML = `
    <option value="todo">Todo</option>
    <option value="doing">Doing</option>
    <option value="done">Done</option>
  `;
  select.value = task.status;
  select.addEventListener("click", (event) => {
    event.stopPropagation();
  });
  select.addEventListener("change", (event) => {
    event.stopPropagation();
    moveTask(task.id, select.value as TaskStatus);
  });
  return select;
}
const projectLinks: Record<string, string> = {
  "Platform Launch": "",
  "Marketing Plan": "",
  Roadmap: "",
  "Website Design": "",
};

function openBoardProject(board: Board): void {
  const link = projectLinks[board.name];

  if (!link) {
    alert(`Project link for "${board.name}" is not added yet.`);
    return;
  }

  window.open(link, "_blank");
}

function setupProjectClick(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".board-button");

  buttons.forEach((button) => {
    button.addEventListener("dblclick", () => {
      const boardId = Number(button.id.replace("board-", ""));
      const board = boards.find((item) => item.id === boardId);

      if (!board) return;

      openBoardProject(board);
    });
  });
}
function updateProjectLinks(): void {
  const buttons = document.querySelectorAll<HTMLButtonElement>(".board-button");
  buttons.forEach((button) => {
    const boardId = Number(button.id.replace("board-", ""));
    const board = boards.find((item) => item.id === boardId);
    if (!board) return;
    button.title = projectLinks[board.name]
      ? "Open project"
      : "Project link not added";
  });
}
function refreshBoardUI(): void {
  renderSidebar();
  updateBoardsCount();
  renderTasks();
  updateProjectLinks();
}
function addProjectLink(boardName: string, url: string): void {
  projectLinks[boardName] = url;
}
addProjectLink("Platform Launch", "");
addProjectLink("Marketing Plan", "");
addProjectLink("Roadmap", "");
addProjectLink("Website Design", "");
refreshBoardUI();
setupProjectClick();