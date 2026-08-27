export default function Footer() {
  return (
    <footer className="border-t border-telemetry/20 px-6 md:px-12 py-8">
      <div className="mx-auto max-w-6xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <span className="font-display uppercase tracking-[0.15em] text-sm">
          X2 <span className="text-livery">Motorsports</span>
        </span>
        <a
          href="https://instagram.com/x2motorsports"
          target="_blank"
          rel="noreferrer noopener"
          className="font-tel text-xs tracking-[0.15em] uppercase text-telemetry hover:text-paper transition-colors"
        >
          @x2motorsports
        </a>
        <span className="font-tel text-xs text-telemetry">
          © 2026 X2 Motorsports. Independent team.
        </span>
      </div>
    </footer>
  );
}
