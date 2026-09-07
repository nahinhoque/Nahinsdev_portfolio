import { ArrowDown, Download, Github, Sparkles } from "lucide-react";

export const HeroSection = () => {
    return (
        <section id="hero" className="relative min-h-screen flex flex-col items-center justify-center px-4 py-32">
            <div className="container max-w-7xl mx-auto z-10">
                <div className="space-y-12">
                    <div className="text-center pt-12">
                        <h1 className="text-4xl md:text-6xl tracking-tight font-bold leading-tight">
                            <span className="opacity-0 animate-fade-in">Hi, I'm Abu</span>
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

                            {/* Bullet points instead of paragraphs */}
                            <ul className="space-y-3 mb-6 text-sm md:text-base text-white/80">
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>9+ Projects</strong> built (2 full-stack, 1 backend) with focus on clean architecture & performance</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>User-Centered Design</strong> — building practical, scalable web solutions aligned with business needs</span>
                                </li>
                                <li className="flex items-start gap-3">
                                    <span className="text-primary mt-1">•</span>
                                    <span><strong>Collaborative Developer</strong> — passionate about learning quickly and shipping polished products</span>
                                </li>
                            </ul>

                            {/* Premium Balanced 3-Button Layout */}
                            <div className="mt-8 flex flex-wrap items-center gap-3">
                                <a
                                    href="#projects"
                                    className="group relative inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-primary/30 transition-all duration-300 hover:-translate-y-0.5 hover:shadow-primary/50"
                                >
                                    <span>View My Work</span>
                                </a>

                                <a
                                    href="/Resume/NahinIbnResumee (7).pdf"
                                    download
                                    className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-white/[0.08] hover:text-white"
                                >
                                    <Download className="h-4 w-4 text-violet-400 transition-transform duration-300 group-hover:-translate-y-0.5" />
                                    <span>Resume</span>
                                </a>

                                <a
                                    href="https://github.com/nahinhoque"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="group inline-flex items-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-sm font-medium text-white/90 backdrop-blur-md transition-all duration-300 hover:-translate-y-0.5 hover:border-violet-500/40 hover:bg-white/[0.08] hover:text-white"
                                >
                                    <Github className="h-4 w-4 text-violet-400 transition-transform duration-300 group-hover:rotate-12" />
                                    <span>GitHub</span>
                                </a>
                            </div>
                        </div>

                        <div className="relative group">
                            {/* Multi-layer glow effect */}
                            <div className="absolute -inset-6 rounded-[2.5rem] bg-gradient-to-br from-violet-600/40 via-fuchsia-600/30 to-rose-600/20 blur-3xl opacity-75 group-hover:opacity-100 transition-opacity duration-500" />
                            <div className="absolute -inset-4 rounded-[2.2rem] bg-gradient-to-br from-violet-500/30 via-fuchsia-500/20 to-transparent blur-2xl" />

                            {/* Main image container */}
                            <div className="relative overflow-hidden rounded-[2rem] border border-violet-400/50 bg-gradient-to-br from-white/10 to-white/5 p-1 backdrop-blur-xl shadow-2xl">
                                {/* Image overlay gradient */}
                                <div className="absolute inset-1 rounded-[1.9rem] bg-gradient-to-br from-violet-500/0 via-transparent to-fuchsia-500/10 pointer-events-none z-10" />

                                {/* Main image */}
                                <div className="relative overflow-hidden rounded-[1.8rem] bg-gradient-to-br from-violet-900 to-black">
                                    <img
                                        src="/projects/profile0.jpg"
                                        alt="Profile"
                                        className="h-[420px] w-full rounded-[1.8rem] object-cover object-center transition-all duration-700 group-hover:scale-110 group-hover:brightness-125"
                                    />
                                    {/* Image hover overlay */}
                                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-[1.8rem]" />
                                </div>
                            </div>

                            {/* Floating badges */}
                            <div className="absolute -bottom-3 left-4 right-4 sm:left-6 sm:right-auto rounded-2xl border border-white/20 bg-gradient-to-br from-black/80 to-black/60 px-4 py-3 backdrop-blur-lg shadow-2xl transition-all duration-500 group-hover:scale-110 group-hover:shadow-lg group-hover:shadow-violet-500/30">
                                <p className="text-xs uppercase tracking-widest text-violet-300 font-bold">Experience</p>
                                <p className="mt-1 text-lg font-bold bg-gradient-to-r from-violet-300 to-fuchsia-300 bg-clip-text text-transparent">17+ Months</p>
                            </div>



                        </div>
                    </div>
                </div>
            </div>

            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex flex-col items-center animate-bounce">
                <span className="text-sm text-muted-foreground mb-2">Scroll</span>
                <ArrowDown className="h-5 w-5 text-primary" />
            </div>
        </section>
    );
};