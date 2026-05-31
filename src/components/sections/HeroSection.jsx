import { ArrowDown, Github, Linkedin, Mail, MapPin } from "lucide-react";
import { profile, techStack } from "../../data";
import { useTypingEffect } from "../../hooks/useTypingEffect";

const typingTexts = [
  "Social Media Specialist",
  "Video Editor",
  "Data Analyst",
  "AI Engineer",
  "Public Speaker",
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
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-[28rem] h-[28rem] bg-accent/12 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "4s" }}
        />
        <div
          className="absolute bottom-1/3 right-1/4 w-80 h-80 bg-accent-2/10 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "6s", animationDelay: "1s" }}
        />
        <div
          className="absolute top-1/2 right-1/3 w-64 h-64 bg-sky-500/5 rounded-full blur-3xl animate-pulse"
          style={{ animationDuration: "8s", animationDelay: "2s" }}
        />
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(rgba(79,140,255,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,140,255,1) 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/20 rounded-full mb-6">
              <MapPin size={12} className="text-accent" />
              <span className="font-mono text-xs text-accent">{profile.location}</span>
              {profile.available && (
                <>
                  <span className="w-px h-3 bg-border" />
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="font-mono text-xs text-green-400">Open to work</span>
                </>
              )}
            </div>

            <h1 className="font-display font-semibold text-5xl md:text-6xl lg:text-7xl text-text mb-4 leading-[0.95] tracking-tight">
              {nameParts[0]} <span className="gradient-text">{nameParts.slice(1).join(" ")}</span>
            </h1>

            <p className="text-accent-2 font-medium mb-4 uppercase tracking-[0.22em] text-xs">
              {profile.tagline}
            </p>

            <div className="h-8 mb-6">
              <p className="font-mono text-lg text-text-dim">
                <span className="text-accent-2">{"> "}</span>
                {typedText}
                <span className="animate-pulse text-accent">|</span>
              </p>
            </div>

            <p className="text-text-dim text-base leading-relaxed mb-8 max-w-lg">
              {profile.bio}
            </p>

            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => handleScroll("#expertise")}
                className="px-6 py-3 bg-accent text-white font-medium rounded-full shadow-[0_18px_40px_rgba(79,140,255,0.24)] hover:bg-accent/90 transition-all duration-200 active:scale-95"
              >
                Explore Expertise
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-3 glass text-text font-medium rounded-full hover:border-accent/40 transition-all duration-200 active:scale-95"
              >
                Contact Me
              </button>
            </div>

            <div className="flex flex-wrap items-center gap-4">
              {[
                {
                  icon: <Github size={18} />,
                  href: profile.github,
                  label: "GitHub",
                },
                {
                  icon: <Linkedin size={18} />,
                  href: profile.linkedin,
                  label: "LinkedIn",
                },
                {
                  icon: <Mail size={18} />,
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
                  className="p-2.5 text-text-dim hover:text-accent hover:bg-accent/10 rounded-xl border border-border hover:border-accent/30 transition-all duration-200"
                >
                  {s.icon}
                </a>
              ))}
              <div className="h-px flex-1 bg-gradient-to-r from-border to-transparent max-w-24" />
              <span className="font-mono text-xs text-text-dim">{profile.email}</span>
            </div>
          </div>

          <div className="relative flex justify-center items-center">
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border border-accent/30 glow-purple relative z-10 shadow-[0_30px_80px_rgba(0,0,0,0.35)]">
                <img
                  src="/profile.JPEG"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: "50% 20%" }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-bg/70 via-bg/10 to-transparent" />
              </div>
              <div
                className="absolute inset-[-12px] rounded-full border border-dashed border-accent/20"
                style={{ animationDuration: "20s" }}
              />
            </div>

            <div className="absolute top-0 left-0 z-20 -translate-x-10 translate-y-6 glass rounded-2xl px-4 py-3 max-w-56 border border-border/70 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-dim">Focus</p>
              <p className="mt-1 text-sm text-text">AI, web, media, and communication</p>
            </div>

            <div className="absolute bottom-0 right-0 z-20 translate-x-10 -translate-y-4 glass rounded-2xl px-4 py-3 max-w-48 border border-border/70 shadow-[0_16px_40px_rgba(0,0,0,0.22)]">
              <p className="font-mono text-[11px] tracking-[0.2em] uppercase text-text-dim">Impact</p>
              <p className="mt-1 text-sm text-text">20+ hosted events</p>
            </div>
          </div>
        </div>

        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="font-mono text-xs text-text-dim mb-4 tracking-[0.3em] uppercase">Tech Stack</p>
          <div className="flex flex-wrap gap-2">
            {techStack.map((t) => (
              <span
                key={t}
                className="px-3 py-1 bg-surface border border-border/80 rounded-full text-xs text-text-dim hover:text-accent hover:border-accent/40 transition-colors font-mono"
              >
                {t}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-12 flex justify-center">
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-text-dim hover:text-accent transition-colors"
          >
            <span className="font-mono text-xs tracking-[0.28em] uppercase">scroll down</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
