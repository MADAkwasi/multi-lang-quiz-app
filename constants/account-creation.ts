export const ACCOUNT_CREATION_STEPS = [
  {
    id: "1",
    title: "What type of account do you want to create?",
    subtitle: "You can skip if you are not sure",
    options: [
      { id: "1", text: "Personal", color: "#5E2BB7", icon: "user-alt" },
      {
        id: "2",
        text: "Teacher",
        color: "#F9A826",
        icon: "chalkboard-teacher",
      },
      { id: "3", text: "Student", color: "#0a7ea4", icon: "user-graduate" },
      { id: "4", text: "Professional", color: "#34A853", icon: "user-tie" },
    ],
  },
  {
    id: "2",
    title: "Describe a workplace that suits you",
    subtitle: "You can skip if you are not sure",
    options: [
      { id: "1", text: "School", color: "#5E2BB7", icon: "school" },
      {
        id: "2",
        text: "Higher Education",
        color: "#F9A826",
        icon: "university",
      },
      { id: "3", text: "Teams", color: "#0a7ea4", icon: "users" },
      { id: "4", text: "Business", color: "#34A853", icon: "briefcase" },
    ],
  },
  { id: "3", title: "Set Preferences" },
  { id: "4", title: "Review & Confirm" },
];
