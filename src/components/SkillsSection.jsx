import { useState } from "react";
import { cn } from "../lib/utils";

const skills = [
    // Frontend
    { name: "HTML/CSS", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg" },
    { name: "Tailwind CSS", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg" },
    { name: "JavaScript", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg" },
    { name: "TypeScript", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg" },
    { name: "React", category: "frontend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg" },

    // Backend
    { name: "Node.js", category: "backend", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg" },
    { name: "Express", category: "backend", logo: "https://cdn.simpleicons.org/express/ffffff" },
    { name: "Socket.io", category: "backend", logo: "https://cdn.simpleicons.org/socket.io/ffdd00" },

    // Database
    { name: "MongoDB", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mongodb/mongodb-original.svg" },
    { name: "MySQL", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg" },
    { name: "Redis", category: "database", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg" },

    // Tools
    { name: "Git/Github", category: "tools", logo: "https://cdn.simpleicons.org/github/ffffff" },
    { name: "Postman", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postman/postman-original.svg" },
    { name: "Swagger", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/swagger/swagger-original.svg" },
    { name: "SSLCommerz", category: "tools", logo: "https://cdn.simpleicons.org/shield/ffffff" },
    { name: "Stripe", category: "tools", logo: "https://cdn.simpleicons.org/stripe/6666ee" },
    { name: "VS Code", category: "tools", logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vscode/vscode-original.svg" },
    { name: "Google Colab", category: "tools", logo: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Google_Colaboratory_SVG_Logo.svg" },
    { name: "Vercel", category: "tools", logo: "https://cdn.simpleicons.org/vercel/ffffff" },
    { name: "Render", category: "tools", logo: "https://cdn.simpleicons.org/render/46e3b7" },
];

const categories = ["all", "frontend", "backend", "database", "tools"];

export const SkillsSection = () => {
    const [activeCategory, setActiveCategory] = useState("all");

    const filteredSkills = skills.filter((skill) => activeCategory === "all" || skill.category === activeCategory);

    return (
        <section id="skills" className="py-24 px-2 relative bg-secondary/30">
            <div className="container mx-auto max-w-5xl">
                <h2 className="text-3xl md:text-5xl font-bold mb-12 text-center">
                    My <span className="text-primary">Skills</span>
                </h2>

                <div className="flex flex-wrap justify-center gap-4 mb-8">
                    {categories.map((category) => (
                        <button
                            key={category}
                            onClick={() => setActiveCategory(category)}
                            className={cn("px-5 py-2 rounded-full transition-colors duration-300 capitalize",
                                activeCategory === category ? "bg-primary text-primary-foreground" : "bg-secondary/70 text-foreground hover:bg-secondary"
                            )}
                        >
                            {category}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
                    {filteredSkills.map((skill, index) => (
                        <div
                            key={index}
                            className="group relative flex flex-col items-center justify-center px-3 py-4 rounded-lg bg-gradient-to-br from-slate-900/40 to-slate-800/40 backdrop-blur-sm border border-slate-700/30 shadow-lg hover:shadow-xl hover:shadow-primary/20 transition-all duration-300 hover:border-primary/50 hover:from-slate-900/60 hover:to-slate-800/60"
                        >
                            {/* Logo Container */}
                            <div className="mb-2 h-8 w-8 flex items-center justify-center rounded-md bg-slate-800/50 group-hover:bg-primary/10 transition-all duration-300 p-0.5">
                                <img
                                    src={skill.logo}
                                    alt={skill.name}
                                    className="h-full w-full object-contain filter brightness-150 contrast-125 group-hover:drop-shadow-lg transition-all duration-300"
                                    onError={(e) => {
                                        e.target.style.display = "none";
                                    }}
                                />
                            </div>

                            {/* Skill Name */}
                            <h3 className="font-semibold text-xs text-center text-foreground group-hover:text-primary transition-colors duration-300 line-clamp-2">
                                {skill.name}
                            </h3>

                            {/* Hover Glow Effect */}
                            <div className="absolute inset-0 rounded-lg bg-primary/0 group-hover:bg-primary/5 transition-all duration-300 pointer-events-none"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};