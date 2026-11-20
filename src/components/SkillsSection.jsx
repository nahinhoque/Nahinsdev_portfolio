import {
    Code2,
    Database,
    Globe,
    LayoutDashboard,
    ServerCog,
    Smartphone,
} from "lucide-react";

const services = [
    {
        title: "Frontend Development",
        description:
            "Crafting interactive, fast, and responsive user interfaces using React.js, Tailwind CSS, and Framer Motion.",
        icon: LayoutDashboard,
        tools: ["React", "Tailwind CSS", "JavaScript"],
    },
    {
        title: "Backend Development",
        description:
            "Building scalable server-side applications, microservices, and secure authentication systems with Node.js & Express.",
        icon: ServerCog,
        tools: ["Node.js", "Express", "JWT"],
    },
    {
        title: "Database Design",
        description:
            "Designing efficient NoSQL database schemas, indexing strategies, and data modeling using MongoDB & Mongoose.",
        icon: Database,
        tools: ["MongoDB", "Mongoose", "Schema Design"],
    },
    {
        title: "MERN Stack Web Apps",
        description:
            "End-to-end full stack development connecting seamless React frontends to Node/Express backends and MongoDB.",
        icon: Globe,
        tools: ["MERN", "REST APIs", "Deployment"],
    },
    {
        title: "RESTful API Integration",
        description:
            "Developing clean REST APIs, third-party service integrations, payment gateways, and real-time WebSockets.",
        icon: Code2,
        tools: ["REST", "Socket.io", "Stripe"],
    },
    {
        title: "Responsive Web Design",
        description:
            "Creating mobile-first, pixel-perfect designs optimized for speed, accessibility, and high conversion rates.",
        icon: Smartphone,
        tools: ["Mobile-First", "Accessibility", "UI Design"],
    },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="relative px-4 py-20 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-5xl">
                <div className="mb-8 flex items-center justify-center">
                    <h2 className="text-[clamp(2rem,3vw,3rem)] font-black leading-none">
                        <span className="text-white pr-2">My </span>
                        <span className="text-primary drop-shadow-[0_0_18px_rgba(247,199,103,0.2)]">Skills</span>
                    </h2>
                </div>

                <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
                    {services.map(({ title, description, icon: Icon, tools }) => (
                        <div
                            key={title}
                            className="group relative overflow-hidden rounded-2xl border border-white/[0.08] bg-[linear-gradient(145deg,rgba(20,30,47,0.96),rgba(11,18,29,0.94))] p-5 shadow-[0_10px_24px_rgba(2,8,18,0.32)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/35"
                        >
                            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

                            <div className="relative z-10 flex flex-col">
                                <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl border border-primary/45 bg-primary/[0.07] text-primary transition-all duration-300 group-hover:border-primary/70 group-hover:bg-primary/[0.12]">
                                    <Icon className="h-5 w-5" strokeWidth={1.8} />
                                </div>

                                <h3 className="mb-2.5 text-lg font-bold leading-tight tracking-[-0.02em] text-white">
                                    {title}
                                </h3>

                                <p className="min-h-[66px] text-sm leading-[1.65] text-slate-300/80">
                                    {description}
                                </p>

                                <div className="mt-4 flex flex-wrap gap-1.5 border-t border-white/[0.07] pt-3">
                                    {tools.map((tool) => (
                                        <span
                                            key={tool}
                                            className="rounded-md border border-white/[0.08] bg-white/[0.035] px-2 py-1 text-[10px] font-medium text-slate-300"
                                        >
                                            {tool}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};