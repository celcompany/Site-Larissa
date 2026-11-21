import Link from "next/link";

export function Eyebrow({
  children,
  className = "",
  onDark = false,
}: {
  children: React.ReactNode;
  className?: string;
  onDark?: boolean;
}) {
  return (
    <p className={`text-[11px] font-semibold uppercase tracking-[0.3em] ${onDark ? "text-brand-gold" : "text-brand-bronze"} ${className}`}>
      {children}
    </p>
  );
}

type ButtonProps = {
  href: string;
  children: React.ReactNode;
  variant?: "primary" | "outline" | "outlineLight" | "link" | "light" | "gold";
  external?: boolean;
  /** Permite quebra de linha (botões em colunas estreitas). */
  allowWrap?: boolean;
  className?: string;
};

const styles = {
  primary:
    "inline-flex items-center justify-center gap-3 rounded-sm bg-brand-dark px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-white transition-colors duration-300 hover:bg-brand-bronze",
  outline:
    "inline-flex items-center justify-center gap-3 rounded-sm border border-brand-dark px-8 py-[15px] text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark transition-colors duration-300 hover:bg-brand-dark hover:text-white",
  outlineLight:
    "inline-flex items-center justify-center gap-3 rounded-sm border border-stone-500 px-8 py-[15px] text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-cream transition-colors duration-300 hover:border-brand-cream hover:bg-brand-cream hover:text-brand-dark",
  gold:
    "inline-flex items-center justify-center gap-3 rounded-sm bg-brand-gold px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark transition-colors duration-300 hover:bg-brand-cream",
  light:
    "inline-flex items-center justify-center gap-3 rounded-sm bg-brand-cream px-8 py-4 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark transition-colors duration-300 hover:bg-white",
  link:
    "group inline-flex items-center gap-2 border-b border-stone-400 pb-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-brand-dark transition-colors hover:border-brand-bronze hover:text-brand-bronze",
};

export function ButtonLink({ href, children, variant = "primary", external, allowWrap, className = "" }: ButtonProps) {
  const wrap = variant === "link" || allowWrap ? "text-center leading-relaxed" : "whitespace-nowrap";
  const cls = `${styles[variant]} ${wrap} ${className}`;
  const isExternal = external ?? href.startsWith("http");
  if (isExternal) {
    return (
      <a href={href} target="_blank" rel="noopener noreferrer" className={cls}>
        {children}
      </a>
    );
  }
  return (
    <Link href={href} className={cls}>
      {children}
    </Link>
  );
}

export function Arrow({ className = "" }: { className?: string }) {
  return (
    <span aria-hidden="true" className={`inline-block transition-transform duration-300 group-hover:translate-x-1 ${className}`}>
      →
    </span>
  );
}
