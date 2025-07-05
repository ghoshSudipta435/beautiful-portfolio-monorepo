import React, { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
  // --- Frontend ---
  { name: "HTML/CSS", level: 85, category: "Frontend" },
  { name: "JavaScript", level: 70, category: "Frontend" },
  { name: "React.js", level: 80, category: "Frontend" },
  { name: "Tailwind CSS", level: 75, category: "Frontend" },
  { name: "Bootstrap", level: 70, category: "Frontend" },

  // --- Backend ---
  { name: "Node.js", level: 75, category: "Backend" },
  { name: "Express.js", level: 70, category: "Backend" },
  { name: "REST APIs", level: 80, category: "Backend" },

  // --- Database ---
  { name: "MongoDB", level: 75, category: "Database" },
  { name: "MySQL", level: 60, category: "Database" },

  // --- Dev Tools ---
  { name: "Git & GitHub", level: 80, category: "Tools" },
  { name: "VS Code", level: 85, category: "Tools" },
  { name: "ThunderClient", level: 70, category: "Tools" },

  // --- Machine Learning ---
  { name: "Python", level: 80, category: "ML" },
  { name: "Scikit-learn", level: 75, category: "ML" },
  { name: "Pandas & NumPy", level: 80, category: "ML" },
  { name: "Matplotlib/Seaborn", level: 80, category: "ML" },
  { name: "ML Algorithms", level: 70, category: "ML" },
];

const categories = ["all", "Frontend", "Backend", "Database", "Tools", "ML"];

const SkillsSection = () => {
  const [activeCategory, setActiveCategory] = useState("all");

  const fileredSkills = skills.filter((skill) => activeCategory==="all" || skill.category === activeCategory );
  return (
    <section id="skills" className="py-24 px-4 relative bg-secondary/30">
      <div className="container mx-auto max-w-5xl">
        <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center">
          My
          <span className="text-primary">Skills</span>
        </h2>

        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category, key) => (
            <button
              key={key}
              onClick={() => setActiveCategory(category)}
              className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize cursor-pointer",

                activeCategory===category ? "bg-primary text-primary-foreground": "bg-secondary/70 text-foreground hover:bd-secondary"
              )}
            >
              {category}
            </button>
          ))}
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 ">
          {fileredSkills.map((skill, key) => (
            <div
              key={key}
              className="bg-white dark:bg-gray-800 text-black dark:text-white p-6 rounded-lg shadow-md transition-all duration-300"
            >
              <div className="text-left mb-3">
                <h3 className="text-lg font-semibold">{skill.name}</h3>
              </div>
              <div className="w-full bg-secondary/50 h-2 rounded-full overflow-hidden">
                <div
                  className="bg-primary h-2 rounded-full origin-left animate-[grow_1.5s_ease-out"
                  style={{ width: skill.level + "%" }}
                />
              </div>
              <div className="text-right mt-1">
                <span className="text-sm text-muted-foreground">
                  {skill.level}%
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;
