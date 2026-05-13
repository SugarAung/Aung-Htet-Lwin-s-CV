import { Reveal } from "@/components/ui/reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <section id="experience" className="py-24 px-4 sm:px-6 lg:px-8 bg-card">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Experience
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        <div className="relative">
          {/* Vertical line */}
          <div className="absolute left-4 top-2 bottom-2 w-px bg-border hidden sm:block" />

          <div className="flex flex-col gap-10">
            {experience.map((job, i) => (
              <Reveal key={`${job.company}-${i}`} delay={i * 0.07}>
                <div className="sm:pl-12 relative">
                  {/* Timeline dot */}
                  <div
                    className={`absolute left-0 top-1.5 size-8 rounded-full border-2 hidden sm:flex items-center justify-center ${
                      job.current
                        ? "border-primary bg-primary"
                        : "border-border bg-card"
                    }`}
                  >
                    <span
                      className={`size-2.5 rounded-full ${
                        job.current ? "bg-primary-foreground" : "bg-muted-foreground/40"
                      }`}
                    />
                  </div>

                  <div className="bg-muted/40 rounded-2xl border border-border p-6">
                    {/* Header */}
                    <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-4">
                      <div>
                        <h3 className="text-base font-semibold text-foreground">
                          {job.title}
                        </h3>
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {job.company} · {job.location}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 shrink-0">
                        <span className="text-xs font-medium text-muted-foreground whitespace-nowrap">
                          {job.period}
                        </span>
                        {job.current && (
                          <span className="inline-flex items-center px-2 py-0.5 rounded-full text-[11px] font-medium bg-green-900/30 text-green-400 border border-green-800/50">
                            Current
                          </span>
                        )}
                      </div>
                    </div>

                    {/* Bullets */}
                    <ul className="flex flex-col gap-2">
                      {job.bullets.map((bullet, j) => (
                        <li key={j} className="flex gap-3 text-sm text-muted-foreground leading-relaxed">
                          <span className="mt-2 size-1.5 rounded-full bg-primary/40 shrink-0" />
                          {bullet}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
