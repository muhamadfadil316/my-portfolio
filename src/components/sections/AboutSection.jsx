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
                <div key={stat.label} className="glass rounded-xl p-4">
                  <p className="font-display font-bold text-2xl gradient-text">{stat.value}</p>
                  <p className="text-text-dim text-sm mt-1">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Right — skills */}
          <div className="space-y-4">
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">Core Skills</p>
            {skills.map((skill) => (
              <div key={skill.name} className="glass rounded-xl p-4 hover:border-accent/30 transition-all duration-200 group">
                <div className="flex items-center justify-between mb-2">
                  <div className="flex items-center gap-3">
                    <span className="text-xl">{skill.icon}</span>
                    <span className="font-medium text-sm text-text">{skill.name}</span>
                  </div>
                  <span className="font-mono text-xs text-text-dim">{skill.level}%</span>
                </div>
                <div className="h-1.5 bg-border rounded-full overflow-hidden">
                  <div
                    className="h-full rounded-full transition-all duration-1000 group-hover:opacity-100"
                    style={{
                      width: `${skill.level}%`,
                      background: `linear-gradient(90deg, ${skill.color}, ${skill.color}99)`,
                    }}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
