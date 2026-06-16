export const styles = {
  container: "w-full max-w-[1200px] mx-auto px-4 py-16",
  backLink: "inline-flex items-center gap-2 text-sm text-[var(--text-soft)] hover:text-white transition-colors mb-10",
  gridContainer: "grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20",

  // Left Column (Images)
  leftColumn: "flex flex-col gap-4",
  mainImageContainer: "group relative w-full aspect-[4/5] md:aspect-square bg-[var(--surface-raised)] rounded-[2rem] overflow-hidden border border-[var(--border)] cursor-zoom-in",
  mainImage: "object-contain p-4 transition-transform duration-300 group-hover:scale-105",
  navButtonLeft: "absolute top-[50%] left-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all duration-300 z-10",
  navButtonRight: "absolute top-[50%] right-4 -translate-y-1/2 w-10 h-10 flex items-center justify-center rounded-full bg-black/20 hover:bg-black/40 text-white backdrop-blur-md transition-all duration-300 z-10",
  noImage: "absolute inset-0 flex items-center justify-center text-[var(--text-faint)] uppercase tracking-widest text-sm",

  // Thumbnails
  thumbnailContainer: "flex gap-4 overflow-x-auto pb-2 scrollbar-hide justify-center",
  thumbnailButtonBase: "cursor-pointer relative w-20 h-20 md:w-24 md:h-24 flex-shrink-0 rounded-xl overflow-hidden border-2 transition-all duration-300",
  thumbnailActive: "border-[#d8cbe3] opacity-100",
  thumbnailInactive: "border-transparent opacity-50 hover:opacity-100 hover:scale-105",
  thumbnailImage: "object-contain p-2 bg-[var(--surface-raised)]",

  // Right Column (Info)
  rightColumn: "flex flex-col justify-center",
  category: "text-[var(--text-soft)] tracking-[0.2em] uppercase text-xs font-normal mb-3",
  title: "font-[var(--font-cormorant)] text-3xl text-white italic mb-4",
  price: "text-5xl text-[var(--text-soft)] mb-8",
  divider: "w-12 h-px bg-[var(--border-strong)] mb-8",
  description: "text-[var(--text-muted)] leading-relaxed mb-10 font-light",

  // Actions
  actionContainer: "flex flex-col sm:flex-row gap-4 mt-auto md:mt-0",
  waButton: "flex-1 bg-[#8a7e94] text-white hover:bg-[#6e6378] transition-colors py-4 px-8 rounded-full text-center text-xs tracking-widest uppercase font-semibold",

  // Extra Details
  detailsContainer: "mt-12 pt-8 border-t border-[var(--border)] flex flex-col gap-4 text-sm text-[var(--text-soft)]",
  detailRow: "flex justify-between items-center py-2 border-b border-[var(--border)]/50",
  detailLabel: "uppercase tracking-widest text-xs",
  detailValue: "font-light",

  // Modal
  modalContainer: "fixed inset-0 z-[100] flex items-center justify-center bg-black/90 backdrop-blur-sm p-4 md:p-12 cursor-zoom-out",
  modalCloseBtn: "absolute top-6 right-6 text-white/70 hover:text-white transition-colors",
  modalImageWrapper: "relative w-full h-full max-w-5xl",
  modalImage: "object-contain",
};
