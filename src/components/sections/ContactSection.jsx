import { useState } from 'react'
import { Github, Instagram, Linkedin, Mail, MessageCircle, Send, MapPin, CheckCircle } from 'lucide-react'
import { profile } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

export function ContactSection() {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [sent, setSent] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const mailto = `mailto:${profile.email}?subject=Pesan dari ${form.name}&body=${encodeURIComponent(`Nama: ${form.name}\nEmail: ${form.email}\n\n${form.message}`)}`
    window.open(mailto, '_blank')
    setSent(true)
    setForm({ name: '', email: '', message: '' })
    setTimeout(() => setSent(false), 4000)
  }

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

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left - socials */}
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
              <a
                key={s.label}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 glass rounded-xl p-4 hover:border-accent/30 hover:translate-x-1 transition-all duration-200 group"
              >
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
              </a>
            ))}
          </div>

          {/* Right - form */}
          <div className="glass rounded-2xl p-8">
            <h3 className="font-display font-semibold text-lg text-text mb-6">Kirim Pesan</h3>

            {sent ? (
              <div className="flex flex-col items-center justify-center py-12 gap-3">
                <CheckCircle size={40} className="text-green-400" />
                <p className="text-text font-medium">Pesan terkirim!</p>
                <p className="text-text-dim text-sm text-center">Email client Anda akan terbuka. Terima kasih telah menghubungi saya.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block font-mono text-xs text-text-dim mb-2 tracking-wide">Nama</label>
                  <input
                    type="text"
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    placeholder="Nama lengkap Anda"
                    className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-dim mb-2 tracking-wide">Email</label>
                  <input
                    type="email"
                    required
                    value={form.email}
                    onChange={(e) => setForm({ ...form, email: e.target.value })}
                    placeholder="email@example.com"
                    className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim focus:outline-none focus:border-accent/60 transition-colors"
                  />
                </div>
                <div>
                  <label className="block font-mono text-xs text-text-dim mb-2 tracking-wide">Pesan</label>
                  <textarea
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) => setForm({ ...form, message: e.target.value })}
                    placeholder="Halo! Saya ingin..."
                    className="w-full px-4 py-3 bg-bg border border-border rounded-xl text-text text-sm placeholder-text-dim focus:outline-none focus:border-accent/60 transition-colors resize-none"
                  />
                </div>
                <button
                  type="submit"
                  className="w-full flex items-center justify-center gap-2 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/20 transition-all duration-200 active:scale-95"
                >
                  <Send size={16} /> Kirim Pesan
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
