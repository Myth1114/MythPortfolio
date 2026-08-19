const thoughts = [
  {
    id: "ai-code-understanding",
    number: "01",
    category: "AI / Development",
    date: "2026",
    title:
      "AI made writing code cheaper. Understanding code didn't get cheaper.",
    text: "AI can produce a component in seconds. It can suggest an architecture, explain an error, and rewrite an entire function. But when something behaves strangely six months later, someone still has to understand what was built. The interesting skill in this new era might not be writing every line yourself. It might be knowing which lines deserve your attention.",
    position: "thought-card--left",
    pin: "accent",
  },

  {
    id: "reusable-components",
    number: "02",
    category: "Frontend",
    date: "2026",
    title: "A component isn't reusable just because you can reuse it.",
    text: "I've seen components become so configurable that using them requires more thought than simply writing the markup again. There is a point where abstraction stops removing complexity and starts hiding it. Reusable code should make the next decision easier, not make you learn a new API for something that used to be simple.",
    position: "thought-card--right",
    pin: "olive",
  },

  {
    id: "it-works",
    number: "03",
    category: "AI Coding",
    date: "2026",
    title: '"It works" is becoming a much lower bar.',
    text: "AI makes it incredibly easy to get something working. That's useful. But working code can still be difficult to maintain, unnecessarily complicated, inaccessible, insecure, or completely wrong for the problem. Maybe the developer's job is slowly moving from making it work toward deciding whether it should work that way at all.",
    position: "thought-card--center",
    pin: "accent",
  },

  {
    id: "documentation",
    number: "04",
    category: "Learning",
    date: "2026",
    title: "Documentation still teaches things that prompts don't.",
    text: "Ask AI how something works and you'll probably get an answer. Read the documentation and you might discover the thing you didn't know you needed to ask. I don't think AI is replacing documentation. I think good developers are going to use both — AI for the conversation, documentation for the ground truth.",
    position: "thought-card--left",
    pin: "olive",
  },

  {
    id: "react-problems",
    number: "05",
    category: "React",
    date: "2026",
    title: "The hardest React problem usually isn't React.",
    text: "Sometimes the component isn't the problem. The problem is that the state doesn't have a clear owner, the data flow doesn't make sense, or the UI is trying to represent too many things at once. It's tempting to look for another hook or another library. Sometimes the better solution is to step away from the code and rethink the problem.",
    position: "thought-card--right",
    pin: "accent",
  },

  {
    id: "code-reading",
    number: "06",
    category: "AI Era",
    date: "2026",
    title: "We're going to have to become better code readers.",
    text: "For a long time, becoming a better developer meant becoming better at writing code. AI changes that equation. If machines increasingly generate the first draft, developers will spend more time reviewing, questioning, testing, simplifying and maintaining what was generated. Knowing how to read code critically might become just as important as knowing how to write it.",
    position: "thought-card--center",
    pin: "olive",
  },

  {
    id: "design-vs-interface",
    number: "07",
    category: "Design",
    date: "2026",
    title: "A beautiful interface can still be a bad interface.",
    text: "A polished button doesn't fix a confusing flow. A beautiful animation doesn't fix poor hierarchy. A carefully chosen font doesn't fix unclear content. I like good visual design, but the older I get as a developer, the more I think the best design decisions are often the ones you barely notice.",
    position: "thought-card--left",
    pin: "accent",
  },

  {
    id: "ai-agents",
    number: "08",
    category: "AI Agents",
    date: "2026",
    title: "The interesting part of AI agents isn't that they can code.",
    text: "It's what happens when they can actually do things. Read the repository. Change files. Run tests. Look at the result. Try again. That's a very different relationship with software from asking a chatbot for a code snippet. And it makes verification much more important.",
    position: "thought-card--right",
    pin: "olive",
  },

  {
    id: "abstraction",
    number: "09",
    category: "Frontend",
    date: "2026",
    title: "We don't need another abstraction for everything.",
    text: "Sometimes a plain function is enough. Sometimes CSS is enough. Sometimes a small component is enough. The web has become incredibly good at giving us sophisticated tools for simple problems. The difficult part is knowing when not to use them.",
    position: "thought-card--center",
    pin: "accent",
  },

  {
    id: "average-software",
    number: "10",
    category: "AI / Creativity",
    date: "2026",
    title: "AI is very good at making the average thing.",
    text: "Give it a common problem and it can produce a convincing solution almost instantly. That's exactly why taste matters more now. When everyone can generate something acceptable, the difference becomes the decisions behind it — what you remove, what you keep, what you question, and what you refuse to make generic.",
    position: "thought-card--left",
    pin: "olive",
  },

  {
    id: "debugging",
    number: "11",
    category: "Debugging",
    date: "2026",
    title: "Debugging teaches you more than the happy path.",
    text: "When everything works, you learn that your code works. When everything breaks, you learn why it works. The strange bugs are often the ones that stay with you. Not because you enjoyed them, but because they forced you to understand something you had previously taken for granted.",
    position: "thought-card--right",
    pin: "accent",
  },

  {
    id: "future-developer",
    number: "12",
    category: "The Future",
    date: "2026",
    title:
      "Maybe the future developer isn't the person who writes the most code.",
    text: "Maybe it's the person who can move comfortably between the problem, the interface, the architecture, the tools and the AI helping build it. Less typing. More thinking. More reviewing. More deciding. I'm not sure what the job will look like in five years, but I don't think writing code will be enough to describe it.",
    position: "thought-card--center",
    pin: "olive",
  },
];

export default thoughts;
