import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import {
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineCode,
  HiOutlineCollection,
  HiOutlineBriefcase,
  HiOutlineAcademicCap,
  HiOutlineMail,
} from 'react-icons/hi'
import { navLinks } from '../data/profile'

const icons = {
  home: HiOutlineHome,
  about: HiOutlineUser,
  skills: HiOutlineCode,
  projects: HiOutlineCollection,
  experience: HiOutlineBriefcase,
  education: HiOutlineAcademicCap,
  contact: HiOutlineMail,
}

export default function Sidebar() {
  const [active, setActive] = useState('home')
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const sections = navLinks.map((l) => document.getElementById(l.id)).filter(Boolean)

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id)
          }
        })
      },
      { rootMargin: '-40% 0px -50% 0px', threshold: 0 }
    )

    sections.forEach((section) => observer.observe(section))
    return () => observer.disconnect()
  }, [])

  const handleNavClick = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' })
    setOpen(false)
  }

  return (
    <>
      {/* Mobile toggle */}
      <button
        onClick={() => setOpen(!open)}
        aria-label="Toggle navigation"
        className="fixed top-5 right-5 z-50 lg:hidden glass-panel rounded-lg p-3 text-circuit neon-border"
      >
        <div className="w-5 h-0.5 bg-circuit mb-1.5 transition-all" style={{ transform: open ? 'rotate(45deg) translateY(2px)' : 'none' }} />
        <div className="w-5 h-0.5 bg-circuit mb-1.5" style={{ opacity: open ? 0 : 1 }} />
        <div className="w-5 h-0.5 bg-circuit transition-all" style={{ transform: open ? 'rotate(-45deg) translateY(-2px)' : 'none' }} />
      </button>

      <nav
        className={`fixed z-40 top-0 lg:top-1/2 right-0 lg:right-6 lg:-translate-y-1/2 h-full lg:h-auto w-64 lg:w-auto
        transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full lg:translate-x-0'}`}
        aria-label="Primary"
      >
        <div className="glass-panel lg:rounded-2xl h-full lg:h-auto py-8 lg:py-5 px-5 lg:px-3 flex flex-col items-start lg:items-center gap-2 shadow-glass relative">
          {/* Vertical trace line connecting all dots (desktop only) */}
          <div className="hidden lg:block absolute left-1/2 top-8 bottom-8 w-px -translate-x-1/2" style={{ backgroundColor: 'rgba(22,32,56,0.8)' }} />

          <span className="font-mono text-[0.65rem] text-mist-soft tracking-widest mb-4 lg:hidden">NAVIGATE</span>

          {navLinks.map((link) => {
            const Icon = icons[link.id]
            const isActive = active === link.id
            return (
              <button
                key={link.id}
                onClick={() => handleNavClick(link.id)}
                className="relative group flex items-center gap-3 lg:gap-0 w-full lg:w-auto py-3 lg:py-0 lg:my-2.5"
                aria-current={isActive ? 'true' : undefined}
              >
                <span
                  className={`relative z-10 flex items-center justify-center w-11 h-11 rounded-full transition-all duration-300
                  ${isActive ? 'bg-circuit/15 text-circuit shadow-neon-md' : 'text-mist-soft hover:text-circuit hover:bg-circuit/5'}`}
                >
                  <Icon className="w-5 h-5" />
                  {isActive && (
                    <motion.span
                      layoutId="active-ring"
                      className="absolute inset-0 rounded-full border border-circuit animate-pulse-glow"
                    />
                  )}
                </span>
                <span
                  className={`font-mono text-sm lg:hidden ${isActive ? 'text-circuit' : 'text-mist'}`}
                >
                  {link.label}
                </span>
                {/* Desktop tooltip */}
                <span className="hidden lg:group-hover:block absolute right-14 top-1/2 -translate-y-1/2 whitespace-nowrap glass-panel px-3 py-1.5 rounded-md text-xs font-mono" style={{ color: '#7df9ff' }}>
                  {link.label}
                </span>
              </button>
            )
          })}
        </div>
      </nav>

      {open && (
        <div
          className="fixed inset-0 bg-void/70 z-30 lg:hidden"
          onClick={() => setOpen(false)}
          aria-hidden="true"
        />
      )}
    </>
  )
}
