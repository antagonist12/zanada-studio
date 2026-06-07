export const styles = {
  card: "group relative rounded-xl overflow-hidden border border-[var(--border)] bg-[var(--surface-raised)] cursor-pointer",

  imageWrapper: "relative h-64 bg-[var(--surface-muted)] flex items-center justify-center overflow-hidden",
  image: "object-contain",
  imagePlaceholder: "flex flex-col items-center gap-2",
  imagePlaceholderText: "text-[var(--text-faint)] text-xs tracking-widest uppercase",

  overlay: "absolute inset-0 bg-[var(--surface)]/95 flex flex-col items-center justify-center gap-3 opacity-0 group-hover:opacity-100 transition-opacity duration-300 p-5",
  overlayName: "font-[var(--font-cormorant)] italic text-[var(--cream)] text-lg text-center tracking-wide",
  overlayDivider: "w-6 h-px bg-[var(--border-strong)]",
  overlayPrice: "text-[var(--cream-muted)] text-xs tracking-widest",
  overlayActions: "flex flex-col gap-2 w-full mt-2",
  overlayBtnDetail: "w-full border border-[var(--border-strong)] text-[var(--text-soft)] text-xs tracking-widest uppercase py-2 rounded-md hover:border-[var(--gold)] hover:text-[var(--gold)] transition-colors text-center",
  overlayBtnWa: "w-full bg-[var(--sage-dark)] border border-[var(--sage-deep)] text-[var(--sage-soft)] text-xs tracking-widest uppercase py-2 rounded-md text-center hover:bg-[var(--sage-deep)] transition-colors",

  info: "px-4 py-3 border-t border-[var(--border)]",
  infoName: "font-[var(--font-cormorant)] italic text-[var(--text-soft)] text-sm tracking-wide",
  infoPrice: "text-[var(--cream)] text-xs tracking-wider mt-1",
};