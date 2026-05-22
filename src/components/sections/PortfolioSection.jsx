import { ExternalLink, Github } from 'lucide-react'
import { projects } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

function ProjectCard({ project }) {
  return (
    <div className="glass rounded-2xl overflow-hidden group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300">
      <div className="relative overflow-hidden h-44">
        <img
          src={project.image}
          alt={project.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/60 to-transparent" />
        <div className="absolute top-3 left-3">
          <span className="px-2 py-1 bg-accent/20 border border-accent/30 text-accent text-xs font-mono rounded-full">
            {project.category}
          </span>
        </div>
        {project.featured && (
          <div className="absolute top-3 right-3">
            <span className="px-2 py-1 bg-accent-2/20 border border-accent-2/30 text-accent-2 text-xs font-mono rounded-full">
              ★ Featured
            </span>
          </div>
        )}
      </div>

      <div className="p-5">
        <h3 className="font-display font-bold text-lg text-text mb-2">{project.name}</h3>
        <p className="text-text-dim text-sm leading-relaxed mb-4">{project.description}</p>

        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.map((t) => (
            <span key={t} className="px-2 py-0.5 bg-surface border border-border text-text-dim text-xs font-mono rounded">
              {t}
            </span>
          ))}
        </div>

        <div className="flex gap-2 pt-2 border-t border-border/50">
          <a
            href={project.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 text-text-dim hover:text-text text-xs font-medium transition-colors"
          >
            <Github size={14} /> GitHub
          </a>
          <div className="w-px bg-border" />
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 flex items-center justify-center gap-2 py-2 text-accent hover:text-accent/80 text-xs font-medium transition-colors"
          >
            <ExternalLink size={14} /> Live Demo
          </a>
        </div>
      </div>
    </div>
  )
}

export function PortfolioSection() {
  return (
    <SectionWrapper id="portfolio" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Portfolio"
          title="Project yang saya bangun"
          subtitle="Kumpulan project yang pernah saya kerjakan — dari side project sampai kompetisi."
        />

        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <ProjectCard key={project.id} project={project} />
          ))}
        </div>

        <div className="mt-10 text-center">
          <a
            href="https://github.com/muhamadfadil316"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 glass border-accent/20 hover:border-accent/40 text-text-dim hover:text-accent text-sm font-medium rounded-xl transition-all duration-200"
          >
            <Github size={16} /> Lihat semua di GitHub
          </a>
        </div>
      </div>
    </SectionWrapper>
  )
}
