import { useState } from 'react'
import { Github, Instagram, Linkedin, Mail, MapPin, Copy, ExternalLink } from 'lucide-react'
import { profile } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

export function ContactSection() {
  const [copied, setCopied] = useState(null)

  const socials = [
    { icon: <Mail size={20} />, label: 'Email', value: profile.email, href: `mailto:${profile.email}`, color: '#4F8EF7' },
    { icon: <Github size={20} />, label: 'GitHub', value: '@muhamadfadil316', href: profile.github, color: '#e2e8f0' },
    { icon: <Linkedin size={20} />, label: 'LinkedIn', value: 'Muhamad Fadil', href: profile.linkedin, color: '#0a66c2' },
    { icon: <Instagram size={20} />, label: 'Instagram', value: '@fadilorsy', href: profile.instagram, color: '#e1306c' },
  ]

  return (
    <SectionWrapper id="contact" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Contact"
          title="Mari terhubung!"
          subtitle="Terbuka untuk kolaborasi, diskusi teknologi, atau sekadar ngobrol."
        />

        <div className="grid gap-12">
          <div className="space-y-4">
            <div className="glass rounded-2xl p-6 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <MapPin size={16} className="text-accent" />
                <span className="text-text-dim text-sm">{profile.location}</span>
                {profile.available && (
                  <>
                    <div className="w-px h-4 bg-border" />
                    <span className="flex items-center gap-1.5">
                      <span className="relative flex h-2 w-2">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                      </span>
                      <span className="text-green-400 text-xs font-mono">Available for work</span>
                    </span>
                  </>
                )}
              </div>
              <p className="text-text-dim text-sm leading-relaxed">
                Saya terbuka untuk peluang freelance, full-time, maupun kolaborasi open-source. Response time biasanya &lt; 24 jam.
              </p>
            </div>

            {socials.map((s) => (
              <div
                key={s.label}
                className="flex items-center justify-between glass rounded-xl p-4 hover:border-accent/30 hover:translate-x-1 transition-all duration-200 group"
              >
                <div className="flex items-center gap-4">
                  <div
                    className="p-2.5 rounded-lg transition-colors"
                    style={{ background: `${s.color}15`, color: s.color }}
                  >
                    {s.icon}
                  </div>
                  <div>
                    <p className="font-mono text-xs text-text-dim">{s.label}</p>
                    <p className="text-sm text-text group-hover:text-accent transition-colors">{s.value}</p>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md text-text-dim hover:text-accent/90 bg-transparent hover:bg-accent/5 transition-colors"
                    aria-label={`Open ${s.label}`}
                  >
                    <ExternalLink size={16} />
                  </a>

                  <button
                    type="button"
                    onClick={async () => {
                      try {
                        await navigator.clipboard.writeText(s.value)
                        setCopied(s.label)
                        setTimeout(() => setCopied(null), 1800)
                      } catch (err) {
                        console.error('copy failed', err)
                      }
                    }}
                    className="p-2 rounded-md text-text-dim hover:text-accent/90 bg-transparent hover:bg-accent/5 transition-colors"
                    aria-label={`Copy ${s.label}`}
                  >
                    {copied === s.label ? (
                      <span className="text-xs text-green-400 font-medium">Copied</span>
                    ) : (
                      <Copy size={16} />
                    )}
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
