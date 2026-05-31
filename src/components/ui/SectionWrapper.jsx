import { useScrollReveal } from '../../hooks/useScrollReveal'

export function SectionWrapper({ id, children, className = '' }) {
  const { ref, isVisible } = useScrollReveal()

  return (
    <section
      id={id}
      ref={ref}
      className={`transition-all duration-600 ${
        isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
      } ${className}`}
    >
      {children}
    </section>
  )
}

export function SectionTitle({ label, title, subtitle }) {
  return (
    <div className="mb-12 max-w-3xl">
      <div className="flex items-center gap-3 mb-4">
        <span className="h-px w-8 bg-gradient-to-r from-accent to-accent-2" />
        <p className="font-mono text-xs text-accent tracking-[0.35em] uppercase">
          {label}
        </p>
      </div>
      <h2 className="font-display font-semibold text-3xl md:text-4xl lg:text-5xl tracking-tight text-text mb-3">
        {title}
      </h2>
      {subtitle && (
        <p className="text-text-dim text-base leading-relaxed max-w-2xl">{subtitle}</p>
      )}
    </div>
  )
}
