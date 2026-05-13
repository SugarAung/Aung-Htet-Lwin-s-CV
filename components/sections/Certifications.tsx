import { Award, Star } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { certifications } from "@/lib/data";

const colorMap: Record<string, { bg: string; text: string; border: string }> = {
  blue:   { bg: "bg-accent",           text: "text-accent-foreground", border: "border-border" },
  orange: { bg: "bg-orange-900/30",    text: "text-orange-400",        border: "border-orange-800/40" },
  purple: { bg: "bg-purple-900/30",    text: "text-purple-400",        border: "border-purple-800/40" },
  sky:    { bg: "bg-sky-900/30",       text: "text-sky-400",           border: "border-sky-800/40" },
  red:    { bg: "bg-red-900/30",       text: "text-red-400",           border: "border-red-800/40" },
  gray:   { bg: "bg-muted",            text: "text-muted-foreground",  border: "border-border" },
};

export function Certifications() {
  const featured = certifications.find((c) => c.featured);
  const rest = certifications.filter((c) => !c.featured);

  return (
    <section id="certifications" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Certifications
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        {/* Kubestronaut featured card */}
        {featured && (
          <Reveal delay={0.05}>
            <div className="mb-8 rounded-2xl bg-gradient-to-br from-blue-600 to-indigo-700 p-8 text-white relative overflow-hidden">
              {/* Decorative circles */}
              <div className="absolute -top-8 -right-8 size-40 rounded-full bg-white/5" />
              <div className="absolute -bottom-12 -left-8 size-56 rounded-full bg-white/5" />

              <div className="relative flex flex-col sm:flex-row sm:items-center gap-6">
                <div className="flex items-center justify-center size-20 rounded-2xl bg-white/10 shrink-0">
                  <Star className="size-10 text-yellow-300 fill-yellow-300" />
                </div>
                <div>
                  <div className="flex items-center gap-2 mb-1">
                    <span className="text-xs font-semibold uppercase tracking-widest text-blue-200">
                      Top Achievement
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold mb-1">{featured.name}</h3>
                  <p className="text-blue-100 text-sm mb-2">
                    {featured.issuer} · {featured.date}
                  </p>
                  <p className="text-sm text-blue-100 leading-relaxed max-w-xl">
                    Awarded to engineers who hold all five core Kubernetes certifications (CKA, CKAD, CKS, KCNA, KCSA) — one of fewer than 1,000 holders globally.
                  </p>
                </div>
              </div>
            </div>
          </Reveal>
        )}

        {/* Kubernetes certs highlight */}
        <Reveal delay={0.08}>
          <div className="mb-8 p-5 rounded-2xl bg-accent border border-border">
            <p className="text-xs font-semibold uppercase tracking-widest text-accent-foreground mb-3">
              Kubernetes Certifications — All 5
            </p>
            <div className="flex flex-wrap gap-2">
              {rest
                .filter((c) => c.color === "blue")
                .map((c) => (
                  <span
                    key={c.name}
                    className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg text-sm font-medium bg-card text-accent-foreground border border-border"
                  >
                    <Award className="size-3.5 shrink-0" />
                    {c.name.replace(/Certified /g, "").split(" (")[0]}
                    <span className="text-blue-400 text-xs">· {c.date}</span>
                  </span>
                ))}
            </div>
          </div>
        </Reveal>

        {/* All other certs grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {rest
            .filter((c) => c.color !== "blue")
            .map((cert, i) => {
              const colors = colorMap[cert.color] ?? colorMap.gray;
              return (
                <Reveal key={cert.name} delay={0.1 + i * 0.04}>
                  <div
                    className={`flex items-start gap-3 p-4 rounded-xl border ${colors.bg} ${colors.border}`}
                  >
                    <Award className={`size-5 mt-0.5 shrink-0 ${colors.text}`} />
                    <div>
                      <p className={`text-sm font-semibold leading-snug ${colors.text}`}>
                        {cert.name}
                      </p>
                      <p className="text-xs text-muted-foreground mt-0.5">
                        {cert.issuer} · {cert.date}
                      </p>
                    </div>
                  </div>
                </Reveal>
              );
            })}
        </div>
      </div>
    </section>
  );
}
