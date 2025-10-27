import { useEffect, useRef, useState } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
const linkStyle = 'text-white/80 hover:text-white hover:bg-white/10'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement | null>(null)

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    const originalOverflow = document.body.style.overflow
    if (open) {
      // Prevent background scroll
      document.body.style.overflow = 'hidden'
      // Focus first focusable element in the menu
      const first = menuRef.current?.querySelector<HTMLElement>(
        'a, button, [tabindex]:not([tabindex="-1"])'
      )
      first?.focus()
    } else {
      document.body.style.overflow = originalOverflow
    }

    // Focus trap and Escape handler
    const onKeyDown = (e: KeyboardEvent) => {
      if (!open) return
      if (!menuRef.current) return

      if (e.key === 'Escape') {
        e.preventDefault()
        setOpen(false)
        return
      }

      if (e.key === 'Tab') {
        const focusables = Array.from(
          menuRef.current.querySelectorAll<HTMLElement>(
            'a, button, [tabindex]:not([tabindex="-1"])'
          )
        ).filter((el) => !el.hasAttribute('disabled'))
        if (focusables.length === 0) return
        const firstEl = focusables[0]
        const lastEl = focusables[focusables.length - 1]
        const active = document.activeElement as HTMLElement | null
        if (e.shiftKey) {
          // Shift+Tab
          if (active === firstEl || !menuRef.current.contains(active)) {
            e.preventDefault()
            lastEl.focus()
          }
        } else {
          // Tab
          if (active === lastEl) {
            e.preventDefault()
            firstEl.focus()
          }
        }
      }
    }

    document.addEventListener('keydown', onKeyDown)
    return () => {
      document.removeEventListener('keydown', onKeyDown)
      document.body.style.overflow = originalOverflow
    }
  }, [open])

  return (
    <header className="sticky top-0 z-40 w-full bg-black/60 backdrop-blur">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#hero" className="font-semibold tracking-tight">
          <span className="text-white">Portfolio</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => (
            <a key={href} href={`/${href}`} className={`${linkBase} ${linkStyle}`}>
              {label}
            </a>
          ))}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-white hover:bg-white/10"
          aria-label="Toggle navigation menu"
          aria-controls="mobile-menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          <span className="sr-only">Open main menu</span>
          {/* Hamburger / close icon */}
          <svg
            className={`h-5 w-5 ${open ? 'hidden' : 'block'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="3" y1="6" x2="21" y2="6" />
            <line x1="3" y1="12" x2="21" y2="12" />
            <line x1="3" y1="18" x2="21" y2="18" />
          </svg>
          <svg
            className={`h-5 w-5 ${open ? 'block' : 'hidden'}`}
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
      </nav>

      {/* Mobile menu panel */}
      <AnimatePresence>
        {open ? (
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="md:hidden border-b border-white/10 bg-black/90 backdrop-blur"
            ref={menuRef}
          >
            <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
              <div className="flex flex-col gap-1">
                {links.map(({ href, label }) => (
                  <a
                    key={href}
                    href={`/${href}`}
                    onClick={() => setOpen(false)}
                    className="px-3 py-2 rounded-md text-base font-medium text-white/90 hover:text-white hover:bg-white/10"
                  >
                    {label}
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        ) : null}
      </AnimatePresence>

      {/* Backdrop overlay */}
      <AnimatePresence>
        {open ? (
          <motion.button
            type="button"
            aria-label="Close menu"
            key="backdrop"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setOpen(false)}
            className="fixed inset-0 z-30 bg-black/50 backdrop-blur-sm md:hidden"
          />
        ) : null}
      </AnimatePresence>
    </header>
  )
}
