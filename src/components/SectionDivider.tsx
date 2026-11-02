export default function SectionDivider({
  label,
  light = false,
}: {
  label?: string;
  light?: boolean;
}) {
  return (
    <div className="flex flex-col items-center gap-3">
      <div className="flex items-center gap-4">
        <span className="h-px w-16 sm:w-24 gold-rule" />
        <img
          alt=""
          aria-hidden="true"
          className="h-8 w-auto opacity-90 drop-shadow-[0_1px_4px_rgba(0,0,0,0.15)]"
          src="/images/divider.png"
        />
        <span className="h-px w-16 sm:w-24 gold-rule" />
      </div>
      {label && (
        <span
          className={`font-display text-xs sm:text-sm tracking-[0.35em] uppercase ${
            light ? 'text-gold-light/90' : 'text-gold-dark'
          }`}
        >
          {label}
        </span>
      )}
    </div>
  );
}

