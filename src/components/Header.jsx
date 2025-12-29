import { useEffect, useState } from "react";
import logo from "../assets/logo.svg";

export default function Header() {
  const [open, setOpen] = useState(false);

  const scrollToId = (id) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
  };

  useEffect(() => {
    const onKeyDown = (e) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  return (
    <header className="fixed inset-x-0 top-0 z-50 bg-p-600">
      <div className="mx-auto flex h-[60px] w-full max-w-6xl items-center justify-between px-4 md:px-6">
        <button
          type="button"
          className="flex items-center gap-3"
          onClick={() => scrollToId("about")}
          aria-label="Go to About"
        >
          <img
            src={logo}
            alt="OverView"
            className="w-10 h-10 transition-transform cursor-pointer hover:rotate-45"
          />
          <h2 className="text-base font-Gothic text-n-50">Thanh Danh</h2>
        </button>

        <nav className="items-center hidden gap-8 md:flex">
          <button
            type="button"
            className="cursor-pointer font-Gothic text-n-50 hover:text-n-200"
            onClick={() => scrollToId("contact")}
          >
            Contact
          </button>
          <button
            type="button"
            className="cursor-pointer font-Gothic text-n-50 hover:text-n-200"
            onClick={() => scrollToId("hightlight_project")}
          >
            Hightlight Project
          </button>
          <button
            type="button"
            className="cursor-pointer font-Gothic text-n-50 hover:text-n-200"
            onClick={() => scrollToId("about")}
          >
            About
          </button>
        </nav>

        <button
          type="button"
          className="md:hidden text-n-50 hover:text-n-200"
          aria-label="Open menu"
          aria-expanded={open}
          onClick={() => setOpen((prev) => !prev)}
        >
          <svg
            xmlns="https://www.w3.org/2000/svg"
            className="h-7 w-7"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth={2}
          >
            <path strokeLinecap="round" strokeLinejoin="round" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

      {open && (
        <div className="md:hidden">
          <button
            type="button"
            className="fixed inset-0 z-40 bg-black/40"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
          />
          <nav className="fixed right-3 top-[70px] z-50 w-[260px] animate-slideDown rounded-2xl bg-p-600/95 shadow-xl backdrop-blur">
            <ul className="divide-y divide-white/10">
              <li>
                <button
                  type="button"
                  className="w-full px-4 py-3 text-left font-Gothic text-n-50 hover:text-n-200"
                  onClick={() => scrollToId("contact")}
                >
                  Contact
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="w-full px-4 py-3 text-left font-Gothic text-n-50 hover:text-n-200"
                  onClick={() => scrollToId("hightlight_project")}
                >
                  Hightlight Project
                </button>
              </li>
              <li>
                <button
                  type="button"
                  className="w-full px-4 py-3 text-left font-Gothic text-n-50 hover:text-n-200"
                  onClick={() => scrollToId("about")}
                >
                  About
                </button>
              </li>
            </ul>
          </nav>
        </div>
      )}
    </header>
  );
}
