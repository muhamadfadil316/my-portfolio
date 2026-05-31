import { profile, skills } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

export function AboutSection() {
  return (
    <SectionWrapper id="about" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="About Me"
          title="Siapa saya?"
          subtitle="Mahasiswa, developer, dan MC yang suka bikin hal-hal menarik."
        />

        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Left */}
          <div className="space-y-5">
            <p className="text-text-dim leading-relaxed">{profile.bio}</p>
            <p className="text-text-dim leading-relaxed">{profile.bioDetail}</p>

            <div className="grid grid-cols-2 gap-4 pt-4">
              {[
                { label: 'Expertise', value: '2' },
                { label: 'Events MC', value: '20+' },
                { label: 'Organisasi', value: '2' },
                { label: 'Cups of Coffee', value: '∞' },
              ].map((stat) => (
                <div key={stat.label} className="glass rounded-xl p-4 border border-border/60 bg-surface/50 shadow-[0_12px_30px_rgba(0,0,0,0.12)]">
                  <p className="font-display font-bold text-2xl gradient-text">{stat.value}</p>
                  <p className="text-text-dim text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">Core Skills</p>
            {skills.map((skill) => (
              <div
                key={skill.name}
                className="glass group relative overflow-hidden rounded-2xl border border-border/60 bg-surface/35 p-5 transition-all duration-300 hover:-translate-y-0.5 hover:border-accent/25"
                style={{ boxShadow: `inset 0 1px 0 rgba(255,255,255,0.03), 0 0 0 1px ${skill.color}14, 0 16px 40px rgba(0,0,0,0.18)` }}
              >
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-px opacity-70"
                  style={{ background: `linear-gradient(90deg, transparent, ${skill.color}, transparent)` }}
                  aria-hidden="true"
                />

                <div className="flex items-start justify-between gap-4 mb-3">
                  <div className="space-y-1">
                    <span className="block font-medium text-sm text-text tracking-wide">{skill.name}</span>
                    <span className="block text-[11px] uppercase tracking-[0.24em] text-text-dim">Capability</span>
                  </div>
                  <span
                    className="shrink-0 rounded-full border border-white/10 bg-white/5 px-3 py-1 font-mono text-xs text-text-dim"
                    style={{ boxShadow: `0 0 18px ${skill.color}12` }}
                  >
                    {skill.level}%
                  </span>
                </div>

                <div className="relative h-2 overflow-hidden rounded-full bg-white/5">
                  <div
                    className="relative h-full rounded-full transition-all duration-1000 group-hover:opacity-100"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}CC 0%, ${skill.color} 100%)`,
                      boxShadow: `0 0 18px ${skill.color}66`,
                    }}
                  >
                    <span
                      className="absolute right-0 top-1/2 h-3 w-3 -translate-y-1/2 translate-x-1/2 rounded-full border border-white/30 bg-white/70 opacity-0 transition-opacity duration-300 group-hover:opacity-100"
                      style={{ boxShadow: `0 0 12px ${skill.color}88` }}
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
