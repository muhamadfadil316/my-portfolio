import { hobbies, musicFavorites } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'
import { Music } from 'lucide-react'

export function HobbiesSection() {
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
            <p className="font-mono text-xs text-accent tracking-widest uppercase mb-6">Aktivitas & Hobi</p>
            <div className="grid grid-cols-2 gap-3">
              {hobbies.map((hobby) => (
                <div
                  key={hobby.name}
                  className="glass rounded-xl p-4 hover:border-accent/30 hover:-translate-y-0.5 transition-all duration-200 group"
                >
                  <span className="text-2xl mb-2 block">{hobby.icon}</span>
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
              <Music size={14} className="text-accent" />
              <p className="font-mono text-xs text-accent tracking-widest uppercase">Musik Favorit</p>
            </div>
            <div className="space-y-3">
              {musicFavorites.map((item, i) => (
                <div
                  key={i}
                  className="glass rounded-xl p-4 flex items-center gap-4 hover:border-accent/30 hover:translate-x-1 transition-all duration-200 group"
                >
                  {/* Fake album art */}
                  <div
                    className="w-12 h-12 rounded-lg flex-shrink-0 flex items-center justify-center text-xl"
                    style={{
                      background: `linear-gradient(135deg, hsl(${(i * 47) % 360}, 60%, 25%), hsl(${(i * 47 + 120) % 360}, 60%, 15%))`,
                    }}
                  >
                    🎵
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
              {Array.from({ length: 20 }).map((_, i) => (
                <div
                  key={i}
                  className="flex-1 rounded-sm bg-accent/40 animate-pulse"
                  style={{
                    height: `${Math.random() * 100}%`,
                    animationDelay: `${i * 0.05}s`,
                    animationDuration: `${0.8 + Math.random() * 0.8}s`,
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
