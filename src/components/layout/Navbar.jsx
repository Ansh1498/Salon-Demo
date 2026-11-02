import { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import { navLinks, siteInfo } from '../../data/siteInfo'


function PhoneIcon() {
  return (
    <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="#2E2820"
      strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
      <path d="M5 4h4l2 5-2.5 1.5a11 11 0 0 0 5 5L15 13l5 2v4a2 2 0 0 1-2 2A16 16 0 0 1 3 6a2 2 0 0 1 2-2z" />
    </svg>
  )
}

const linkClass = ({ isActive }) =>
  `font-serif text-2xl transition-colors hover:text-sand ${isActive ? 'text-sand' : 'text-cream'}`

export default function Navbar() {
  const [open, setOpen] = useState(false)

  return (
    <header className="relative z-50">
      <nav className="flex items-center justify-between px-6 py-6 md:px-12" aria-label="Main">
        <Link to="/" className="text-3xl font-light tracking-wide">
          dario salon
        </Link>

        {/* Desktop */}
        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((l) => (
            <NavLink key={l.to} to={l.to} end={l.to === '/'} className={linkClass}>
              {l.label}
            </NavLink>
          ))}
          <a
            href={`tel:${siteInfo.phone.replace(/\s/g, '')}`}
            aria-label="Call the salon"
            className="flex h-14 w-14 items-center justify-center rounded-lg bg-button transition-transform hover:scale-105"
          >
            <PhoneIcon />
          </a>
        </div>

        {/* Mobile button */}
        <button
          className="flex h-11 w-11 flex-col items-center justify-center gap-1.5 md:hidden"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
          aria-expanded={open}
        >
          <span className={`h-0.5 w-7 bg-cream transition-transform ${open ? 'translate-y-2 rotate-45' : ''}`} />
          <span className={`h-0.5 w-7 bg-cream transition-opacity ${open ? 'opacity-0' : ''}`} />
          <span className={`h-0.5 w-7 bg-cream transition-transform ${open ? '-translate-y-2 -rotate-45' : ''}`} />
        </button>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
            className="overflow-hidden bg-surface px-6 md:hidden"
          >
            <div className="flex flex-col gap-2 py-4">
              {navLinks.map((l) => (
                <NavLink
                  key={l.to}
                  to={l.to}
                  end={l.to === '/'}
                  onClick={() => setOpen(false)}
                  className={(s) => `${linkClass(s)} flex min-h-11 items-center`}
                >
                  {l.label}
                </NavLink>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  )
}