import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from "../../data";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(['hero', 'about', 'portfolio', 'mc', 'experience', 'hobbies', 'contact'])

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const handleNavClick = (href) => {
    setMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'py-3 bg-bg/80 backdrop-blur-xl border-b border-border/60'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="font-display font-bold text-xl tracking-tight gradient-text"
        >
          {profile.nickname}<span className="text-accent">.</span>
        </a>

        {/* Desktop nav */}
        <ul className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-4 py-2 text-sm font-body transition-colors duration-200 rounded-lg ${
                    isActive ? 'text-accent' : 'text-text-dim hover:text-text'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-0 bg-accent/10 rounded-lg" />
                  )}
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        {/* CTA */}
        <a
          href={`mailto:${profile.email}`}
          className="hidden md:flex items-center gap-2 px-4 py-2 bg-accent/10 border border-accent/30 text-accent text-sm font-medium rounded-lg hover:bg-accent/20 transition-all duration-200"
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75" />
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent" />
          </span>
          Available for work
        </a>

        {/* Mobile menu toggle */}
        <button
          className="md:hidden text-text-dim hover:text-text transition-colors"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <div className="md:hidden absolute top-full left-0 right-0 bg-bg/95 backdrop-blur-xl border-b border-border/60 py-4 px-6">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full text-left px-4 py-3 text-sm text-text-dim hover:text-text hover:bg-surface rounded-lg transition-all"
                >
                  {link.label}
                </button>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  )
}
