import { ExternalLink } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <section id="projects" className="py-24 px-4 sm:px-6 lg:px-8 bg-muted/30">
      <div className="max-w-6xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Projects
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-10" />
        </Reveal>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {projects.map((project, i) => (
            <Reveal key={project.title} delay={i * 0.07}>
              <div
                className={`flex flex-col h-full rounded-2xl border border-border bg-gradient-to-br ${project.gradient} overflow-hidden`}
              >
                {/* Card header */}
                <div className="p-6 flex-1">
                  <h3 className="text-base font-semibold text-foreground leading-snug mb-3">
                    {project.title}
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed mb-5">
                    {project.description}
                  </p>
                  {/* Tech badges */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="inline-flex items-center px-2 py-0.5 rounded-md text-xs font-medium bg-card/70 text-foreground border border-border"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card footer */}
                <div className="px-6 pb-6">
                  <a
                    href={project.gitlab}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`inline-flex items-center gap-1.5 text-sm font-medium ${project.accentColor} hover:underline`}
                  >
                    <ExternalLink className="size-3.5" />
                    View on GitLab
                  </a>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
