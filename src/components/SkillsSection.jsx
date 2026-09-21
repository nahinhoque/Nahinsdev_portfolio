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
    },
    {
        title: "Backend Development",
        description:
            "Building scalable server-side applications, microservices, and secure authentication systems with Node.js & Express.",
        icon: ServerCog,
    },
    {
        title: "Database Design",
        description:
            "Designing efficient NoSQL database schemas, indexing strategies, and data modeling using MongoDB & Mongoose.",
        icon: Database,
    },
    {
        title: "MERN Stack Web Apps",
        description:
            "End-to-end full stack development connecting seamless React frontends to Node/Express backends and MongoDB.",
        icon: Globe,
    },
    {
        title: "RESTful API Integration",
        description:
            "Developing clean REST APIs, third-party service integrations, payment gateways, and real-time WebSockets.",
        icon: Code2,
    },
    {
        title: "Responsive Web Design",
        description:
            "Creating mobile-first, pixel-perfect designs optimized for speed, accessibility, and high conversion rates.",
        icon: Smartphone,
    },
];

export const SkillsSection = () => {
    return (
        <section id="skills" className="relative px-4 py-24 sm:px-6 lg:px-8">
            <div className="mx-auto max-w-6xl">
                <div className="mb-12 flex items-center justify-center gap-4">
                    <span className="relative inline-flex h-4 w-4 items-center justify-center">
                    </span>
                    <h2 className="text-[clamp(2.1rem,3.2vw,3.6rem)] font-black leading-none">
                        <span className="text-white pr-2">My </span>
                        <span className="text-primary drop-shadow-[0_0_18px_rgba(247,199,103,0.2)]">Skills</span>
                    </h2>
                </div>

                <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
                    {services.map(({ title, description, icon: Icon }) => (
                        <div
                            key={title}
                            className="group relative overflow-hidden rounded-[1.4rem] border border-white/8 bg-[linear-gradient(180deg,rgba(18,29,43,0.96),rgba(12,20,31,0.92))] p-6 shadow-[0_12px_28px_rgba(2,8,18,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-primary/40 md:p-8"
                        >
                            <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(247,199,103,0.06),transparent_45%,rgba(59,130,246,0.08))]" />

                            <div className="relative z-10">
                                <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-xl border border-primary/70 bg-[linear-gradient(180deg,rgba(247,199,103,0.14),rgba(247,199,103,0.04))] text-primary shadow-[inset_0_2px_0_rgba(255,255,255,0.08),0_8px_18px_rgba(0,0,0,0.18)]">
                                    <Icon className="h-8 w-8" strokeWidth={1.8} />
                                </div>

                                <h3 className="mb-4 text-[clamp(1.5rem,1.8vw,2.2rem)] font-black leading-[1.12] tracking-[-0.06em] text-white">
                                    {title}
                                </h3>

                                <p className="text-[1.02rem] leading-[1.7] text-slate-300 md:text-[1.15rem]">
                                    {description}
                                </p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};