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
        description: "Create the main user interface for the platform.",
        status: "todo",
        subtasks: [
          { id: 1, title: "Create HTML structure", completed: true },
          { id: 2, title: "Add Tailwind CSS", completed: false },
          { id: 3, title: "Make it responsive", completed: false },
        ],
      },
      {
        id: 2,
        title: "Create Login Page",
        description: "Build the login page and connect the form.",
        status: "todo",
        subtasks: [
          { id: 4, title: "Create login form", completed: true },
          { id: 5, title: "Add validation", completed: false },
        ],
      },
      {
        id: 3,
        title: "Design Dashboard",
        description: "Design the main dashboard of the application.",
        status: "todo",
        subtasks: [
          { id: 6, title: "Create wireframe", completed: false },
          { id: 7, title: "Design cards", completed: false },
          { id: 8, title: "Create responsive layout", completed: false },
        ],
      },
      {
        id: 4,
        title: "Create Header",
        description: "Create the header section of the application.",
        status: "todo",
        subtasks: [
          { id: 9, title: "Create header HTML", completed: true },
          { id: 10, title: "Add navigation", completed: false },
        ],
      },
      {
        id: 5,
        title: "Create Footer",
        description: "Create the footer section of the application.",
        status: "todo",
        subtasks: [
          { id: 11, title: "Create footer", completed: false },
          { id: 12, title: "Add footer links", completed: false },
        ],
      },
      {
        id: 6,
        title: "Add Navigation",
        description: "Create the main navigation system.",
        status: "todo",
        subtasks: [
          { id: 13, title: "Create navigation", completed: true },
          { id: 14, title: "Add navigation links", completed: false },
        ],
      },
      {
        id: 7,
        title: "Create Settings Page",
        description: "Create the settings page.",
        status: "todo",
        subtasks: [
          { id: 15, title: "Create settings layout", completed: false },
          { id: 16, title: "Add settings options", completed: false },
        ],
      },
      {
        id: 8,
        title: "Create Profile Page",
        description: "Create the user profile page.",
        status: "doing",
        subtasks: [
          { id: 17, title: "Create profile layout", completed: true },
          { id: 18, title: "Add profile information", completed: false },
        ],
      },
      {
        id: 9,
        title: "Add Authentication",
        description: "Add authentication functionality.",
        status: "doing",
        subtasks: [
          { id: 19, title: "Create authentication logic", completed: true },
          { id: 20, title: "Connect login", completed: true },
          { id: 21, title: "Test authentication", completed: false },
        ],
      },
      {
        id: 10,
        title: "Add JavaScript",
        description: "Add the required JavaScript functionality.",
        status: "doing",
        subtasks: [
          { id: 22, title: "Create events", completed: true },
          { id: 23, title: "Connect buttons", completed: false },
        ],
      },
      {
        id: 11,
        title: "HTML Structure",
        description: "Create the complete HTML structure.",
        status: "done",
        subtasks: [
          { id: 24, title: "Create main structure", completed: true },
          { id: 25, title: "Create sidebar", completed: true },
          { id: 26, title: "Create header", completed: true },
        ],
      },
      {
        id: 12,
        title: "Tailwind Setup",
        description: "Configure Tailwind CSS for the project.",
        status: "done",
        subtasks: [
          { id: 27, title: "Install Tailwind", completed: true },
          { id: 28, title: "Configure Tailwind", completed: true },
        ],
      },
      {
        id: 13,
        title: "Create Sidebar",
        description: "Create the sidebar and board navigation.",
        status: "done",
        subtasks: [
          { id: 29, title: "Create sidebar", completed: true },
          { id: 30, title: "Add boards", completed: true },
          { id: 31, title: "Add theme switch", completed: true },
        ],
      },
      {
        id: 14,
        title: "Responsive Design",
        description: "Make the application responsive.",
        status: "done",
        subtasks: [
          { id: 32, title: "Mobile layout", completed: true },
          { id: 33, title: "Tablet layout", completed: true },
        ],
      },
      {
        id: 15,
        title: "Testing",
        description: "Test the application and fix issues.",
        status: "done",
        subtasks: [
          { id: 34, title: "Test buttons", completed: true },
          { id: 35, title: "Test forms", completed: true },
        ],
      },
      {
        id: 16,
        title: "Fix Bugs",
        description: "Fix remaining bugs in the application.",
        status: "done",
        subtasks: [
          { id: 36, title: "Find bugs", completed: true },
          { id: 37, title: "Fix bugs", completed: true },
        ],
      },
      {
        id: 17,
        title: "Final Review",
        description: "Review the complete project before launch.",
        status: "done",
        subtasks: [
          { id: 38, title: "Review UI", completed: true },
          { id: 39, title: "Review functionality", completed: true },
          { id: 40, title: "Prepare final version", completed: true },
        ],
      },
    ],
  },
];
let currentBoardId = 1;