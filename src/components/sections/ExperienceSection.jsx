import { experiences } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

const typeColors = {
  Organisasi: '#4F8CFF',
  Komunitas: '#5AAEFA',
  Magang: '#6BCBFF',
  Prestasi: '#8FD5E8',
  Kepanitiaan: '#A6C8FF',
  Program: '#7EA1C4',
}

export function ExperienceSection() {
  return (
    <SectionWrapper id="experience" className="py-24 px-6">
      <div className="max-w-3xl mx-auto">
        <SectionTitle
          label="Experience"
          title="Perjalanan & Pengalaman"
          subtitle="Organisasi, kepanitiaan, magang, dan pencapaian yang pernah saya jalani."
        />

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px timeline-line" />

          <div className="space-y-8">
            {experiences.map((exp, idx) => (
              <div key={exp.id} className="relative flex gap-6 group">
                {/* Dot */}
                <div
                  className="relative z-10 flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center bg-bg transition-all duration-300 group-hover:scale-110"
                  style={{ borderColor: exp.color, boxShadow: `0 0 12px ${exp.color}40` }}
                >
                  <div className="w-2 h-2 rounded-full" style={{ background: exp.color }} />
                </div>

                {/* Content */}
                <div className="flex-1 glass rounded-xl p-5 border border-border/60 bg-surface/35 hover:border-accent/20 transition-all duration-300 group-hover:-translate-x-0">
                  <div className="flex flex-wrap items-start justify-between gap-2 mb-2">
                    <div>
                      <h3 className="font-display font-semibold text-base text-text">{exp.role}</h3>
                      <p className="text-text-dim text-sm">{exp.org}</p>
                    </div>
                    <div className="flex items-center gap-2 flex-wrap">
                      <span
                        className="px-2 py-0.5 text-xs font-mono rounded-full border"
                        style={{
                          color: typeColors[exp.type] || exp.color,
                          borderColor: `${typeColors[exp.type] || exp.color}40`,
                          background: `${typeColors[exp.type] || exp.color}10`,
                        }}
                      >
                        {exp.type}
                      </span>
                      <span className="font-mono text-xs text-text-dim">{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-text-dim text-sm leading-relaxed">{exp.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
