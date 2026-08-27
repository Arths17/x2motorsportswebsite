type Stat = { label: string; value: string };

type TelemetryStripProps = {
  variant: "orange" | "teal";
  stats: Stat[];
  align?: "left" | "right";
  dense?: boolean;
};

export default function TelemetryStrip({
  variant,
  stats,
  align = "left",
  dense = false,
}: TelemetryStripProps) {
  const accent = variant === "orange" ? "text-livery" : "text-solar";
  const line = variant === "orange" ? "bg-livery" : "bg-solar";
  const border = variant === "orange" ? "border-livery/40" : "border-solar/40";

  if (dense) {
    return (
      <div
        className={`w-full border-y ${border} bg-graphite/60`}
        aria-hidden="true"
      >
        <div className="mx-auto max-w-6xl px-6 md:px-12 flex flex-wrap gap-x-10 gap-y-2 py-3">
          {stats.map((s) => (
            <div key={s.label} className="flex items-baseline gap-2">
              <span className="font-tel text-[10px] tracking-[0.2em] text-telemetry uppercase">
                {s.label}
              </span>
              <span className={`font-tel text-sm ${accent}`}>{s.value}</span>
            </div>
          ))}
        </div>
      </div>
    );
  }

  const stat = stats[0];
  return (
    <div className="w-full px-6 md:px-12" aria-hidden="true">
      <div
        className={`mx-auto max-w-6xl flex items-center gap-4 py-3 ${
          align === "right" ? "flex-row-reverse" : ""
        }`}
      >
        <span className={`font-tel text-[11px] tracking-[0.2em] ${accent}`}>
          {stat.label}
        </span>
        <span className={`h-px flex-1 ${line} opacity-30`} />
        <span className="font-tel text-[11px] tracking-[0.2em] text-telemetry">
          {stat.value}
        </span>
      </div>
    </div>
  );
}
