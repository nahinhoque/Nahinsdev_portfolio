import { useEffect, useState } from "react";
import { cn } from "../lib/utils";
import { Menu } from "lucide-react";
import { X } from "lucide-react";



const navItems = [
    { name: "Home", sectionId: "hero" },
    { name: "Skills", sectionId: "skills" },
    { name: "Projects", sectionId: "projects" },
    { name: "Contact", sectionId: "contact" },
];

export const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const scrollToSection = (sectionId) => {
        if (!sectionId) {
            window.scrollTo({ top: 0, behavior: "smooth" });
            return;
        }

        const section = document.getElementById(sectionId);
        if (section) {
            section.scrollIntoView({ behavior: "smooth", block: "start" });
            return;
        }

        window.scrollTo({ top: 0, behavior: "smooth" });
    };

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);
    return (
        <nav className={cn("fixed w-full z-40 transition-all duration-300", isScrolled ? "py-3 bg-background/80 backdrop-blur-md shadow-xs" : "py-5"
        )}>

            <div className="container flex items-center justify-between">
                <a
                    className="text-xl font-black tracking-[-0.04em] text-primary flex items-center"
                    href="/"
                    onClick={(e) => {
                        e.preventDefault();
                        scrollToSection("hero");
                    }}
                >
                    <span className="relative z-10">
                        <span className="text-glow text-foreground"> Nahin </span>
                    </span>
                </a>

                {/* desktop nav */}
                <div className="hidden md:flex space-x-8 font-semibold tracking-[-0.02em]">
                    {navItems.map((item, Key) => (
                        <a
                            key={Key}
                            href="/"
                            onClick={(e) => {
                                e.preventDefault();
                                scrollToSection(item.sectionId);
                            }}
                            className="text-foreground/80 hover:text-primary transition-colors duration-300"
                        >
                            {item.name}
                        </a>
                    ))}
                </div>

                {/* mobile nav */}
                <button
                    onClick={() => setIsMenuOpen((prev) => !prev)}
                    className="md:hidden p-2 text-foreground z-50"
                    aria-label={isMenuOpen ? "Close Menu" : "Open Menu"}
                >
                    {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
                </button>

                <div className={cn("fixed inset-0 bg-background/95 backdrop-blur-md z-40 flex flex-col items-center justify-center",
                    "transition-all duration-300 md:hidden",
                    isMenuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"

                )}>
                    <div className="flex flex-col space-y-8 text-xl font-bold">
                        {navItems.map((item, Key) => (
                            <a
                                key={Key}
                                href="/"
                                className="text-foreground/80 hover:text-primary transition-colors duration-300"
                                onClick={(e) => {
                                    e.preventDefault();
                                    scrollToSection(item.sectionId);
                                    setIsMenuOpen(false);
                                }}
                            >
                                {item.name}
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </nav>
    );
};