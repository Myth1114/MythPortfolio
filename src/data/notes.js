const notes = [
  {
    id: "state-ownership",
    number: "01",
    category: "React",
    title: "Keep state close to where it belongs.",
    text: "Before moving state into a global store, ask whether the component tree already gives you a sensible place for it. Not every piece of state needs to travel across the application.",
    tags: ["React", "State", "Architecture"],
    year: "2026",
  },

  {
    id: "component-abstraction",
    number: "02",
    category: "React",
    title: "Abstract after the pattern becomes clear.",
    text: "Don't create a reusable component just because two pieces of UI look similar. First understand what is actually shared. Good abstraction usually appears after repetition, not before it.",
    tags: ["Components", "Architecture"],
    year: "2026",
  },

  {
    id: "css-first",
    number: "03",
    category: "CSS",
    title: "Check what CSS can already do.",
    text: "Before reaching for JavaScript, a library or another dependency, check whether CSS already solves the problem. Layout, animation, responsiveness and interaction have become surprisingly capable.",
    tags: ["CSS", "Frontend"],
    year: "2026",
  },

  {
    id: "responsive-design",
    number: "04",
    category: "Responsive",
    title: "Don't design desktop first and repair mobile later.",
    text: "Responsive design becomes much easier when the component is designed around content and constraints rather than a specific screen size.",
    tags: ["Responsive", "UI"],
    year: "2026",
  },

  {
    id: "semantic-html",
    number: "05",
    category: "HTML",
    title: "Use HTML before adding JavaScript.",
    text: "A surprising number of interface problems become simpler when the correct semantic HTML element is used from the beginning. Native behavior is functionality you don't have to build yourself.",
    tags: ["HTML", "Accessibility"],
    year: "2026",
  },

  {
    id: "debugging",
    number: "06",
    category: "Debugging",
    title: "Read the error before changing the code.",
    text: "It's tempting to immediately start changing things when something breaks. First read the complete error. Then reproduce the problem. Then make the smallest change that can test your assumption.",
    tags: ["Debugging", "Workflow"],
    year: "2026",
  },

  {
    id: "git-commits",
    number: "07",
    category: "Git",
    title: "A commit should explain a change.",
    text: "Good commit history makes a project easier to understand later. 'Fix stuff' doesn't tell future-you much. A small, specific commit message creates context without needing another explanation.",
    tags: ["Git", "Workflow"],
    year: "2026",
  },

  {
    id: "performance",
    number: "08",
    category: "Performance",
    title: "Measure before optimizing.",
    text: "Performance work becomes much more useful when you know what is actually slow. Guessing can lead to complicated optimizations that solve a problem users never had.",
    tags: ["Performance", "Web"],
    year: "2026",
  },

  {
    id: "accessibility",
    number: "09",
    category: "Accessibility",
    title: "Accessibility is easier when it starts with the markup.",
    text: "Semantic structure, keyboard interaction, labels and sensible focus behavior are much easier to maintain when accessibility is considered while building rather than added as a final checklist.",
    tags: ["Accessibility", "HTML", "UX"],
    year: "2026",
  },

  {
    id: "ai-review",
    number: "10",
    category: "AI",
    title: "Never outsource understanding.",
    text: "AI can write a function faster than I can sometimes. That doesn't mean I should merge it without understanding what it does, why it works and what assumptions it makes.",
    tags: ["AI", "Code Review"],
    year: "2026",
  },

  {
    id: "dependencies",
    number: "11",
    category: "Architecture",
    title: "Every dependency is a decision.",
    text: "Adding a package solves today's problem, but it also adds something to maintain, update and understand. Small dependencies are still decisions worth making deliberately.",
    tags: ["Architecture", "Dependencies"],
    year: "2026",
  },

  {
    id: "readable-code",
    number: "12",
    category: "Code",
    title: "Optimize for the developer reading the code tomorrow.",
    text: "Code only runs for machines, but it is maintained by people. Clear names, sensible structure and small functions often matter more than clever solutions.",
    tags: ["Clean Code", "Maintainability"],
    year: "2026",
  },
];

export default notes;
