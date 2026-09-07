import { ExternalLink, Github, Sparkles, ArrowUpRight } from "lucide-react";

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
        <section id="projects" className="relative py-32 px-4 overflow-hidden bg-gradient-to-b from-transparent via-black/40 to-transparent">
            {/* Ambient Background Glows */}
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
                <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-primary/10 rounded-full blur-[120px]" />
                <div className="absolute bottom-1/4 right-10 w-[400px] h-[400px] bg-violet-600/10 rounded-full blur-[100px]" />
            </div>

            <div className="container mx-auto max-w-7xl relative z-10">
                {/* Header */}
                <div className="text-center mb-20 space-y-4">


                    <h2 className="text-3xl md:text-5xl font-bold tracking-tight">
                        <span className="text-white">Featured </span>
                        <span className="text-primary drop-shadow-[0_0_30px_rgba(168,85,247,0.4)]">
                            Projects
                        </span>
                    </h2>

                    <p className="max-w-2xl mx-auto text-base md:text-lg text-white/60 font-light">
                        Engineering production-ready applications with rigorous code architecture, high scalability, and refined visual aesthetics.
                    </p>
                </div>

                {/* Projects Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 ">
                    {projects.map((project, index) => (
                        <div key={index} className="group relative h-full">
                            {/* Premium Sleek Border Glow */}
                            <div className="absolute -inset-0.5 rounded-2xl bg-gradient-to-b from-primary/50 via-transparent to-primary/20 opacity-0 group-hover:opacity-100 transition-all duration-500 blur-sm" />

                            {/* Card Body */}
                            <div className="relative h-full rounded-2xl border border-white/10 bg-[#0c0c14]/80 overflow-hidden backdrop-blur-xl transition-all duration-500 group-hover:-translate-y-1.5 group-hover:border-primary/50 flex flex-col shadow-xl group-hover:shadow-[0_20px_40px_rgba(168,85,247,0.15)]">

                                {/* Image Preview Container */}
                                <div className="relative h-56 overflow-hidden bg-slate-950 border-b border-white/10">
                                    {/* Status Badge */}
                                    <div className="absolute top-3 right-3 z-20">
                                        <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-black/60 text-white backdrop-blur-md border border-white/15 shadow-md">
                                            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                                            {project.status}
                                        </span>
                                    </div>

                                    {/* Project Image */}
                                    <img
                                        src={project.image}
                                        alt={project.title}
                                        className="w-full h-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-105"
                                    />

                                    {/* Subtle Gradient Veil */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-[#0c0c14] via-transparent to-transparent opacity-80" />
                                </div>

                                {/* Content Details */}
                                <div className="p-6 flex flex-col flex-grow space-y-4">
                                    <div className="space-y-2">
                                        <span className="inline-block px-2.5 py-0.5 rounded-md text-[11px] font-medium uppercase tracking-wider bg-primary/10 border border-primary/20 text-primary">
                                            {project.category}
                                        </span>
                                        <h3 className="text-xl font-bold text-white group-hover:text-primary transition-colors duration-300">
                                            {project.title}
                                        </h3>
                                    </div>

                                    <p className="text-sm text-white/60 leading-relaxed flex-grow">
                                        {project.description}
                                    </p>

                                    {/* Tags */}
                                    <div className="flex flex-wrap gap-1.5 pt-2">
                                        {project.tags.map((tag) => (
                                            <span
                                                key={tag}
                                                className="px-2.5 py-1 rounded-md text-xs font-medium bg-white/[0.04] border border-white/10 text-white/70"
                                            >
                                                {tag}
                                            </span>
                                        ))}
                                    </div>

                                    {/* Action Links */}
                                    <div className="flex gap-3 pt-4 border-t border-white/10 mt-auto">
                                        <a
                                            href={project.demoUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-primary text-white font-medium text-xs tracking-wide transition-all duration-300 hover:bg-primary/90 hover:shadow-[0_0_20px_rgba(168,85,247,0.4)] active:scale-[0.98]"
                                        >
                                            <ExternalLink size={14} />
                                            Live Demo
                                        </a>
                                        <a
                                            href={project.githubUrl}
                                            target="_blank"
                                            rel="noreferrer"
                                            className="flex-1 flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg border border-white/15 bg-white/[0.02] text-white/90 font-medium text-xs tracking-wide hover:bg-white/[0.08] hover:border-primary/40 transition-all duration-300 active:scale-[0.98]"
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
                <div className="flex justify-center mt-5">
                    <a
                        href="https://github.com/nahinhoque"
                        target="_blank"
                        rel="noreferrer"
                        className="group relative inline-flex items-center gap-2.5 px-8 py-3.5 rounded-full border border-primary/40 bg-primary/10 text-white font-semibold text-sm backdrop-blur-md transition-all duration-300 hover:bg-primary hover:border-primary hover:shadow-[0_0_30px_rgba(168,85,247,0.5)] active:scale-95"
                    >
                        <span>Explore All Projects</span>
                        <ArrowUpRight size={16} className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform duration-300" />
                    </a>
                </div>
            </div>
        </section>
    );
};