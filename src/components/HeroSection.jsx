import { ArrowRight, ChevronDown, Download, Facebook, Github, Linkedin, Sparkles } from "lucide-react";

const socialLinks = [
    {
        href: "https://github.com/nahinhoque",
        label: "GitHub",
        icon: Github,
        hover: "hover:text-white hover:border-white/50 hover:bg-white/10",
    },
    {
        href: "https://www.linkedin.com/in/nahin-hoque",
        label: "LinkedIn",
        icon: Linkedin,
        hover: "hover:text-sky-400 hover:border-sky-400/50 hover:bg-sky-400/10",
    },
    {
        href: "https://www.facebook.com/share/1L3N1EXTRz/",
        label: "Facebook",
        icon: Facebook,
        hover: "hover:text-blue-400 hover:border-blue-400/50 hover:bg-blue-400/10",
    },
];

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32">
            <div className="container max-w-7xl mx-auto z-10">
                <div className="space-y-12">
                    <div className="text-center pt-12">
                        <h1 className="text-4xl md:text-6xl tracking-[-0.06em] font-black leading-[0.95]">
                            <span className="opacity-0 animate-fade-in text-white">Hi, I'm Abu</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nahin</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ibne Hoque</span>
                        </h1>

                        <p className="mt-2 text-lg md:text-2xl text-white/80 font-medium mx-auto max-w-2xl opacity-0 animate-fade-in-delay-3">
                            Full-Stack Web Developer building reliable digital products with clean code and user-focused experiences.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1.2fr_0.8fr] gap-8 items-center pt-8">
                        <div className="rounded-[2rem] border border-white/10 bg-white/5 backdrop-blur-md p-6 md:p-8 shadow-[0_0_40px_rgba(168,85,247,0.12)] text-left">
                            <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-xs font-semibold uppercase tracking-[0.2em] text-violet-200">
                                <Sparkles className="h-3.5 w-3.5" />
                                About Me
                            </div>

                            <h2 className="text-2xl md:text-3xl font-bold leading-tight mb-6">
                                B.Sc. in Computer Science & Engineering
                                <span className="block text-primary text-lg md:text-xl">C • JavaScript • Python • Exploring GenAI.</span>
                            </h2>

                            <ul className="space-y-3 mb-6 text-sm md:text-base text-white/80">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Full-Stack Architecture:</strong> Engineering scalable MERN web solutions with clean code and secure workflows.</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Production-Ready Execution:</strong> Implementing real-time event handling (Socket.io) and authentication (JWT, Clerk).</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Solution-Driven:</strong> Building user-centric web apps shipped seamlessly to cloud environments.</span>
                                </li>
                            </ul>

                            {/* Redesigned action row: primary actions grouped together, a soft divider,
                                then social icons as a visually separate cluster — instead of everything
                                sitting at the same weight in one flat row. */}
                            <div className="mt-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-4">
                                <div className="flex flex-wrap items-center gap-3">
                                    {/* Primary CTA: gradient fill + a soft light-sweep on hover, a common
                                        "premium SaaS" micro-interaction that reads as more considered
                                        than a flat single-color button. */}
                                    <a
                                        href="#projects"
                                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-600/40"
                                    >
                                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                        <span className="relative">View My Work</span>
                                        <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <a
                                        href="/Resume/NahinsResUp.pdf"
                                        download
                                        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-5 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.08] hover:text-white"
                                    >
                                        <Download className="h-4 w-4 text-violet-300 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                        <span>Resume</span>
                                    </a>
                                </div>

                                {/* Divider — only shows on wider screens, visually separates
                                    "actions" from "social", which is what was missing before. */}
                                <div className="hidden h-8 w-px bg-white/10 sm:block" />

                                <div className="flex items-center gap-2">
                                    {socialLinks.map(({ href, label, icon: Icon, hover }) => (
                                        <a
                                            key={label}
                                            href={href}
                                            target="_blank"
                                            rel="noreferrer"
                                            aria-label={label}
                                            className={`group/icon relative inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${hover}`}
                                        >
                                            <Icon className="h-4 w-4 transition-transform duration-300 group-hover/icon:scale-110" />
                                            <span className="pointer-events-none absolute -top-9 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-md border border-white/10 bg-black/85 px-2 py-1 text-[10px] font-medium text-white opacity-0 backdrop-blur-md transition-all duration-200 group-hover/icon:-translate-y-1 group-hover/icon:opacity-100">
                                                {label}
                                            </span>
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </div>

                        <div className="relative group">
                            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-600/30 to-rose-600/20 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-transparent blur-2xl" />

                            <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/50 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl shadow-2xl">
                                <div className="absolute inset-1 rounded-[1.9rem] bg-gradient-to-br from-violet-500/0 via-transparent to-fuchsia-500/10 pointer-events-none z-10" />

                                <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-violet-900 to-black">
                                    <img
                                        src="/projects/profile0.jpg"
                                        alt="Profile"
                                        className="h-[420px] w-full rounded-[1.8rem] object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-125"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.8rem]" />
                                </div>
                            </div>

                            <div className="absolute -bottom-3 left-4 right-4 sm:left-6 sm:right-auto rounded-2xl border border-white/20 bg-gradient-to-br from-black/80 to-black/60 px-4 py-3 backdrop-blur-lg shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/30">
                                <p className="text-xs uppercase tracking-widest text-violet-300 font-bold">Experience</p>
                                <p className="mt-1 text-lg font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">17+ Months</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center">
                <span className="text-sm text-muted-foreground mb-1">Scroll</span>
                <div className="relative flex flex-col items-center h-5">
                    <ChevronDown className="h-4 w-4 text-primary animate-bounce [animation-duration:1.4s]" />
                    <ChevronDown className="h-4 w-4 text-primary/50 -mt-2 animate-bounce [animation-duration:1.4s] [animation-delay:150ms]" />
                </div>
            </div>
        </section>
    );
};