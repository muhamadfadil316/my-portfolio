import { expertiseAreas } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

export function ExpertiseSection() {
  return (
    <SectionWrapper id="expertise" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Expertise"
          title="Bidang yang saya kuasai"
          subtitle="Daftar bidang yang saya suka dan saya kembangkan secara konsisten dalam aktivitas, acara, dan proyek."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {expertiseAreas.map((item) => (
            <div key={item.title} className="glass rounded-2xl p-6 border border-border/60 bg-surface/35 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 group">
              <h3 className="font-display font-semibold text-lg text-text group-hover:text-accent transition-colors mb-3">
                {item.title}
              </h3>
              <p className="text-text-dim text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  )
}