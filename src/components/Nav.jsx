import { useEffect, useState } from "react";
import BrandMark from "./BrandMark.jsx";
import { DASHBOARD_URL, SIGNUP_URL } from "../config.js";

const LINKS = [
  { href: "#features", label: "Features" },
  { href: "#how", label: "How it works" },
  { href: "#faq", label: "FAQ" },
];

export default function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-colors ${
        scrolled
          ? "bg-cream/85 backdrop-blur border-b border-warm-border"
          : "bg-cream/70 backdrop-blur-sm border-b border-transparent"
      }`}
    >
      <div className="container-page flex items-center justify-between py-3.5">
        <a href="#top" className="flex items-center gap-2.5 no-underline">
          <BrandMark size={36} />
          <span className="font-display font-bold text-lg tracking-tight text-ink">
            CoopKeeper
          </span>
        </a>

        <nav aria-label="Primary" className="hidden md:flex items-center gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="px-3 py-2 text-sm font-medium text-warm-gray hover:text-ink rounded-lg hover:bg-off-white transition-colors"
            >
              {l.label}
            </a>
          ))}
        </nav>

        <div className="flex items-center gap-2">
          <a
            href={DASHBOARD_URL}
            className="btn btn-sm btn-ghost hidden sm:inline-flex"
          >
            Log in
          </a>
          {/* Mobile: keep Log in visible but slightly smaller */}
          <a
            href={DASHBOARD_URL}
            className="text-sm font-semibold text-warm-gray hover:text-ink px-3 py-2 rounded-lg hover:bg-off-white sm:hidden transition-colors"
          >
            Log in
          </a>
          <a
            href={SIGNUP_URL}
            className="btn btn-sm btn-primary hidden sm:inline-flex"
          >
            Start free
          </a>
          <button
            type="button"
            aria-label="Open menu"
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
            className="md:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg hover:bg-off-white transition-colors"
          >
            <Hamburger open={open} />
          </button>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className={`md:hidden overflow-hidden transition-[max-height,opacity] duration-200 ease-out ${
          open ? "max-h-72 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <div className="container-page pb-4 flex flex-col gap-1">
          {LINKS.map((l) => (
            <a
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="px-3 py-3 text-base font-medium text-ink rounded-lg hover:bg-off-white"
            >
              {l.label}
            </a>
          ))}
          <a
            href={SIGNUP_URL}
            className="btn btn-primary mt-2 w-full"
          >
            Start free
          </a>
        </div>
      </div>
    </header>
  );
}

function Hamburger({ open }) {
  return (
    <svg width="22" height="22" viewBox="0 0 22 22" aria-hidden="true">
      <line
        x1="3" y1={open ? 11 : 6} x2="19" y2={open ? 11 : 6}
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        style={{ transform: open ? "rotate(45deg)" : "none", transformOrigin: "center", transition: "all 150ms" }}
      />
      <line
        x1="3" y1="11" x2="19" y2="11"
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        style={{ opacity: open ? 0 : 1, transition: "opacity 150ms" }}
      />
      <line
        x1="3" y1={open ? 11 : 16} x2="19" y2={open ? 11 : 16}
        stroke="currentColor" strokeWidth="2" strokeLinecap="round"
        style={{ transform: open ? "rotate(-45deg)" : "none", transformOrigin: "center", transition: "all 150ms" }}
      />
    </svg>
  );
}
