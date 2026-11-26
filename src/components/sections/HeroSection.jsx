import { ArrowDown, ArrowUpRight, Github, Linkedin, Mail, MapPin, Sparkles } from "lucide-react";
import { profile, techStack } from "../../data";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const typingTexts = [
  "AI Engineer",
  "Public Speaker",
  "MC & Moderator",
  "AI for Business",
  "Machine Learning Enthusiast",
  "Content Creator",
];

export function HeroSection() {
  const typedText = useTypingEffect(typingTexts, 75, 2200);
  const nameParts = profile.name.split(" ");

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="hero" className="relative isolate min-h-screen overflow-hidden">
      <div className="pointer-events-none absolute inset-0">
        <div
          className="absolute -left-40 top-20 h-[26rem] w-[26rem] rounded-full bg-accent/10 blur-3xl"
        />
        <div
          className="absolute -right-36 top-1/3 h-96 w-96 rounded-full bg-accent-2/5 blur-3xl"
        />
        <div
          className="absolute inset-0 opacity-[0.035]"
          style={{
            backgroundImage: "linear-gradient(rgba(198,168,117,1) 1px, transparent 1px), linear-gradient(90deg, rgba(198,168,117,1) 1px, transparent 1px)",
            backgroundSize: "72px 72px",
            maskImage: "linear-gradient(to bottom, black, transparent 85%)",
          }}
        />
      </div>

      <div className="relative mx-auto max-w-6xl px-5 pb-14 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr] lg:gap-16">
          <div className="max-w-2xl">
            <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-accent/25 bg-accent/8 px-3.5 py-2">
              <Sparkles size={14} className="text-accent" />
              <span className="font-mono text-[10px] tracking-[0.2em] text-accent sm:text-xs">
                AI ENGINEER <span className="mx-1.5 text-accent/50">/</span> COMMUNICATOR
              </span>
            </div>

            <h1 className="mb-5 font-display text-[2.65rem] font-semibold leading-[1.03] tracking-[-0.055em] text-text sm:text-6xl lg:text-7xl">
              {nameParts[0]}<br />
              <span className="gradient-text">{nameParts.slice(1).join(" ")}</span>
            </h1>

            <p className="mb-5 max-w-xl text-sm leading-7 text-text-dim sm:text-base">
              {profile.bio}
            </p>

            <p className="mb-3 text-xs font-medium uppercase tracking-[0.16em] text-accent-2 sm:text-sm">
              {profile.tagline}
            </p>
            <div className="mb-7 min-h-6">
              <p className="font-mono text-xs text-text-dim sm:text-sm">
                <span className="text-accent">{typedText}</span>
                <span className="ml-1 animate-pulse text-accent-2">|</span>
              </p>
            </div>

            <div className="mb-8 flex flex-col gap-3 sm:flex-row">
              <button
                onClick={() => handleScroll("#expertise")}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-accent px-6 py-3 font-semibold text-[#17130d] shadow-[0_14px_36px_rgba(198,168,117,0.18)] transition-all duration-200 hover:-translate-y-0.5 hover:bg-accent-2 active:scale-[0.98] sm:w-auto"
              >
                Explore my work <ArrowUpRight size={17} />
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="inline-flex min-h-12 items-center justify-center rounded-full border border-border bg-white/[0.03] px-6 py-3 font-medium text-text transition-all duration-200 hover:border-accent/50 hover:bg-white/[0.06] active:scale-[0.98] sm:w-auto"
              >
                Contact Me
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              {[
                {
                  icon: <Github size={17} />,
                  href: profile.github,
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={17} />,
                  href: profile.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={17} />,
                  href: `mailto:${profile.email}`,
                  label: "Email",
                },
              ].map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  title={s.label}
                  aria-label={s.label}
                  className="rounded-full border border-border bg-white/[0.025] p-2.5 text-text-dim transition-all duration-200 hover:border-accent/40 hover:bg-accent/10 hover:text-accent"
                >
                  {s.icon}
                </a>
              ))}
              <div className="hidden h-px w-8 bg-border sm:block" />
              <div className="inline-flex items-center gap-2 text-xs text-text-dim">
                <MapPin size={13} className="text-accent" />
                {profile.location}
                {profile.available && (
                  <span className="ml-1 inline-flex items-center gap-1.5 text-emerald-200">
                    <span className="h-1.5 w-1.5 rounded-full bg-emerald-300" />
                    Available
                  </span>
                )}
              </div>
            </div>
          </div>

          <div className="relative mx-auto flex w-full max-w-[25rem] items-center justify-center lg:ml-auto">
            <div className="absolute inset-5 rounded-full bg-accent/10 blur-3xl" />
            <div className="relative w-full">
              <div className="absolute -inset-3 rounded-[2.25rem] border border-dashed border-accent/25" />
              <div className="glow-purple relative z-10 aspect-[4/4.7] overflow-hidden rounded-[2rem] border border-accent/25 bg-surface shadow-[0_30px_80px_rgba(0,0,0,0.45)]">
                <img
                  src="/profile.JPEG"
                  alt={profile.name}
                  className="h-full w-full object-cover"
                  style={{ objectPosition: "50% 18%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg via-bg/5 to-transparent" />
                <div className="absolute left-4 top-4 rounded-full border border-white/15 bg-bg/70 px-3 py-1.5 font-mono text-[10px] tracking-[0.16em] text-accent-2 backdrop-blur-md">
                  JAKARTA, INDONESIA
                </div>
                <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-4 p-5 sm:p-6">
                  <div>
                    <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-accent-2/80">Building with purpose</p>
                    <p className="mt-1 font-display text-2xl font-semibold text-white sm:text-3xl">Ideas into impact.</p>
                  </div>
                  <div className="shrink-0 rounded-2xl border border-white/15 bg-bg/65 px-3 py-2 text-right backdrop-blur-md">
                    <p className="font-display text-xl font-semibold text-accent-2">50+</p>
                    <p className="font-mono text-[9px] uppercase tracking-[0.12em] text-text-dim">events hosted</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-14 border-t border-border/70 pt-6 sm:mt-16 sm:flex sm:items-start sm:gap-8">
          <p className="mb-4 shrink-0 font-mono text-[10px] uppercase tracking-[0.24em] text-text-dim sm:mb-0 sm:pt-2">
            A few tools I use
          </p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span key={t} className="rounded-full border border-border/80 bg-white/[0.025] px-3 py-1.5 font-mono text-[10px] text-text-dim transition-colors hover:border-accent/40 hover:text-accent-2 sm:text-xs">
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <button
            onClick={() => handleScroll("#about")}
            className="flex items-center gap-2 text-text-dim transition-colors hover:text-accent"
          >
            <span className="font-mono text-[10px] uppercase tracking-[0.22em]">Discover more</span>
            <ArrowDown size={14} />
          </button>
        </div>
      </div>
    </section>
  );
}
