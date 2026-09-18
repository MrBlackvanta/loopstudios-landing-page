"use client";

import { CloseIcon, Logo, MenuIcon } from "@/components/icons";
import { usePageLock } from "@/lib";
import { useEffect, useId, useRef, useState } from "react";
import NavLinks from "./nav-links";

export default function MobileMenu() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const panelRef = useRef<HTMLDivElement>(null);
  const triggerRef = useRef<HTMLButtonElement>(null);

  usePageLock(open);

  useEffect(() => {
    if (!open) return;

    let abandoned = false;
    const panel = panelRef.current;
    const trigger = triggerRef.current;
    const wide = window.matchMedia("(min-width: 64rem)");

    const closeOnEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") setOpen(false);
    };
    const closeWhenWide = () => {
      if (wide.matches) setOpen(false);
    };

    document.addEventListener("keydown", closeOnEscape);
    wide.addEventListener("change", closeWhenWide);

    requestAnimationFrame(() =>
      requestAnimationFrame(() => {
        if (!abandoned) panel?.focus();
      }),
    );

    return () => {
      abandoned = true;
      document.removeEventListener("keydown", closeOnEscape);
      wide.removeEventListener("change", closeWhenWide);
      trigger?.focus();
    };
  }, [open]);

  const trapTab = (event: React.KeyboardEvent<HTMLDivElement>) => {
    const panel = panelRef.current;
    if (event.key !== "Tab" || !panel) return;

    const stops = panel.querySelectorAll<HTMLElement>("a[href], button");
    const first = stops[0];
    const last = stops[stops.length - 1];
    const atStart =
      document.activeElement === first || document.activeElement === panel;

    if (event.shiftKey && atStart) {
      event.preventDefault();
      last.focus();
    } else if (!event.shiftKey && document.activeElement === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <div className="lg:hidden">
      <button
        ref={triggerRef}
        type="button"
        onClick={() => setOpen(true)}
        aria-expanded={open}
        aria-controls={panelId}
        aria-label="Open menu"
        className="v-focus-ring -m-3 grid size-12 place-items-center"
      >
        <MenuIcon />
      </button>

      <div
        ref={panelRef}
        id={panelId}
        role="dialog"
        aria-modal="true"
        aria-label="Menu"
        tabIndex={-1}
        onKeyDown={trapTab}
        className={`fixed inset-0 z-50 bg-black transition-[translate,visibility] duration-300 ease-out outline-none motion-reduce:transition-none ${
          open ? "visible translate-y-0" : "invisible -translate-y-full"
        }`}
      >
        <div className="mx-auto flex w-full max-w-289.5 items-center justify-between px-6 pt-10">
          <Logo className="h-6 w-36" />
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Close menu"
            className="v-focus-ring -m-3 grid size-12 place-items-center"
          >
            <CloseIcon />
          </button>
        </div>
        <nav
          aria-label="Menu"
          className="mx-auto w-full max-w-289.5 px-6 pt-39.75"
        >
          <NavLinks variant="menu" onNavigate={() => setOpen(false)} />
        </nav>
      </div>
    </div>
  );
}
