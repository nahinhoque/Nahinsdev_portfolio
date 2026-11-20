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
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-24 lg:py-28">
            <div className="container max-w-6xl mx-auto z-10">
                <div className="space-y-7">
                    <div className="text-center pt-5">
                        <h1 className="text-4xl md:text-6xl tracking-[-0.06em] font-black leading-[0.95]">
                            <span className="opacity-0 animate-fade-in text-white">Hi, I'm Abu</span>
                            <span className="text-primary opacity-0 animate-fade-in-delay-1"> Nahin</span>
                            <span className="text-gradient ml-2 opacity-0 animate-fade-in-delay-2"> Ibne Hoque</span>
                        </h1>

                        <p className="mt-2 text-lg md:text-2xl text-white/80 font-medium mx-auto max-w-2xl opacity-0 animate-fade-in-delay-3">
                            Full-Stack Developer building secure, scalable web applications with clean code and reliable backend systems.
                        </p>
                    </div>

                    <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-5 items-stretch pt-2">
                        <div className="rounded-[1.5rem] border border-white/10 bg-[#10182a]/70 backdrop-blur-md p-5 md:p-6 shadow-[0_18px_50px_rgba(0,0,0,0.22)] text-left">
                            <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-violet-400/30 bg-violet-500/10 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.2em] text-violet-200">
                                <Sparkles className="h-3.5 w-3.5" />
                                About Me
                            </div>

                            <h2 className="text-xl md:text-2xl font-bold leading-tight mb-4">
                                B.Sc. in Computer Science & Engineering
                                <span className="block text-primary text-base md:text-lg">C • JavaScript • Python • Exploring GenAI.</span>
                            </h2>

                            <ul className="space-y-1.5 mb-4 text-xs md:text-sm leading-relaxed text-white/75">
                                <li className="flex items-start gap-2.5">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span><strong>Data Integrity:</strong> My bank transaction system uses idempotent transfers, rollbacks, and audit logs to prevent lost or duplicate payments.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span><strong>Backend-Focused MERN Developer:</strong> I build secure authentication (JWT, Clerk), clean REST APIs, and readable server code.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span><strong>Real-Time & Payments:</strong> I’ve shipped live messaging with Socket.io and Stripe webhook payments.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span><strong>End-to-End Delivery:</strong> I take projects from idea to deployment on Vercel and Render, and test my APIs with Postman.</span>
                                </li>
                                <li className="flex items-start gap-2.5">
                                    <span className="text-primary mt-0.5">•</span>
                                    <span><strong>Ready to Contribute:</strong> Seeking a software engineering role or internship where I can learn and add value from day one.</span>
                                </li>
                            </ul>

                            {/* Redesigned action row: primary actions grouped together, a soft divider,
                                then social icons as a visually separate cluster — instead of everything
                                sitting at the same weight in one flat row. */}
                            <div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center sm:gap-3">
                                <div className="flex flex-wrap items-center gap-3">
                                    {/* Primary CTA: gradient fill + a soft light-sweep on hover, a common
                                        "premium SaaS" micro-interaction that reads as more considered
                                        than a flat single-color button. */}
                                    <a
                                        href="/"
                                        onClick={(e) => {
                                            e.preventDefault();
                                            document.getElementById("projects")?.scrollIntoView({ behavior: "smooth", block: "start" });
                                        }}
                                        className="group relative inline-flex items-center gap-2 overflow-hidden rounded-full bg-gradient-to-r from-violet-600 to-fuchsia-600 px-5 py-2.5 text-sm font-semibold text-white shadow-lg shadow-violet-600/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-xl hover:shadow-fuchsia-600/40"
                                    >
                                        <span className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/25 to-transparent transition-transform duration-700 group-hover:translate-x-full" />
                                        <span className="relative">View My Work</span>
                                        <ArrowRight className="relative h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                                    </a>

                                    <a
                                        href="/Resume/NahinsResUp.pdf"
                                        download
                                        className="group inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-4 py-2.5 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-400/50 hover:bg-white/[0.08] hover:text-white"
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
                                            className={`group/icon relative inline-flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/[0.04] text-white/70 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:scale-105 ${hover}`}
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

                        <div className="relative group mx-auto w-full max-w-[430px] lg:max-w-none">
                            <div className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-violet-600/35 via-fuchsia-600/20 to-rose-600/10 blur-2xl opacity-70 group-hover:opacity-90 transition-opacity duration-500" />

                            <div className="relative h-full overflow-hidden rounded-[1.5rem] border border-violet-400/50 bg-gradient-to-br from-white/10 to-white/5 p-1 shadow-[0_18px_50px_rgba(0,0,0,0.28)] backdrop-blur-xl">
                                <div className="absolute inset-1 rounded-[1.35rem] bg-gradient-to-br from-violet-500/0 via-transparent to-fuchsia-500/10 pointer-events-none z-10" />

                                <div className="relative h-[380px] lg:h-full min-h-[380px] overflow-hidden rounded-[1.35rem] bg-gradient-to-br from-violet-900 to-black">
                                    <img
                                        src="/projects/profile0.jpg"
                                        alt="Profile"
                                        className="h-full w-full object-cover object-center transition-all duration-700 group-hover:scale-105 group-hover:brightness-110"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent opacity-60" />
                                </div>
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