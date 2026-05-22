import { useState } from 'react'
import { X, Calendar, Mic } from 'lucide-react'
import { mcEvents } from '../../data'
import { SectionWrapper, SectionTitle } from '../ui/SectionWrapper'

function Modal({ event, onClose }) {
  if (!event) return null
  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-bg/80 backdrop-blur-md"
      onClick={onClose}
    >
      <div
        className="glass rounded-2xl overflow-hidden max-w-lg w-full shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="relative h-64">
          <img src={event.image} alt={event.title} className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-t from-bg to-transparent" />
          <button
            onClick={onClose}
            className="absolute top-4 right-4 p-2 bg-bg/60 text-text hover:bg-bg rounded-full transition-colors"
          >
            <X size={18} />
          </button>
        </div>
        <div className="p-6">
          <div className="flex items-center gap-2 mb-3">
            <span className="px-2 py-1 bg-accent/10 border border-accent/20 text-accent text-xs font-mono rounded-full">
              {event.event}
            </span>
            <span className="flex items-center gap-1 text-text-dim text-xs font-mono">
              <Calendar size={11} /> {event.date}
            </span>
          </div>
          <h3 className="font-display font-bold text-xl text-text mb-2">{event.title}</h3>
          <p className="text-text-dim text-sm leading-relaxed">{event.description}</p>
        </div>
      </div>
    </div>
  )
}

export function MCSection() {
  const [selectedEvent, setSelectedEvent] = useState(null)

  return (
    <>
      <SectionWrapper id="mc" className="py-24 px-6">
        <div className="max-w-6xl mx-auto">
          <SectionTitle
            label="Public Speaking"
            title="Dokumentasi MC & Acara"
            subtitle="Pengalaman menjadi MC dan moderator di berbagai event kampus & nasional."
          />

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {mcEvents.map((event) => (
              <div
                key={event.id}
                className="glass rounded-2xl overflow-hidden cursor-pointer group hover:border-accent/30 hover:-translate-y-1 transition-all duration-300"
                onClick={() => setSelectedEvent(event)}
              >
                <div className="relative overflow-hidden h-48">
                  <img
                    src={event.image}
                    alt={event.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/40 to-transparent" />
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="p-3 bg-accent/20 backdrop-blur-sm border border-accent/40 rounded-full">
                      <Mic size={20} className="text-accent" />
                    </div>
                  </div>
                </div>
                <div className="p-4">
                  <p className="font-mono text-xs text-accent mb-1">{event.date}</p>
                  <h3 className="font-display font-semibold text-base text-text">{event.title}</h3>
                  <p className="text-text-dim text-xs mt-1 line-clamp-2">{event.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </SectionWrapper>

      <Modal event={selectedEvent} onClose={() => setSelectedEvent(null)} />
    </>
  )
}
