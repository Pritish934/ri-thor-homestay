"use client";

import Link from "next/link";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { navigation, whatsappUrl } from "@/lib/site";
import { Menu, X, ArrowUpRight } from "./Icons";
import Image from "next/image";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-5">
      <div className="mx-auto max-w-7xl">
        <div className="glass-nav flex h-16 items-center justify-between rounded-full border border-white/15 px-4 shadow-2xl shadow-black/10 backdrop-blur-xl sm:px-6">
          <Link
            href="/"
            className="flex items-center gap-3"
            onClick={() => setOpen(false)}
          >
            <span className="grid size-9 place-items-center rounded-full bg-(--cream) text-xs font-bold text-(--ink)">
              <Image
                src="/images/rithorlogo.jpeg"
                alt="Ri Thor Homestay Logo"
                className="rounded-full"
                width={20}
                height={20}
              />
            </span>
            <span className="hidden text-sm font-medium tracking-[0.14em] text-white sm:block">
              RITHOR
            </span>
            <span className="hidden text-sm font-medium tracking-[0.14em] text-white sm:block">
              HOMESTAY
            </span>
          </Link>

          <nav className="hidden items-center gap-7 lg:flex">
            {navigation.map((item) => (
              <Link key={item.href} href={item.href} className="nav-link">
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="flex items-center gap-2">
            <a
              href={whatsappUrl()}
              target="_blank"
              rel="noreferrer"
              className="hidden rounded-full bg-(--cream) px-5 py-2.5 text-sm font-semibold text-(--ink) transition-transform hover:-translate-y-0.5 lg:inline-flex"
            >
              Check availability
            </a>
            <button
              type="button"
              aria-label={open ? "Close menu" : "Open menu"}
              onClick={() => setOpen((v) => !v)}
              className="grid size-10 place-items-center rounded-full border border-white/15 text-white lg:hidden"
            >
              {open ? <X /> : <Menu />}
            </button>
          </div>
        </div>

        <AnimatePresence>
          {open && (
            <motion.nav
              initial={{ opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -8 }}
              className="mt-2 rounded-3xl border border-white/10 bg-[rgba(20,22,18,.96)] p-4 shadow-2xl backdrop-blur-xl lg:hidden"
            >
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="flex items-center justify-between rounded-2xl px-4 py-3.5 text-white/85 hover:bg-white/5"
                >
                  {item.label}
                  <ArrowUpRight size={16} />
                </Link>
              ))}
              <a
                href={whatsappUrl()}
                target="_blank"
                rel="noreferrer"
                className="mt-2 flex items-center justify-center rounded-2xl bg-(--cream) px-4 py-3.5 font-semibold text-(--ink)"
              >
                Check availability
              </a>
            </motion.nav>
          )}
        </AnimatePresence>
      </div>
    </header>
  );
}
