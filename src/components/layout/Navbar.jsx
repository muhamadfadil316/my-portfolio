import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { navLinks, profile } from "../../data";
import { useActiveSection } from "../../hooks/useActiveSection";

export function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const activeSection = useActiveSection(['hero', 'about', 'expertise', 'awards', 'experience', 'mc', 'projects', 'hobbies', 'contact'])

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
          ? 'py-3 bg-bg/90 backdrop-blur-xl border-b border-border/70 shadow-[0_14px_36px_rgba(2,8,18,0.28)]'
          : 'py-5 bg-transparent'
      }`}
    >
      <div className="max-w-6xl mx-auto px-6 flex items-center justify-between">
        <a
          href="#hero"
          onClick={(e) => { e.preventDefault(); handleNavClick('#hero') }}
          className="font-display font-semibold text-xl tracking-tight gradient-text"
        >
          {profile.nickname}<span className="text-accent">.</span>
        </a>

        <ul className="hidden xl:flex items-center gap-0.5">
          {navLinks.map((link) => {
            const sectionId = link.href.replace('#', '')
            const isActive = activeSection === sectionId
            return (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className={`relative px-3 py-2 text-[13px] font-body transition-colors duration-200 rounded-lg ${
                    isActive ? 'text-text' : 'text-text-dim hover:text-text'
                  }`}
                >
                  {isActive && (
                    <span className="absolute inset-x-3 -bottom-0.5 h-px bg-gradient-to-r from-accent to-accent-2 rounded-full" />
                  )}
                  {link.label}
                </button>
              </li>
            )
          })}
        </ul>

        <a
          href={`mailto:${profile.email}`}
          className="hidden xl:flex items-center gap-2 px-4 py-2 bg-accent/8 border border-accent/20 text-accent text-sm font-medium rounded-full hover:bg-accent/14 hover:border-accent/30 transition-all duration-200"
        >
          Open for opportunities
        </a>

        <button
          className="rounded-full border border-border p-2 text-text-dim transition-colors hover:border-accent/40 hover:text-text xl:hidden"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
          aria-expanded={menuOpen}
        >
          {menuOpen ? <X size={22} /> : <Menu size={22} />}
        </button>
      </div>

      {menuOpen && (
        <div className="absolute left-0 right-0 top-full border-b border-border/70 bg-bg/95 px-5 py-4 backdrop-blur-xl xl:hidden sm:px-6">
          <ul className="mx-auto flex max-w-6xl flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <button
                  onClick={() => handleNavClick(link.href)}
                  className="w-full rounded-xl px-4 py-3 text-left text-sm text-text-dim transition-all hover:bg-surface hover:text-text"
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
