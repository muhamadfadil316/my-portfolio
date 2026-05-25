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

  const handleScroll = (href) => {
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden"
    >
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div
          className="absolute top-1/4 left-1/4 w-96 h-96 bg-accent/10 rounded-full blur-3xl animate-pulse"
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
        {/* Grid overlay */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `linear-gradient(rgba(79,142,247,1) 1px, transparent 1px), linear-gradient(90deg, rgba(79,142,247,1) 1px, transparent 1px)`,
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="relative max-w-6xl mx-auto px-6 pt-32 pb-20">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Left content */}
          <div>
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-accent/10 border border-accent/25 rounded-full mb-6">
              <MapPin size={12} className="text-accent" />
              <span className="font-mono text-xs text-accent">
                {profile.location}
              </span>
              {profile.available && (
                <>
                  <span className="w-px h-3 bg-border" />
                  <span className="relative flex h-2 w-2">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                    <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                  </span>
                  <span className="font-mono text-xs text-green-400">
                    Open to work
                  </span>
                </>
              )}
            </div>

            {/* Name */}
            <h1 className="font-display font-bold text-5xl md:text-6xl lg:text-7xl text-text mb-4 leading-none tracking-tight">
              {profile.name.split(" ")[0]}{" "}
              <span className="gradient-text">
                {profile.name.split(" ").slice(1).join(" ")}
              </span>
            </h1>

            {/* Typing text */}
            <div className="h-8 mb-6">
              <p className="font-mono text-lg text-text-dim">
                <span className="text-accent-2">{"> "}</span>
                {typedText}
                <span className="animate-pulse text-accent">|</span>
              </p>
            </div>

            {/* Bio */}
            <p className="text-text-dim text-base leading-relaxed mb-8 max-w-lg">
              {profile.bio}
            </p>

            {/* CTAs */}
            <div className="flex flex-wrap gap-3 mb-10">
              <button
                onClick={() => handleScroll("#expertise")}
                className="px-6 py-3 bg-accent text-white font-medium rounded-xl hover:bg-accent/90 hover:shadow-lg hover:shadow-accent/25 transition-all duration-200 active:scale-95"
              >
                Lihat Expertise
              </button>
              <button
                onClick={() => handleScroll("#contact")}
                className="px-6 py-3 glass text-text font-medium rounded-xl hover:border-accent/40 transition-all duration-200 active:scale-95"
              >
                Hubungi Saya
              </button>
            </div>

            {/* Social links */}
            <div className="flex items-center gap-4">
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
              <span className="font-mono text-xs text-text-dim">
                {profile.email}
              </span>
            </div>
          </div>

          {/* Right — avatar + floating cards */}
          <div className="relative flex justify-center items-center">
            {/* Avatar ring */}
            <div className="relative">
              <div className="w-72 h-72 md:w-80 md:h-80 rounded-full overflow-hidden border-2 border-accent/30 glow-blue relative z-10">
                <img
                  src="../../../public/profile.jpeg"
                  alt={profile.name}
                  className="w-full h-full object-cover"
                  style={{ objectPosition: '50% 20%' }}
                />
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-bg/60 to-transparent" />
              </div>
              {/* Rotating ring */}
              <div
                className="absolute inset-[-12px] rounded-full border border-dashed border-accent/20 animate-spin"
                style={{ animationDuration: "20s" }}
              />
            </div>

            {/* Floating cards */}
            <div
              className="absolute top-4 -left-4 glass rounded-xl px-3 py-2 animate-bounce"
              style={{ animationDuration: "3s" }}
            >
              <p className="font-mono text-xs text-accent">📱 2 Expertise Areas</p>
            </div>
            <div
              className="absolute bottom-0 right-0 glass rounded-xl px-3 py-2 animate-bounce"
              style={{ animationDuration: "3.5s", animationDelay: "0.5s" }}
            >
              <p className="font-mono text-xs text-sky-400">🎙️ 20+ MC Events</p>
            </div>
          </div>
        </div>

        {/* Tech stack strip */}
        <div className="mt-16 pt-8 border-t border-border/50">
          <p className="font-mono text-xs text-text-dim mb-4 tracking-widest uppercase">
            Tech Stack
          </p>
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

        {/* Scroll indicator */}
        <div className="mt-12 flex justify-center">
          <button
            onClick={() => handleScroll("#about")}
            className="flex flex-col items-center gap-2 text-text-dim hover:text-accent transition-colors animate-bounce"
            style={{ animationDuration: "2s" }}
          >
            <span className="font-mono text-xs">scroll down</span>
            <ArrowDown size={16} />
          </button>
        </div>
      </div>
    </section>
  );
}
