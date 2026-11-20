import { ArrowUp } from "lucide-react";


export const Footer = () => {
    return (
        <footer className="py-12 px-4 bg-card items-center justify-center relative border-t border-border mt-12 pt-8 flex flex-wrap">
            <p className="text-sm text-muted-foreground "> &copy; {new Date().getFullYear()} Nahin's Portfolio, Appreciate your visit. Let’s connect and discuss how I can help bring your ideas to life.

            </p>

            <a
                href="/"
                onClick={(e) => {
                    e.preventDefault();
                    window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="p-2 rounded-full bg-primary/10 hover:bg-primary/40 text-primary transition-colors ml-3"
            >
                <ArrowUp size={20} />
            </a>
        </footer>
    );
};