import { Check, Star, MapPin } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { roadmap, type RoadmapMilestone } from "@/lib/data";

function NodeIcon({ status, highlight }: { status: RoadmapMilestone["status"]; highlight?: boolean }) {
  if (highlight) {
    return (
      <div className="relative flex items-center justify-center size-10 rounded-full bg-gradient-to-br from-yellow-400 to-amber-500 shadow-lg shadow-amber-500/30 ring-4 ring-amber-400/20">
        <Star className="size-5 text-white fill-white" />
      </div>
    );
  }
  if (status === "current") {
    return (
      <div className="relative flex items-center justify-center size-10 rounded-full bg-primary shadow-lg shadow-primary/40 ring-4 ring-primary/20">
        <span className="absolute size-10 rounded-full bg-primary/40 animate-ping" />
        <MapPin className="size-5 text-primary-foreground" />
      </div>
    );
  }
  if (status === "done") {
    return (
      <div className="flex items-center justify-center size-10 rounded-full bg-card border-2 border-primary/60">
        <Check className="size-5 text-primary" strokeWidth={2.5} />
      </div>
    );
  }
  // future
  return (
    <div className="flex items-center justify-center size-10 rounded-full bg-muted border-2 border-dashed border-border">
      <span className="size-2 rounded-full bg-border" />
    </div>
  );
}

function MilestoneCard({ milestone, index }: { milestone: RoadmapMilestone; index: number }) {
  const isRight = index % 2 === 0;
  const isFuture = milestone.status === "future";

  const card = (
    <div
      className={`flex-1 max-w-sm ${
        isFuture
          ? "opacity-50"
          : milestone.highlight
          ? "opacity-100"
          : "opacity-90"
      }`}
    >
      <div
        className={`p-4 rounded-xl border transition-colors ${
          milestone.highlight
            ? "bg-gradient-to-br from-amber-950/50 to-yellow-950/30 border-amber-700/30"
            : milestone.status === "current"
            ? "bg-accent border-primary/30"
            : isFuture
            ? "bg-muted/40 border-dashed border-border"
            : "bg-card border-border"
        }`}
      >
        {milestone.highlight && (
          <span className="inline-block text-[9px] font-semibold uppercase tracking-widest text-amber-400 mb-1">
            ★ Milestone
          </span>
        )}
        {milestone.status === "current" && !milestone.highlight && (
          <span className="inline-block text-[9px] font-semibold uppercase tracking-widest text-primary mb-1">
            ◉ Now
          </span>
        )}
        {isFuture && (
          <span className="inline-block text-[9px] font-semibold uppercase tracking-widest text-muted-foreground mb-1">
            ↗ Target
          </span>
        )}
        <p
          className={`text-sm font-semibold leading-snug ${
            milestone.highlight
              ? "text-amber-300"
              : milestone.status === "current"
              ? "text-foreground"
              : isFuture
              ? "text-muted-foreground"
              : "text-foreground"
          }`}
        >
          {milestone.title}
        </p>
        <p className="text-xs text-muted-foreground mt-1 leading-relaxed">
          {milestone.subtitle}
        </p>
      </div>
    </div>
  );

  const yearLabel = (
    <div className="flex-1 max-w-sm flex items-start justify-end pt-2.5">
      <span
        className={`text-xs font-mono font-semibold ${
          isFuture ? "text-muted-foreground/50" : "text-muted-foreground"
        }`}
      >
        {milestone.year}
      </span>
    </div>
  );

  return (
    <Reveal delay={0.08 + index * 0.1}>
      {/* Desktop: alternating left/right */}
      <div className="hidden md:flex items-start gap-6">
        {isRight ? (
          <>
            {yearLabel}
            <div className="flex flex-col items-center gap-0 shrink-0">
              <NodeIcon status={milestone.status} highlight={milestone.highlight} />
            </div>
            {card}
          </>
        ) : (
          <>
            {card}
            <div className="flex flex-col items-center gap-0 shrink-0">
              <NodeIcon status={milestone.status} highlight={milestone.highlight} />
            </div>
            {yearLabel}
          </>
        )}
      </div>

      {/* Mobile: left-aligned */}
      <div className="flex md:hidden items-start gap-4">
        <div className="flex flex-col items-center shrink-0">
          <NodeIcon status={milestone.status} highlight={milestone.highlight} />
        </div>
        <div className="flex-1 pb-2">
          <p className={`text-xs font-mono mb-1 ${isFuture ? "text-muted-foreground/50" : "text-muted-foreground"}`}>
            {milestone.year}
          </p>
          {card}
        </div>
      </div>
    </Reveal>
  );
}

export function Roadmap() {
  return (
    <section id="roadmap" className="py-24 px-4 sm:px-6 lg:px-8 bg-background">
      <div className="max-w-4xl mx-auto">
        <Reveal>
          <h2 className="text-2xl sm:text-3xl font-bold text-foreground mb-2">
            Career Roadmap
          </h2>
          <div className="w-12 h-1 bg-primary rounded-full mb-2" />
          <p className="text-sm text-muted-foreground mb-12">
            From graduation to Kubestronaut — and where the path leads next.
          </p>
        </Reveal>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical connector line (desktop) */}
          <div className="hidden md:block absolute left-1/2 -translate-x-1/2 top-5 bottom-5 w-px bg-border/50" />

          {/* Vertical connector line (mobile) */}
          <div className="md:hidden absolute left-5 top-5 bottom-5 w-px bg-border/50" />

          <div className="flex flex-col gap-8">
            {roadmap.map((milestone, i) => (
              <MilestoneCard key={`${milestone.year}-${milestone.title}`} milestone={milestone} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
