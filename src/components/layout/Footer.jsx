import { Github, Instagram, Linkedin, Mail } from 'lucide-react'
import { profile } from "../../data";

export function Footer() {
  return (
    <footer className="border-t border-border/50 py-10 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <div>
          <p className="font-display font-bold text-lg gradient-text">{profile.nickname}<span className="text-accent">.</span></p>
          <p className="text-text-dim text-sm mt-1">Built with React</p>
        </div>
        <div className="flex items-center gap-4">
          {[
            { icon: <Github size={18} />, href: profile.github },
            { icon: <Linkedin size={18} />, href: profile.linkedin },
            { icon: <Instagram size={18} />, href: profile.instagram },
            { icon: <Mail size={18} />, href: `mailto:${profile.email}` },
          ].map((item, i) => (
            <a
              key={i}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-text-dim hover:text-accent hover:bg-accent/10 rounded-lg transition-all duration-200"
            >
              {item.icon}
            </a>
          ))}
        </div>
        <p className="text-text-dim text-xs">© {new Date().getFullYear()} {profile.name}. All rights reserved.</p>
      </div>
    </footer>
  )
}
