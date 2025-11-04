import { useEffect, useRef, useState } from 'react'
import type { MouseEvent as ReactMouseEvent } from 'react'
import { useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'

const linkBase = 'px-3 py-2 rounded-md text-sm font-medium transition-colors'
const linkStyle = 'text-[#EDEDED]/80 hover:text-[#EDEDED] hover:bg-white/10'

const links = [
  { href: '#hero', label: 'Home' },
  { href: '#projects', label: 'Projects' },
  { href: '#tech', label: 'Tech Stack' },
  { href: '#about', label: 'About' },
  { href: '#contact', label: 'Contact' },
]

export default function Header() {
  const [open, setOpen] = useState(false)
  const [activeId, setActiveId] = useState('hero')
  const location = useLocation()
  const menuRef = useRef<HTMLDivElement | null>(null)
  const activeIdRef = useRef('hero')
  const scrollTimeout = useRef<number | null>(null)

  const scrollToSection = (target: HTMLElement) => {
    const anchor =
      target.querySelector<HTMLElement>('[data-section-anchor]') ?? target
    anchor.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  const handleNavClick =
    (href: string, closeAfter = false) =>
    (event: ReactMouseEvent<HTMLAnchorElement>) => {
      event.preventDefault()
      const id = href.replace('#', '')
      const target = document.getElementById(id)
      if (closeAfter) {
        if (scrollTimeout.current) {
          window.clearTimeout(scrollTimeout.current)
        }
        setOpen(false)
      }
      if (target) {
        const runScroll = () => {
          scrollToSection(target)
          scrollTimeout.current = null
        }
        if (closeAfter) {
          scrollTimeout.current = window.setTimeout(runScroll, 220)
        } else {
          runScroll()
        }
        activeIdRef.current = id
        setActiveId(id)
        if (typeof window !== 'undefined' && window.history) {
          window.history.replaceState(null, '', href)
        }
      }
    }

  useEffect(() => {
    // Close mobile menu on route change
    setOpen(false)
  }, [location.pathname])

  useEffect(() => {
    return () => {
      if (scrollTimeout.current) {
        window.clearTimeout(scrollTimeout.current)
      }
    }
  }, [])

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

  // Scrollspy: highlight active section
  useEffect(() => {
    const ids = ['hero', 'projects', 'tech', 'about', 'contact']
    const sections = ids
      .map((id) => document.getElementById(id))
      .filter(Boolean) as HTMLElement[]
    if (sections.length === 0) return

    const visibleSections = new Map<string, number>()
    let raf = 0

    const updateActive = () => {
      if (visibleSections.size === 0) return
      let nextId = activeIdRef.current
      let maxRatio = 0
      visibleSections.forEach((ratio, id) => {
        if (ratio > maxRatio) {
          maxRatio = ratio
          nextId = id
        }
      })
      if (nextId !== activeIdRef.current) {
        activeIdRef.current = nextId
        setActiveId(nextId)
      }
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          const id = entry.target.id
          if (entry.isIntersecting) {
            visibleSections.set(id, entry.intersectionRatio)
          } else {
            visibleSections.delete(id)
          }
        })
        cancelAnimationFrame(raf)
        raf = requestAnimationFrame(updateActive)
      },
      {
        root: null,
        rootMargin: '-40% 0px -50% 0px',
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    )
    sections.forEach((el) => observer.observe(el))
    return () => {
      cancelAnimationFrame(raf)
      observer.disconnect()
    }
  }, [])

  return (
    <header className="sticky top-0 z-40 w-full bg-[#1e1e1e]/60">
      <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3 lg:px-8">
        <a href="#hero" className="font-semibold tracking-tight">
          <span className="text-[#EDEDED]">Philip Antebrink</span>
        </a>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-1">
          {links.map(({ href, label }) => {
            const id = href.replace('#', '')
            const isActive = activeId === id
            return (
              <a
                key={href}
                href={href}
                onClick={handleNavClick(href)}
                className={`${linkBase} ${linkStyle} ${isActive ? 'text-[#EDEDED] bg-white/10' : ''}`}
              >
                {label}
              </a>
            )
          })}
        </div>

        {/* Mobile hamburger */}
        <button
          type="button"
          className="md:hidden inline-flex items-center justify-center rounded-md border border-white/20 p-2 text-[#EDEDED] hover:bg-white/10"
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
            className="md:hidden relative z-40 border-b border-white/10 bg-[#1e1e1e]/90 backdrop-blur-md shadow-lg"
            ref={menuRef}
          >
            <div className="mx-auto max-w-7xl px-6 py-3 lg:px-8">
              <div className="flex flex-col gap-1">
                {links.map(({ href, label }) => {
                  const id = href.replace('#', '')
                  const isActive = activeId === id
                  return (
                    <a
                      key={href}
                      href={href}
                      onClick={handleNavClick(href, true)}
                      className={`px-3 py-2 rounded-md text-base font-medium text-white hover:text-white hover:bg-white/10 ${
                        isActive ? 'bg-white/10' : ''
                      }`}
                    >
                      {label}
                    </a>
                  )
                })}
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
            className="fixed inset-0 z-30 bg-[#0f0f0f]/50 backdrop-blur-sm md:hidden"
          />
        ) : null}
      </AnimatePresence>
    </header>
  )
}
