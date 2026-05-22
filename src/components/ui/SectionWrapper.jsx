import { useScrollReveal } from '../../hooks/useScrollReveal'

export function SectionWrapper({ id, children, className = '' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-700 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-12">
      <p className="font-mono text-xs text-accent tracking-widest uppercase mb-3">
        — {label}
      </p>
      <h2 className="font-display font-bold text-3xl md:text-4xl text-text mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-dim text-base max-w-xl">{subtitle}</p>
      )}
    </div>
  )
}
