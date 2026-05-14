import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/arise-nav-logo-transparent.png";

const links = [
  { href: "#about", label: "Clinic" },
  { href: "#doctor", label: "Doctor" },
  { href: "#services", label: "Services" },
  { href: "#team", label: "Team" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-500 ${
        scrolled ? "py-3" : "py-5"
      }`}
    >
      <div
        className={`mx-auto max-w-7xl px-5 lg:px-8 transition-all duration-500 ${
          scrolled ? "" : ""
        }`}
      >
        <div
          className={`flex items-center justify-between rounded-full px-5 lg:px-7 py-3 transition-all duration-500 ${
            scrolled ? "nav-blur shadow-sm" : "nav-blur"
          }`}
        >
          <a href="#top" className="group flex items-center">
            <img
              src={logo}
              alt="Arise Physio"
              className="h-8 w-auto max-w-[170px] object-contain drop-shadow-[0_0_14px_oklch(0.68_0.24_25/0.2)] transition-transform group-hover:scale-[1.03] sm:h-9 sm:max-w-[190px]"
            />
          </a>

          <nav className="hidden lg:flex items-center gap-8">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="text-sm text-muted-foreground hover:text-foreground transition-colors relative group"
              >
                {l.label}
                <span className="absolute -bottom-1 left-0 h-px w-0 bg-mint transition-all group-hover:w-full" />
              </a>
            ))}
          </nav>

          <button
            onClick={() => setOpen(!open)}
            className="lg:hidden h-10 w-10 rounded-full glass flex items-center justify-center"
            aria-label="Menu"
          >
            {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>

        {open && (
          <div className="lg:hidden mt-2 nav-blur rounded-3xl p-6 animate-in fade-in slide-in-from-top-2">
            <div className="flex flex-col gap-4">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="text-base text-foreground/80 hover:text-mint"
                >
                  {l.label}
                </a>
              ))}
            </div>
          </div>
        )}
      </div>
    </header>
  );
}
