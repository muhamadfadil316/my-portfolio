import { useState } from 'react'
import { X, Calendar, FolderGit2, ArrowUpRight } from 'lucide-react'
import { projects } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

function Modal({ project, onClose }) {
  if (!project) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl border border-border/60 bg-surface/35"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-6">
          <div className="flex items-start justify-between gap-3 mb-3">
            <div className="flex items-center gap-2 flex-wrap">
              <span className="px-2 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-mono rounded-full">
                {project.category}
              </span>
              <span className="flex items-center gap-1 text-text-dim text-xs font-mono">
                <Calendar size={11} /> {project.date}
              </span>
            </div>
            <button
              onClick={onClose}
              className="p-2 bg-bg/70 text-text hover:bg-bg rounded-full transition-colors border border-border/60 shrink-0"
            >
              <X size={18} />
            </button>
          </div>
          <h3 className="font-display font-bold text-xl text-text mb-2">{project.title}</h3>
          <p className="text-text-dim text-sm leading-relaxed">{project.description}</p>

          {project.tech?.length > 0 && (
            <div className="flex flex-wrap gap-2 mt-4">
              {project.tech.map((t) => (
                <span
                  key={t}
                  className="px-2 py-0.5 text-xs font-mono rounded-full border border-border/60 text-text-dim bg-surface/40"
                >
                  {t}
                </span>
              ))}
            </div>
          )}

          {project.link && (
            <a
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 mt-5 px-4 py-2 bg-accent/10 border border-accent/25 text-accent text-sm font-medium rounded-full hover:bg-accent/15 transition-all duration-200"
            >
              Lihat Proyek <ArrowUpRight size={15} />
            </a>
          )}
        </div>
      </div>
    </div>
  )
}

export function ProjectsSection() {
  const [selectedProject, setSelectedProject] = useState(null)

  return (
    <>
      <SectionWrapper id="projects" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Portfolio"
            title="Proyek yang Saya Buat"
            subtitle="Kumpulan karya dan proyek yang pernah saya kerjakan — dari web development hingga data mining."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {projects.map((project) => (
              <div
                key={project.id}
                className="glass rounded-2xl p-5 cursor-pointer group border border-border/60 bg-surface/35 hover:border-accent/30 hover:-translate-y-1 transition-all duration-300 flex flex-col"
                onClick={() => setSelectedProject(project)}
              >
                <div className="flex items-start justify-between gap-3 mb-3">
                  <div className="p-2.5 bg-accent/10 border border-accent/20 rounded-xl group-hover:bg-accent/15 transition-colors">
                    <FolderGit2 size={20} className="text-accent" />
                  </div>
                  <span className="flex items-center gap-1 text-text-dim text-[11px] font-mono">
                    <Calendar size={10} /> {project.date}
                  </span>
                </div>
                <p className="font-mono text-xs text-accent mb-1">{project.category}</p>
                <h3 className="font-display font-semibold text-base text-text">{project.title}</h3>
                <p className="text-text-dim text-xs mt-1.5 line-clamp-3">{project.description}</p>

                {project.tech?.length > 0 && (
                  <div className="flex flex-wrap gap-1.5 mt-3 pt-3 border-t border-border/40">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="px-2 py-0.5 text-[10px] font-mono rounded-full border border-border/60 text-text-dim bg-surface/40"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Modal project={selectedProject} onClose={() => setSelectedProject(null)} />
    </>
  )
}
