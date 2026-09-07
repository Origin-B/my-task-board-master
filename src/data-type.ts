type task = {
  id: string;
  title: string;
  description: string;
  icon: string;
  status: string;
};

type addEditingTask = {
  id: string;
  description: string;
  icon: string;
  title: string;
  status: string;
};

type Icon = {
  id: number;
  title: string;
  ariaLabel: string;
};

type statusType = {
  title: string;
  id: "completed" | "wont-do" | "in-progress";
  path: string;
};

const icons: Icon[] = [
  {
    id: 1,
    title: "👨‍💻",
    ariaLabel: "work icon",
  },
  {
    id: 2,
    title: "💬",
    ariaLabel: "chat icon",
  },
  {
    id: 3,
    title: "☕",
    ariaLabel: "coffee icon",
  },
  {
    id: 4,
    title: "🏋️‍♂️",
    ariaLabel: "fitness icon",
  },
  {
    id: 5,
    title: "📚",
    ariaLabel: "books icon",
  },
  {
    id: 6,
    title: "⏰",
    ariaLabel: "alarm icon",
  },
];

const statusArr: statusType[] = [
  {
    id: "in-progress",
    title: "In Progress",
    path: "/Time_atack_duotone.svg",
  },
  {
    id: "completed",
    title: "Completed",
    path: "/Done_round_duotone.svg",
  },
  {
    id: "wont-do",
    title: "Won't do",
    path: "/close_ring_duotone.svg",
  },
];

export { type task, type statusType, type addEditingTask };
export { icons, statusArr };
