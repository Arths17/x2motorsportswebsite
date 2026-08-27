export default function Footer() {
  return (
    <footer className="border-t border-line px-6 md:px-10 py-8">
      <div className="mx-auto max-w-5xl flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
        <span className="font-display italic">X2 Motorsports</span>
        <a
          href="https://instagram.com/x2motorsports"
          target="_blank"
          rel="noreferrer noopener"
          className="hover:text-ink transition-colors min-h-11 flex items-center"
        >
          @x2motorsports
        </a>
        <span>© 2026 X2 Motorsports. Independent team.</span>
      </div>
    </footer>
  );
}
