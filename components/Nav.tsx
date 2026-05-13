"use client";

import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { personalInfo } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Skills", href: "#skills" },
  { label: "Experience", href: "#experience" },
  { label: "Projects", href: "#projects" },
  { label: "Certifications", href: "#certifications" },
  { label: "Contact", href: "#contact" },
];

export function Nav() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "bg-card/90 backdrop-blur-md shadow-sm border-b border-border"
            : "bg-transparent"
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            {/* Logo */}
            <a
              href="#"
              className="flex items-center gap-2 font-semibold text-foreground hover:text-primary transition-colors"
              onClick={close}
            >
              <span className="flex items-center justify-center w-8 h-8 rounded-lg bg-primary text-primary-foreground text-sm font-bold">
                AHL
              </span>
              <span className="hidden sm:block text-sm">{personalInfo.name}</span>
            </a>

            {/* Desktop links */}
            <nav className="hidden md:flex items-center gap-6">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="text-sm text-muted-foreground hover:text-foreground transition-colors"
                >
                  {link.label}
                </a>
              ))}
            </nav>

            {/* Hire Me CTA */}
            <div className="flex items-center gap-3">
              <a
                href="#contact"
                className="hidden md:inline-flex items-center justify-center h-9 px-4 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Hire Me
              </a>
              <button
                className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
                onClick={() => setOpen(!open)}
                aria-label="Toggle menu"
              >
                {open ? <X className="size-5" /> : <Menu className="size-5" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile drawer */}
      {open && (
        <div className="fixed inset-0 z-40 md:hidden">
          <div
            className="absolute inset-0 bg-black/20"
            onClick={close}
          />
          <div className="absolute top-16 left-0 right-0 bg-card border-b border-border shadow-lg">
            <nav className="flex flex-col p-4 gap-1">
              {links.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={close}
                  className="px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-muted transition-colors"
                >
                  {link.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={close}
                className="mt-2 flex items-center justify-center h-10 rounded-lg bg-primary text-primary-foreground text-sm font-medium hover:bg-primary/90 transition-colors"
              >
                Hire Me
              </a>
            </nav>
          </div>
        </div>
      )}
    </>
  );
}
