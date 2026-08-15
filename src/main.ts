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
interface Column {
  id: number;
  name: string;
}
const boards: Board[] = [
  {
    id: 1,
    name: "Platform Launch",
    tasks: [
      {
        id: 1,
        title: "Build UI for onboarding flow",
        description:
          "Create the onboarding interface and connect the user flow.",
        status: "todo",
        subtasks: [
          {
            id: 1,
            title: "Create onboarding UI",
            completed: true,
          },
          {
            id: 2,
            title: "Connect onboarding flow",
            completed: false,
          },
          {
            id: 3,
            title: "Test onboarding flow",
            completed: false,
          },
        ],
      },
      {
        id: 2,
        title: "Build UI for search",
        description: "Create the search interface.",
        status: "todo",
        subtasks: [],
      },
      {
        id: 3,
        title: "Build settings UI",
        description: "Create the settings page.",
        status: "todo",
        subtasks: [
          {
            id: 4,
            title: "Create settings layout",
            completed: false,
          },
          {
            id: 5,
            title: "Add settings components",
            completed: false,
          },
        ],
      },
      {
        id: 4,
        title: "QA and test all major user journeys",
        description: "Test all important user journeys.",
        status: "todo",
        subtasks: [
          {
            id: 6,
            title: "Test user journeys",
            completed: false,
          },
          {
            id: 7,
            title: "Fix reported issues",
            completed: false,
          },
        ],
      },
      {
        id: 5,
        title: "Design settings and search pages",
        description: "Design settings and search pages.",
        status: "doing",
        subtasks: [
          {
            id: 8,
            title: "Design settings page",
            completed: true,
          },
          {
            id: 9,
            title: "Design search page",
            completed: true,
          },
          {
            id: 10,
            title: "Review designs",
            completed: false,
          },
        ],
      },
      {
        id: 6,
        title: "Add account management endpoints",
        description: "Create account management endpoints.",
        status: "doing",
        subtasks: [
          {
            id: 11,
            title: "Create account endpoint",
            completed: true,
          },
          {
            id: 12,
            title: "Create update endpoint",
            completed: true,
          },
          {
            id: 13,
            title: "Test endpoints",
            completed: false,
          },
        ],
      },
      {
        id: 7,
        title: "Design onboarding flow",
        description: "Design the complete onboarding flow.",
        status: "doing",
        subtasks: [
          {
            id: 14,
            title: "Create flow",
            completed: true,
          },
          {
            id: 15,
            title: "Review screens",
            completed: false,
          },
          {
            id: 16,
            title: "Finalize flow",
            completed: false,
          },
        ],
      },
      {
        id: 8,
        title: "Add search endpoints",
        description: "Create search endpoints.",
        status: "doing",
        subtasks: [
          {
            id: 17,
            title: "Create search endpoint",
            completed: true,
          },
          {
            id: 18,
            title: "Test search endpoint",
            completed: false,
          },
        ],
      },
      {
        id: 9,
        title: "Add authentication endpoints",
        description: "Create authentication endpoints.",
        status: "doing",
        subtasks: [
          {
            id: 19,
            title: "Create authentication endpoint",
            completed: true,
          },
          {
            id: 20,
            title: "Connect authentication",
            completed: false,
          },
        ],
      },
      {
        id: 10,
        title: "Research pricing points of various competitors",
        description: "Research competitors and different pricing models.",
        status: "doing",
        subtasks: [
          {
            id: 21,
            title: "Research competitor pricing",
            completed: true,
          },
          {
            id: 22,
            title: "Compare business models",
            completed: false,
          },
          {
            id: 23,
            title: "Evaluate pricing options",
            completed: false,
          },
        ],
      },
      {
        id: 11,
        title: "Conduct 5 wireframe tests",
        description: "Conduct wireframe usability tests.",
        status: "done",
        subtasks: [
          {
            id: 24,
            title: "Conduct wireframe tests",
            completed: true,
          },
        ],
      },
      {
        id: 12,
        title: "Create wireframe prototype",
        description: "Create the wireframe prototype.",
        status: "done",
        subtasks: [
          {
            id: 25,
            title: "Create prototype",
            completed: true,
          },
        ],
      },
      {
        id: 13,
        title: "Review results of usability tests",
        description: "Review test results and improve the design.",
        status: "done",
        subtasks: [
          {
            id: 26,
            title: "Review test results",
            completed: true,
          },
          {
            id: 27,
            title: "Identify improvements",
            completed: true,
          },
          {
            id: 28,
            title: "Iterate design",
            completed: true,
          },
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
          {
            id: 39,
            title: "Research competitors",
            completed: false,
          },
          {
            id: 40,
            title: "Define target audience",
            completed: false,
          },
        ],
      },
      {
        id: 19,
        title: "Marketing Strategy",
        description: "Create the main marketing strategy.",
        status: "todo",
        subtasks: [
          {
            id: 41,
            title: "Create strategy",
            completed: false,
          },
          {
            id: 42,
            title: "Set goals",
            completed: false,
          },
        ],
      },
      {
        id: 20,
        title: "Social Media Campaign",
        description: "Plan the social media campaign.",
        status: "doing",
        subtasks: [
          {
            id: 43,
            title: "Choose platforms",
            completed: true,
          },
          {
            id: 44,
            title: "Create content plan",
            completed: false,
          },
        ],
      },
      {
        id: 21,
        title: "Email Campaign",
        description: "Prepare an email marketing campaign.",
        status: "doing",
        subtasks: [
          {
            id: 45,
            title: "Create email design",
            completed: true,
          },
          {
            id: 46,
            title: "Write email content",
            completed: false,
          },
        ],
      },
      {
        id: 22,
        title: "Marketing Report",
        description: "Prepare the monthly marketing report.",
        status: "done",
        subtasks: [
          {
            id: 47,
            title: "Collect data",
            completed: true,
          },
          {
            id: 48,
            title: "Create report",
            completed: true,
          },
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
          {
            id: 51,
            title: "List features",
            completed: false,
          },
          {
            id: 52,
            title: "Set priorities",
            completed: false,
          },
        ],
      },
      {
        id: 25,
        title: "Development Plan",
        description: "Create the development timeline.",
        status: "todo",
        subtasks: [
          {
            id: 53,
            title: "Set milestones",
            completed: false,
          },
          {
            id: 54,
            title: "Create timeline",
            completed: false,
          },
        ],
      },
      {
        id: 26,
        title: "Feature Development",
        description: "Develop the main product features.",
        status: "doing",
        subtasks: [
          {
            id: 55,
            title: "Build features",
            completed: true,
          },
          {
            id: 56,
            title: "Test features",
            completed: false,
          },
        ],
      },
      {
        id: 27,
        title: "Beta Release",
        description: "Prepare the beta version.",
        status: "doing",
        subtasks: [
          {
            id: 57,
            title: "Prepare beta",
            completed: true,
          },
          {
            id: 58,
            title: "Beta testing",
            completed: false,
          },
        ],
      },
      {
        id: 28,
        title: "Version 1 Release",
        description: "Prepare the first official release.",
        status: "done",
        subtasks: [
          {
            id: 59,
            title: "Final testing",
            completed: true,
          },
          {
            id: 60,
            title: "Prepare release",
            completed: true,
          },
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
          {
            id: 63,
            title: "Create wireframe",
            completed: false,
          },
          {
            id: 64,
            title: "Choose colors",
            completed: false,
          },
        ],
      },
      {
        id: 31,
        title: "Navigation Design",
        description: "Design the website navigation.",
        status: "todo",
        subtasks: [
          {
            id: 65,
            title: "Design menu",
            completed: false,
          },
          {
            id: 66,
            title: "Design navigation",
            completed: false,
          },
        ],
      },
      {
        id: 32,
        title: "Mobile Design",
        description: "Create the mobile version.",
        status: "doing",
        subtasks: [
          {
            id: 67,
            title: "Mobile layout",
            completed: true,
          },
          {
            id: 68,
            title: "Responsive design",
            completed: false,
          },
        ],
      },
      {
        id: 33,
        title: "UI Components",
        description: "Design reusable UI components.",
        status: "doing",
        subtasks: [
          {
            id: 69,
            title: "Create buttons",
            completed: true,
          },
          {
            id: 70,
            title: "Create cards",
            completed: false,
          },
        ],
      },
      {
        id: 34,
        title: "Final Website",
        description: "Complete the final website design.",
        status: "done",
        subtasks: [
          {
            id: 71,
            title: "Review design",
            completed: true,
          },
          {
            id: 72,
            title: "Approve final version",
            completed: true,
          },
        ],
      },
    ],
  },
];
let currentBoardId = 1;
let selectedTaskId: number | null = null;
let editingTaskId: number | null = null;
let taskToDeleteId: number | null = null;

const columns: Column[] = [
  {
    id: 1,
    name: "Todo",
  },
  {
    id: 2,
    name: "Doing",
  },
  {
    id: 3,
    name: "Done",
  },
];
const sidebar = document.getElementById("sidebar")!;
const mainContent = document.getElementById("main-content")!;
const boardsNav = document.getElementById("boards-nav")!;
const boardsCount = document.getElementById("boards-count")!;
const boardTitle = document.getElementById("board-title")!;
const todoList = document.getElementById("todo-list")!;
const doingList = document.getElementById("doing-list")!;
const doneList = document.getElementById("done-list")!;
const todoCount = document.getElementById("todo-count")!;
const doingCount = document.getElementById("doing-count")!;
const doneCount = document.getElementById("done-count")!;
const addTaskButton = document.getElementById("add-task")!;
const taskDetails = document.getElementById("task-details")!;
const detailsTitle = document.getElementById("details-title")!;
const detailsDescription = document.getElementById("details-description")!;
const detailsStatus = document.getElementById(
  "details-status",
) as HTMLSelectElement;
const detailsSubtasks = document.getElementById("details-subtasks")!;
const taskMenuButton = document.getElementById("task-menu-button")!;
const taskMenu = document.getElementById("task-menu")!;
const closeDetails = document.getElementById("close-details")!;
const editTaskButton = document.getElementById("edit-task")!;
const deleteTaskButton = document.getElementById("delete-task")!;
const deleteModal = document.getElementById("delete-modal")!;
const deleteMessage = document.getElementById("delete-message")!;
const confirmDelete = document.getElementById("confirm-delete")!;
const cancelDelete = document.getElementById("cancel-delete")!;
const taskModal = document.getElementById("task-modal")!;
const taskModalTitle = document.getElementById("task-modal-title")!;
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
const submitTaskButton = document.getElementById("submit-task")!;
const closeModal = document.getElementById("close-modal")!;
const addSubtaskButton = document.getElementById("add-subtask")!;
const subtaskContainer = document.getElementById("subtask-container")!;
const createBoardButton = document.getElementById("create-board")!;
const boardModal = document.getElementById("board-modal")!;
const closeBoardModal = document.getElementById("close-board-modal")!;
const boardForm = document.getElementById("board-form") as HTMLFormElement;
const boardNameInput = document.getElementById(
  "board-name",
) as HTMLInputElement;
const boardMenuButton = document.getElementById("board-menu-button")!;
const boardMenu = document.getElementById("board-menu")!;
const editBoardButton = document.getElementById("edit-board")!;
const deleteBoardButton = document.getElementById("delete-board")!;
const themeToggle = document.getElementById("theme-toggle")!;
const hideSidebarButton = document.getElementById("hide-sidebar")!;
const showSidebarButton = document.getElementById("show-sidebar")!;
const newColumnButton = document.getElementById("new-column")!;
const columnModal = document.getElementById("column-modal")!;
const closeColumnModal = document.getElementById("close-column-modal")!;
const columnForm = document.getElementById("column-form") as HTMLFormElement;
const columnNameInput = document.getElementById(
  "column-name",
) as HTMLInputElement;
function getCurrentBoard(): Board {
  const board = boards.find((item) => item.id === currentBoardId);
  if (!board) {
    return boards[0];
  }
  return board;
}
function saveData(): void {
  localStorage.setItem("kanban-boards", JSON.stringify(boards));
  localStorage.setItem("kanban-current-board", String(currentBoardId));
  localStorage.setItem("kanban-columns", JSON.stringify(columns));
}
function loadData(): void {
  const savedBoards = localStorage.getItem("kanban-boards");
  const savedBoardId = localStorage.getItem("kanban-current-board");
  if (savedBoards) {
    try {
      const data = JSON.parse(savedBoards);
      if (Array.isArray(data) && data.length > 0) {
        boards.splice(0, boards.length, ...data);
      }
    } catch {
      localStorage.removeItem("kanban-boards");
    }
  }
  if (savedBoardId) {
    const id = Number(savedBoardId);
    if (boards.some((board) => board.id === id)) {
      currentBoardId = id;
    }
  }
}
function createTaskElement(task: Task): HTMLDivElement {
  const card = document.createElement("div");
  card.className =
    "cursor-pointer rounded-lg bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md dark:bg-[#2b2c37]";
  const completed = task.subtasks.filter((subtask) => subtask.completed).length;
  card.innerHTML = `
    <h3 class="mb-2 font-bold text-[#2b2c37] dark:text-white">
      ${escapeHTML(task.title)}
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
function renderTasks(): void {
  const board = getCurrentBoard();
  todoList.innerHTML = "";
  doingList.innerHTML = "";
  doneList.innerHTML = "";
  board.tasks.forEach((task) => {
    const card = createTaskElement(task);
    if (task.status === "todo") {
      todoList.appendChild(card);
    }
    if (task.status === "doing") {
      doingList.appendChild(card);
    }
    if (task.status === "done") {
      doneList.appendChild(card);
    }
  });
  todoCount.textContent = `(${board.tasks.filter((task) => task.status === "todo").length})`;
  doingCount.textContent = `(${board.tasks.filter((task) => task.status === "doing").length})`;
  doneCount.textContent = `(${board.tasks.filter((task) => task.status === "done").length})`;
  boardTitle.textContent = board.name;
}
function openTaskDetails(taskId: number): void {
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === taskId);
  if (!task) return;
  selectedTaskId = task.id;
  detailsTitle.textContent = task.title;
  detailsDescription.textContent =
    task.description || "No description available.";
  detailsStatus.value = task.status;
  renderSubtasks(task);
  taskMenu.classList.add("hidden");
  taskDetails.classList.remove("hidden");
  taskDetails.classList.add("flex");
}
function closeTaskDetails(): void {
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
  taskMenu.classList.add("hidden");
  selectedTaskId = null;
}
function renderSubtasks(task: Task): void {
  detailsSubtasks.innerHTML = "";
  if (task.subtasks.length === 0) {
    detailsSubtasks.innerHTML = `
      <p class="rounded-md bg-[#f4f7fd] p-4 text-sm text-[#828fa3] dark:bg-[#20212c]">
        No subtasks.
      </p>
    `;
    return;
  }
  task.subtasks.forEach((subtask) => {
    const item = document.createElement("label");
    item.className =
      "flex cursor-pointer items-center gap-3 rounded-md bg-[#f4f7fd] p-3 dark:bg-[#20212c]";
    item.innerHTML = `
      <input type="checkbox" class="subtask-checkbox h-4 w-4 accent-[#635fc7]" ${subtask.completed ? "checked" : ""} />
      <span class="text-sm ${
        subtask.completed
          ? "text-[#828fa3] line-through"
          : "text-[#2b2c37] dark:text-white"
      }">
        ${escapeHTML(subtask.title)}
      </span>
    `;
    const checkbox = item.querySelector(
      ".subtask-checkbox",
    ) as HTMLInputElement;
    checkbox.addEventListener("change", () => {
      subtask.completed = checkbox.checked;
      renderSubtasks(task);
      renderTasks();
      saveData();
    });
    detailsSubtasks.appendChild(item);
  });
}
taskMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  taskMenu.classList.toggle("hidden");
});
document.addEventListener("click", (event) => {
  const target = event.target as Node;
  if (!taskMenu.contains(target) && !taskMenuButton.contains(target)) {
    taskMenu.classList.add("hidden");
  }
  if (!boardMenu.contains(target) && !boardMenuButton.contains(target)) {
    boardMenu.classList.add("hidden");
  }
});
closeDetails.addEventListener("click", () => {
  closeTaskDetails();
});
taskDetails.addEventListener("click", (event) => {
  if (event.target === taskDetails) {
    closeTaskDetails();
  }
});
detailsStatus.addEventListener("change", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === selectedTaskId);
  if (!task) return;
  task.status = detailsStatus.value as TaskStatus;
  saveData();
  renderTasks();
});
addTaskButton.addEventListener("click", () => {
  openAddTaskModal();
});
function openAddTaskModal(): void {
  editingTaskId = null;
  taskModalTitle.textContent = "Add New Task";
  submitTaskButton.textContent = "Create Task";
  taskForm.reset();
  subtaskContainer.innerHTML = "";
  addSubtaskInput();
  taskModal.classList.remove("hidden");
  taskModal.classList.add("flex");
  taskTitleInput.focus();
}
closeModal.addEventListener("click", () => {
  closeTaskModal();
});
function closeTaskModal(): void {
  taskModal.classList.add("hidden");
  taskModal.classList.remove("flex");
  editingTaskId = null;
}
addSubtaskButton.addEventListener("click", () => {
  addSubtaskInput();
});
function addSubtaskInput(value = ""): void {
  const wrapper = document.createElement("div");
  wrapper.className = "flex gap-3";
  wrapper.innerHTML = `
    <input type="text" value="${escapeAttribute(value)}" placeholder="e.g. Make coffee" class="subtask-input flex-1 rounded-md border border-[#e4ebfa] bg-white p-3 text-sm outline-none focus:border-[#635fc7] dark:border-[#3e3f4e] dark:bg-[#20212c] dark:text-white" />
    <button type="button" class="remove-subtask px-2 text-xl font-bold text-[#828fa3] hover:text-[#ea5555]">
      ×
    </button>
  `;
  subtaskContainer.appendChild(wrapper);
}
subtaskContainer.addEventListener("click", (event) => {
  const target = event.target as HTMLElement;
  if (target.classList.contains("remove-subtask")) {
    target.parentElement?.remove();
  }
});
taskForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const board = getCurrentBoard();
  const title = taskTitleInput.value.trim();
  if (!title) {
    return;
  }
  const description = taskDescriptionInput.value.trim();
  const status = taskStatusInput.value as TaskStatus;
  const inputs =
    subtaskContainer.querySelectorAll<HTMLInputElement>(".subtask-input");
  const subtasks: Subtask[] = [];
  inputs.forEach((input, index) => {
    const subtaskTitle = input.value.trim();
    if (subtaskTitle) {
      subtasks.push({
        id: Date.now() + index,
        title: subtaskTitle,
        completed: false,
      });
    }
  });
  if (editingTaskId !== null) {
    const task = board.tasks.find((item) => item.id === editingTaskId);
    if (task) {
      task.title = title;
      task.description = description;
      task.status = status;
      task.subtasks = subtasks;
    }
  }
  else {
    const newTask: Task = {
      id: Date.now(),
      title,
      description,
      status,
      subtasks,
    };
    board.tasks.push(newTask);
  }
  saveData();
  renderTasks();
  closeTaskModal();
  closeTaskDetails();
});
editTaskButton.addEventListener("click", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === selectedTaskId);
  if (!task) return;
  editingTaskId = task.id;
  taskModalTitle.textContent = "Edit Task";
  submitTaskButton.textContent = "Save Changes";
  taskTitleInput.value = task.title;
  taskDescriptionInput.value = task.description;
  taskStatusInput.value = task.status;
  subtaskContainer.innerHTML = "";
  if (task.subtasks.length === 0) {
    addSubtaskInput();
  } else {
    task.subtasks.forEach((subtask) => {
      addSubtaskInput(subtask.title);
    });
  }
  taskMenu.classList.add("hidden");
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
  taskModal.classList.remove("hidden");
  taskModal.classList.add("flex");
  taskTitleInput.focus();
});
deleteTaskButton.addEventListener("click", () => {
  if (selectedTaskId === null) return;
  const board = getCurrentBoard();
  const task = board.tasks.find((item) => item.id === selectedTaskId);
  if (!task) return;
  taskToDeleteId = task.id;
  deleteMessage.textContent = `Are you sure you want to delete "${task.title}"? This action cannot be undone.`;
  taskMenu.classList.add("hidden");
  taskDetails.classList.add("hidden");
  taskDetails.classList.remove("flex");
  deleteModal.classList.remove("hidden");
  deleteModal.classList.add("flex");
});
confirmDelete.addEventListener("click", () => {
  if (taskToDeleteId === null) return;
  const board = getCurrentBoard();
  const index = board.tasks.findIndex((task) => task.id === taskToDeleteId);
  if (index !== -1) {
    board.tasks.splice(index, 1);
  }
  taskToDeleteId = null;
  selectedTaskId = null;
  deleteModal.classList.add("hidden");
  deleteModal.classList.remove("flex");
  saveData();
  renderTasks();
});
cancelDelete.addEventListener("click", () => {
  taskToDeleteId = null;
  deleteModal.classList.add("hidden");
  deleteModal.classList.remove("flex");
});
deleteModal.addEventListener("click", (event) => {
  if (event.target === deleteModal) {
    taskToDeleteId = null;
    deleteModal.classList.add("hidden");
    deleteModal.classList.remove("flex");
  }
});
function renderSidebar(): void {
  boardsNav.innerHTML = "";
  boards.forEach((board) => {
    const button = document.createElement("button");
    button.type = "button";
    button.id = `board-${board.id}`;
    button.className =
      "board-button flex h-12 w-[231px] items-center gap-3 rounded-r-2xl px-6 text-left hover:bg-[#f0effa] hover:text-[#635fc7] dark:hover:bg-[#3e3f4e]";
    if (board.id === currentBoardId) {
      button.classList.add("bg-[#635fc7]", "text-white");
    } else {
      button.classList.add("text-[#828fa3]");
    }
    button.innerHTML = `
      <span>▰</span>
      <span>${escapeHTML(board.name)}</span>
    `;
    button.addEventListener("click", () => {
      currentBoardId = board.id;
      boardMenu.classList.add("hidden");
      renderSidebar();
      renderTasks();
      saveData();
    });
    boardsNav.appendChild(button);
  });
}
function updateBoardsCount(): void {
  boardsCount.textContent = `All Boards (${boards.length})`;
}
createBoardButton.addEventListener("click", () => {
  boardForm.reset();
  boardModal.classList.remove("hidden");
  boardModal.classList.add("flex");
  boardNameInput.focus();
});
closeBoardModal.addEventListener("click", () => {
  closeBoardModalWindow();
});
function closeBoardModalWindow(): void {
  boardModal.classList.add("hidden");
  boardModal.classList.remove("flex");
}
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
  currentBoardId = newBoard.id;
  saveData();
  closeBoardModalWindow();
  renderSidebar();
  updateBoardsCount();
  renderTasks();
});
boardMenuButton.addEventListener("click", (event) => {
  event.stopPropagation();
  boardMenu.classList.toggle("hidden");
});
editBoardButton.addEventListener("click", () => {
  const board = getCurrentBoard();
  const newName = prompt("Enter new board name:", board.name);
  if (!newName) return;
  const name = newName.trim();
  if (!name) return;
  board.name = name;
  boardMenu.classList.add("hidden");
  saveData();
  renderSidebar();
  renderTasks();
  updateBoardsCount();
});
deleteBoardButton.addEventListener("click", () => {
  if (boards.length <= 1) {
    alert("You cannot delete the last board.");
    return;
  }
  const board = getCurrentBoard();
  const confirmed = confirm(`Are you sure you want to delete "${board.name}"?`);
  if (!confirmed) return;
  const index = boards.findIndex((item) => item.id === board.id);
  if (index === -1) return;
  boards.splice(index, 1);
  currentBoardId = boards[0].id;
  boardMenu.classList.add("hidden");
  saveData();
  renderSidebar();
  renderTasks();
  updateBoardsCount();
});
hideSidebarButton.addEventListener("click", () => {
  sidebar.classList.add("-translate-x-full");
  mainContent.classList.remove("pl-[260px]");
  showSidebarButton.classList.remove("hidden");
  showSidebarButton.classList.add("flex");
});
showSidebarButton.addEventListener("click", () => {
  sidebar.classList.remove("-translate-x-full");
  mainContent.classList.add("pl-[260px]");
  showSidebarButton.classList.add("hidden");
  showSidebarButton.classList.remove("flex");
});
themeToggle.addEventListener("click", () => {
  const isDark = document.documentElement.classList.toggle("dark");
  localStorage.setItem("kanban-theme", isDark ? "dark" : "light");
});
function loadTheme(): void {
  const savedTheme = localStorage.getItem("kanban-theme");

  if (savedTheme === "light") {
    document.documentElement.classList.remove("dark");
  } else {
    document.documentElement.classList.add("dark");
  }
}
newColumnButton.addEventListener("click", () => {
  columnForm.reset();
  columnModal.classList.remove("hidden");
  columnModal.classList.add("flex");
  columnNameInput.focus();
});
closeColumnModal.addEventListener("click", () => {
  closeColumnModalWindow();
});
function closeColumnModalWindow(): void {
  columnModal.classList.add("hidden");
  columnModal.classList.remove("flex");
}
columnForm.addEventListener("submit", (event) => {
  event.preventDefault();
  const name = columnNameInput.value.trim();
  if (!name) return;
  columns.push({
    id: Date.now(),
    name,
  });
  saveData();
  closeColumnModalWindow();
  alert(`"${name}" column created.`);
});
function escapeHTML(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
function escapeAttribute(value: string): string {
  return escapeHTML(value);
}
loadData();
loadTheme();
renderSidebar();
updateBoardsCount();
renderTasks();
