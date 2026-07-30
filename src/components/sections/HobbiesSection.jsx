import { hobbies, musicFavorites } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'
import { Disc3, Music2 } from 'lucide-react'

export function HobbiesSection() {
  const equalizerHeights = [28, 56, 42, 68, 34, 78, 48, 60, 32, 72, 38, 54, 66, 44, 58, 76, 36, 62, 40, 50]

  return (
    <SectionWrapper id="hobbies" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <SectionTitle
          label="Hobbies"
          title="Di luar coding..."
          subtitle="Hal-hal yang bikin saya tetap waras dan terinspirasi."
        />

        <div className="grid md:grid-cols-2 gap-12">
          {/* Hobbies grid */}
          <div>
            <p className="font-mono text-xs text-accent tracking-[0.3em] uppercase mb-6">Aktivitas & Hobi</p>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="glass rounded-xl p-4 border border-border/60 bg-surface/35 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <div className="mb-3 h-px w-10 bg-gradient-to-r from-accent/70 to-transparent" aria-hidden="true" />
                  <h3 className="font-display font-semibold text-sm text-text group-hover:text-accent transition-colors">
                    {hobby.name}
                  </h3>
                  <p className="text-text-dim text-xs mt-0.5">{hobby.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* Music */}
          <div>
            <div className="flex items-center gap-2 mb-6">
              <Disc3 size={15} className="text-accent" />
              <p className="font-mono text-xs text-accent tracking-widest uppercase">Musik Favorit</p>
            </div>
            <div className="space-y-3">
              {musicFavorites.map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 flex items-center gap-4 border border-border/60 bg-surface/35 hover:border-accent/30 hover:translate-x-1 transition-all duration-200 group"
                >
                  <div
                    className="relative w-14 h-14 rounded-2xl overflow-hidden flex-shrink-0 border border-white/10 shadow-[0_16px_32px_rgba(0,0,0,0.28)]"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(i * 47) % 360}, 42%, 24%), hsl(${(i * 47 + 120) % 360}, 36%, 12%))`,
                    }}
                  >
                    <div
                      className="absolute inset-0 opacity-70"
                      style={{
                        background:
                          'radial-gradient(circle at 30% 28%, rgba(255,255,255,0.18), transparent 34%), radial-gradient(circle at 70% 78%, rgba(255,255,255,0.06), transparent 38%)',
                      }}
                    />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/12 bg-white/6 backdrop-blur-sm shadow-[inset_0_1px_0_rgba(255,255,255,0.18)]">
                        <Music2 size={18} className="text-white/90 drop-shadow-[0_1px_1px_rgba(0,0,0,0.35)]" />
                      </div>
                    </div>
                    <div className="absolute -right-1 -top-1 h-5 w-5 rounded-full bg-white/10 blur-[1px]" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium text-sm text-text truncate">{item.title}</p>
                    <p className="text-text-dim text-xs">{item.artist}</p>
                  </div>
                  <div className="flex flex-col items-end gap-1">
                    <span className="px-2 py-0.5 bg-surface border border-border text-text-dim text-xs rounded-full">
                      {item.genre}
                    </span>
                    <span className="font-mono text-xs" style={{ color: `hsl(${(i * 47 + 180) % 360}, 70%, 65%)` }}>
                      {item.mood}
                    </span>
                  </div>
                </div>
              ))}
            </div>

            {/* Equalizer bars decoration */}
            <div className="mt-6 flex items-end gap-1 h-8">
              {equalizerHeights.map((height, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-gradient-to-t from-accent/30 to-accent/70"
                  style={{
                    height: `${height}%`,
                    animationDelay: `${i * 0.05}s`,
                  }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  )
}
