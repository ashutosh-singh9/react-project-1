import React from "react";
import Card from "./components/Card";

const App = () => {
  const candidates = [
    {
      id: "a9Xk2",
      name: "Aarav Mehta",
      role: "frontend",
      chargePerHour: "$55/hr",
      promotionalTag: "best seller",
      identityTag: "freelancer",
      image:
        "https://img.freepik.com/free-photo/indian-businessman-with-his-white-car_496169-2889.jpg?semt=ais_user_personalization&w=740&q=80",
      bio: "Creative frontend engineer building fast, accessible, pixel-perfect web apps.",
      tag1: "ui",
      tag2: "react",
      tag3: "tailwind",
      tag4: "+3",
    },
    {
      id: "pL7mQ",
      name: "Ishita Rao",
      role: "ui ux",
      chargePerHour: "$48/hr",
      promotionalTag: "newbie",
      identityTag: "vibecoder",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
      bio: "Passionate UI/UX designer focused on human-centered intuitive experiences.",
      tag1: "ux",
      tag2: "photoshop",
      tag3: "figma",
      tag4: "+2",
    },
    {
      id: "xT4vN",
      name: "Kabir Sharma",
      role: "backend db",
      chargePerHour: "$70/hr",
      promotionalTag: "backend specialist",
      identityTag: "bughunter",
      image: "https://randomuser.me/api/portraits/men/75.jpg",
      bio: "Scalable backend architect designing secure APIs and optimized databases.",
      tag1: "node",
      tag2: "express",
      tag3: "mongodb",
      tag4: "+4",
    },
    {
      id: "zK8rY",
      name: "Riya Kapoor",
      role: "frontend",
      chargePerHour: "$60/hr",
      promotionalTag: "frontend specialist",
      identityTag: "freelancer",
      image: "https://randomuser.me/api/portraits/women/68.jpg",
      bio: "Performance-driven frontend developer crafting smooth responsive interfaces.",
      tag1: "html",
      tag2: "css",
      tag3: "javascript",
      tag4: "+3",
    },
    {
      id: "mD2sW",
      name: "Dev Malhotra",
      role: "backend db",
      chargePerHour: "$75/hr",
      promotionalTag: "best seller",
      identityTag: "bughunter",
      image: "https://randomuser.me/api/portraits/men/19.jpg",
      bio: "Cloud-native backend engineer building resilient distributed systems.",
      tag1: "postgres",
      tag2: "redis",
      tag3: "aws",
      tag4: "+5",
    },
    {
      id: "qR5nH",
      name: "Sneha Iyer",
      role: "ui ux",
      chargePerHour: "$52/hr",
      promotionalTag: "rising star",
      identityTag: "vibecoder",
      image: "https://randomuser.me/api/portraits/women/21.jpg",
      bio: "Design thinker translating research insights into delightful products.",
      tag1: "ui",
      tag2: "ux",
      tag3: "illustrator",
      tag4: "+2",
    },
    {
      id: "uJ9cE",
      name: "Arjun Verma",
      role: "frontend",
      chargePerHour: "$65/hr",
      promotionalTag: "top rated",
      identityTag: "freelancer",
      image: "https://randomuser.me/api/portraits/men/81.jpg",
      bio: "Frontend expert specializing in animations and interactive dashboards.",
      tag1: "react",
      tag2: "typescript",
      tag3: "framer",
      tag4: "+4",
    },
    {
      id: "bF6xP",
      name: "Meera Nair",
      role: "backend db",
      chargePerHour: "$80/hr",
      promotionalTag: "enterprise expert",
      identityTag: "bughunter",
      image: "https://randomuser.me/api/portraits/women/55.jpg",
      bio: "Database performance tuner optimizing high-traffic production systems.",
      tag1: "mysql",
      tag2: "prisma",
      tag3: "graphql",
      tag4: "+6",
    },
    {
      id: "tY3kL",
      name: "Rohan Kulkarni",
      role: "ui ux",
      chargePerHour: "$50/hr",
      promotionalTag: "creative mind",
      identityTag: "freelancer",
      image: "https://randomuser.me/api/portraits/men/47.jpg",
      bio: "Minimalist designer creating clean, conversion-focused interfaces.",
      tag1: "figma",
      tag2: "wireframing",
      tag3: "usability",
      tag4: "+3",
    },
    {
      id: "nV8wS",
      name: "Ananya Das",
      role: "frontend",
      chargePerHour: "$58/hr",
      promotionalTag: "fast delivery",
      identityTag: "vibecoder",
      image: "https://randomuser.me/api/portraits/women/73.jpg",
      bio: "Detail-oriented developer delivering scalable and maintainable frontend architectures.",
      tag1: "vue",
      tag2: "sass",
      tag3: "vite",
      tag4: "+2",
    },
  ];

  return (
    <div>
      <div>
        <h1>Cards collection</h1>
      </div>

      <div className="parent">
        {candidates.map((elem) => (
          <Card
            id={elem.id}
            price={elem.chargePerHour}
            image={elem.image}
            name={elem.name}
            role={elem.role}
            idt={elem.identityTag}
            tag1={elem.tag1}
            tag2={elem.tag2}
            tag3={elem.tag3}
            tag4={elem.tag4}
            info={elem.bio}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
