import { ExternalLink, Github, ArrowUpRight } from "lucide-react";

const projects = [
    {
        id: 1,
        title: "Learning Management System",
        description: "Comprehensive LMS platform with Clerk authentication, Quill editor, Stripe payments, and full API management for seamless course enrollments and transactions.",
        image: "/projects/project1.png",
        tags: ["React", "Express", "MongoDB", "Stripe"],
        category: "Full-Stack",
        status: "Featured",
        demoUrl: "https://lms-frontend-kohl-three.vercel.app/",
        githubUrl: "https://github.com/nahinhoque/LMS"
    },
    {
        id: 2,
        title: "Real-Time Chat Application",
        description: "Scalable chat platform featuring instant real-time communication with Socket.io, robust authentication, persistent data storage, and smooth user experience.",
        image: "/projects/project2.png",
        tags: ["React", "Socket.io", "Express", "MongoDB"],
        category: "Full-Stack",
        status: "Featured",
        demoUrl: "https://chat-app-mu-smoky.vercel.app/",
        githubUrl: "https://github.com/nahinhoque/chat-app"
    },
    {
        id: 3,
        title: "Task Manager Application",
        description: "Intuitive task management tool with clean, modern interface designed for maximum productivity and efficient daily workflow optimization.",
        image: "/projects/project3.png",
        tags: ["React", "TailwindCSS", "JavaScript"],
        category: "Frontend",
        status: "Complete",
        demoUrl: "https://webdev-project-react-4.vercel.app/",
        githubUrl: "https://github.com/nahinhoque/Webdev-Project-React--4"
    },
];

export const ProjectsSection = () => {
    return (
        <section id="projects" className="relative py-20 px-4 overflow-hidden bg-gradient-to-b from-transparent via-black/20 to-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-6xl relative z-10">
                {/* Header */}
                <div className="text-center mb-10 space-y-3">


                    <h2 className="text-[clamp(2rem,3vw,3rem)] font-black leading-none">
                        <span className="text-white pr-2">Featured </span>
                        <span className="text-primary drop-shadow-[0_0_18px_rgba(247,199,103,0.2)]">
                            Projects
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-sm md:text-base text-white/60">
                        Engineering production-ready applications with rigorous code architecture, high scalability, and refined visual aesthetics.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative h-full">
                            <div className="absolute -inset-px rounded-[1.1rem] bg-gradient-to-b from-primary/35 via-transparent to-primary/10 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

                            {/* Card Body */}
                            <div className="relative h-full rounded-[1.1rem] border border-white/[0.08] bg-[#0c141f]/90 overflow-hidden backdrop-blur-xl transition-all duration-300 group-hover:-translate-y-1 group-hover:border-primary/35 flex flex-col shadow-[0_12px_28px_rgba(2,8,18,0.32)]">

                                {/* Image Preview Container */}
                                <div className="relative h-44 overflow-hidden bg-slate-950 border-b border-white/[0.07]">
                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 z-20">
                                        <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-semibold bg-black/65 text-white/90 backdrop-blur-md border border-white/15">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Project Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-500 ease-out group-hover:scale-[1.035]"
                                    />

                                    {/* Subtle Gradient Veil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content Details */}
                                <div className="p-5 flex flex-col flex-grow text-left">
                                    <div className="space-y-2">
                                        <span className="inline-block px-2 py-0.5 rounded-md text-[9px] font-semibold uppercase tracking-[0.12em] bg-primary/[0.08] border border-primary/20 text-primary">
                                            {project.category}
                                        </span>
                                        <h3 className="text-lg font-bold leading-tight text-white group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="mt-3 text-[13px] text-white/60 leading-[1.65] flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 mt-4 border-t border-white/[0.07] pt-3">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2 py-1 rounded-md text-[10px] font-medium bg-white/[0.035] border border-white/[0.08] text-white/65"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex gap-2 pt-4 mt-auto">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg bg-primary text-[#171109] font-semibold text-xs transition-all duration-300 hover:bg-primary/90 active:scale-[0.98]"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-1.5 px-3 py-2.5 rounded-lg border border-white/[0.12] bg-white/[0.025] text-white/80 font-medium text-xs hover:bg-white/[0.07] hover:border-primary/35 transition-all duration-300 active:scale-[0.98]"
                                        >
                                            <Github size={14} />
                                            Source Code
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* View More CTA */}
                <div className="flex justify-center mt-8">
                    <a
                        href="https://github.com/nahinhoque"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center gap-2 px-6 py-3 rounded-full border border-primary/35 bg-primary/[0.08] text-white/90 font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:bg-primary hover:text-[#171109] hover:border-primary active:scale-95"
                    >
                        <span>Explore All Projects</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};