"use client"

import { Car, Menu, X } from "lucide-react"
import Link from "next/link"
import { useState } from "react"

const navLinks = [
  { href: "/", label: "자동차 할부 계산기" },
  { href: "/used-car-interest", label: "중고차 할부 이자" },
  { href: "/registration-tax", label: "취등록세/이전비" },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/80 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-[1200px] items-center justify-between px-4">
        <Link href="/" className="flex items-center gap-2 group" onClick={() => setOpen(false)}>
          <div className="p-1.5 bg-primary/10 rounded-lg group-hover:bg-primary/20 transition-colors">
            <Car className="h-6 w-6 text-primary" />
          </div>
          <div className="flex flex-col -space-y-1">
            <span className="text-xl font-black tracking-tighter text-foreground uppercase">자동차 할부 계산</span>
            <span className="text-[10px] font-bold text-primary/70 tracking-tight">CAR LOAN CALCULATOR</span>
          </div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.href + link.label}
              href={link.href}
              className="text-sm font-bold text-muted-foreground hover:text-primary transition-all relative after:absolute after:bottom-[-4px] after:left-0 after:w-full after:h-0.5 after:bg-primary after:scale-x-0 hover:after:scale-x-100 after:transition-transform first:text-foreground"
            >
              {link.label}
            </Link>
          ))}
          <Link
            href="/"
            className="ml-2 rounded-xl bg-foreground text-background px-5 py-2 text-sm font-bold shadow-lg hover:scale-105 transition-all"
          >
            분석 시작하기
          </Link>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          className="md:hidden p-2 rounded-lg hover:bg-secondary transition-colors"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="메뉴 열기"
        >
          {open ? <X className="h-6 w-6 text-foreground" /> : <Menu className="h-6 w-6 text-foreground" />}
        </button>
      </div>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="flex flex-col px-4 py-4 gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href + link.label}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-3 px-4 rounded-xl text-sm font-bold text-foreground hover:bg-primary/10 hover:text-primary transition-colors"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/"
              onClick={() => setOpen(false)}
              className="mt-3 rounded-xl bg-foreground text-background px-5 py-3 text-sm font-bold text-center hover:bg-primary transition-colors"
            >
              분석 시작하기
            </Link>
          </nav>
        </div>
      )}
    </header>
  )
}
