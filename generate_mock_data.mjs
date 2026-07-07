import fs from 'fs';

const names = ["Sahil Dhir", "Jane Doe", "Alex Smith", "Priya Sharma", "David Kim", "Michael Chang", "Emily Davis", "Robert Wilson", "Sophia Martinez", "William Brown", "Olivia Garcia", "James Rodriguez", "Isabella Hernandez", "Benjamin Lopez", "Mia Gonzalez", "Elijah Perez", "Charlotte Wilson", "Lucas Anderson", "Amelia Thomas", "Mason Taylor"];
const headlines = [
  "Frontend Developer | UI/UX Engineer", 
  "Senior Software Engineer @ TechCorp",
  "Product Manager | Building the future",
  "Data Scientist | AI & Machine Learning",
  "Marketing Specialist | Growth Hacker",
  "Full Stack Developer | React & Node.js",
  "DevOps Engineer | Cloud Architecture",
  "UX Designer | Creating beautiful experiences",
  "Engineering Manager | Leadership & Mentorship",
  "Software Developer | Open Source Contributor"
];
const contents = [
  "You know you worked at a \"lala company\" when:\n→ HR is the owner's nephew\n... more",
  "Excited to announce I'm starting a new position as Senior Engineer! Thanks to everyone who supported me. 🚀",
  "Just finished reading 'Clean Code' by Robert C. Martin. Here are my top 3 takeaways...\n1. Meaningful names matter.\n2. Functions should do one thing.\n3. Comments are often a failure to express yourself in code.\n#programming #cleancode",
  "Is AI going to replace developers? My thoughts:\nNo, but developers who use AI will replace those who don't. Embrace the change! 💡",
  "The hardest bug I've ever fixed took me 3 days. It turned out to be a missing comma in a JSON configuration file. 😭\nHas this ever happened to you?",
  "I'm hiring! We are looking for talented React developers to join our growing team. Remote friendly, great benefits. DM me for details. 🤝",
  "Reflecting on my career journey: 5 years ago I was writing my first \"Hello World\" in Python. Today, I'm architecting scalable microservices. Never stop learning! 📈",
  "What's your favorite CSS framework in 2024? I'm torn between Tailwind CSS and traditional CSS-in-JS solutions. Let me know in the comments! 👇",
  "Day 1 of 100 Days of Code: Built a simple calculator in React. It's not much, but it's honest work. 💻 #100DaysOfCode",
  "Mental health in tech is so important. Remember to take breaks, go for a walk, and step away from the screen. Burnout is real. Take care of yourselves! ❤️"
];

const commentsPool = [
  "Congratulations! Well deserved.",
  "Great insights, thanks for sharing!",
  "Totally agree with you on this.",
  "This is exactly what I needed to hear today.",
  "Can you share the link to the resource?",
  "Interesting perspective, I hadn't thought of it that way.",
  "So true! Happened to me last week.",
  "Looking forward to seeing what you do next.",
  "Love this!",
  "Thanks for the tip!"
];

const feedPosts = Array.from({ length: 20 }).map((_, i) => {
  const numComments = Math.floor(Math.random() * 4) + 1;
  const postComments = Array.from({ length: numComments }).map((_, j) => ({
    id: j + 1,
    author: names[(i + j + 5) % names.length],
    avatar: `https://i.pravatar.cc/150?img=${(i + j + 15) % 70 + 1}`,
    text: commentsPool[(i + j) % commentsPool.length],
    headline: headlines[(i + j) % headlines.length],
    time: `${j + 1}h`
  }));

  return {
    id: i + 1,
    isSuggested: i % 4 === 0,
    author: {
      name: names[i % names.length],
      connectionDegree: ["1st", "2nd", "3rd+"][i % 3],
      headline: headlines[i % headlines.length],
      avatar: `https://i.pravatar.cc/150?img=${(i % 70) + 1}`
    },
    time: `${(i % 24) + 1}d`,
    content: contents[i % contents.length] + (i >= 10 ? `\n\nPart ${i-9} of my random thoughts series.` : ""),
    image: i % 2 === 0 ? `https://picsum.photos/seed/${i + 100}/800/450` : null,
    likes: Math.floor(Math.random() * 800) + 10,
    comments: postComments,
    shares: Math.floor(Math.random() * 50),
    isLikedByCurrentUser: false
  };
});

const fileContent = `export const currentUser = {
  name: "Sourabh Soni",
  headline: "Web Development | Working hard is one thing, but doing it with a ...",
  location: "Sagar, Madhya Pradesh",
  profileViewers: 13,
  avatar: "https://i.pravatar.cc/150?img=11", 
  coverImage: "https://images.unsplash.com/photo-1614850523459-c2f4c699c52e?auto=format&fit=crop&q=80&w=600&h=200", 
};

export const newsData = [
  { id: 1, title: "The sports conversations to join this week", time: "7h ago", readers: 284 },
  { id: 2, title: "India, Japan deepen strategic partnership", time: "7h ago", readers: 200 },
  { id: 3, title: "Sports retailers score big with VC funding", time: "4h ago", readers: 162 },
  { id: 4, title: "IT gets comfortable with debt to fund ...", time: "8h ago", readers: 143 },
  { id: 5, title: "India's private space race gathers pace", time: "3h ago", readers: null }
];

export const puzzlesData = [
  { id: 1, name: "Wend #25", desc: "Weave through words", color1: "#eab308", color2: "#22c55e", l1: "W", l2: "E" },
  { id: 2, name: "Patches #108", desc: "Piece it together", color1: "#3b82f6", color2: "#ef4444", l1: "", l2: "" },
  { id: 3, name: "Zip #473", desc: "2 connections played", color1: "#f97316", color2: "#f97316", l1: "", l2: "" },
  { id: 4, name: "Mini Sudoku #326", desc: "The classic game, made mini", color1: "#bbf7d0", color2: "#bbf7d0", l1: "1", l2: "2" }
];

export const dummyUsers = [
  { id: 1, name: "Alice Johnson", avatar: "https://i.pravatar.cc/150?img=4" },
  { id: 2, name: "Bob Smith", avatar: "https://i.pravatar.cc/150?img=12" },
  { id: 3, name: "Charlie Brown", avatar: "https://i.pravatar.cc/150?img=33" },
  { id: 4, name: "Diana Prince", avatar: "https://i.pravatar.cc/150?img=47" },
  { id: 5, name: "Evan Wright", avatar: "https://i.pravatar.cc/150?img=59" }
];

export const feedPosts = ${JSON.stringify(feedPosts, null, 2)};
`;

fs.writeFileSync('a:/CODING/React/Linkdin/src/data/mockData.js', fileContent);
console.log('Successfully generated mockData.js with 20 posts.');
