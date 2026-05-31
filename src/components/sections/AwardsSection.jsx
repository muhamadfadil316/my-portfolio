import { Award } from 'lucide-react'
import { awards } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

export function AwardsSection() {
  return (
    <SectionWrapper id="awards" className="py-24 px-6">
      <div className="max-w-4xl mx-auto">
        <SectionTitle
          label="Awards"
          title="PENGHARGAAN"
          subtitle="Ruang khusus untuk satu award utama agar mudah dipresentasikan di portofolio."
        />

        <div className="grid gap-6">
          {awards.map((award) => (
            <div key={award.title} className="glass rounded-2xl p-6 border border-border/60 bg-surface/35 hover:border-accent/30 transition-all duration-300 shadow-[0_18px_45px_rgba(0,0,0,0.16)]">
              <div className="relative h-80 md:h-[30rem] mb-5 overflow-hidden rounded-xl border border-border/60">
                <img
                  src={award.image}
                  alt={award.title}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 28%' }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/30 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-1 rounded-full bg-bg/70 backdrop-blur-sm border border-border/60 text-xs font-mono text-text-dim">
                  {award.date}
                </div>
              </div>

              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-4">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center flex-shrink-0">
                    <Award size={22} className="text-accent" />
                  </div>
                  <div>
                    <h3 className="font-display font-semibold text-xl text-text">{award.title}</h3>
                    <p className="text-text-dim text-sm mt-1">{award.issuer}</p>
                  </div>
                </div>

                <span className="inline-flex items-center self-start px-3 py-1 rounded-full border border-accent/20 bg-accent/10 text-accent text-xs font-mono">
                  {award.date}
                </span>
              </div>

              <p className="text-text-dim text-sm leading-relaxed mt-5">
                {award.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}