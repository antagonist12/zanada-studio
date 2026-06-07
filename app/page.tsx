import CatalogGrid from "@/components/catalog/CatalogGrid/CatalogGrid";

export default function Home() {
  return (
    <>
      <section className="bg-[var(--surface-raised)] py-20 md:py-24 text-center border-b border-[var(--border)] overflow-hidden">
        <div className="pointer-events-none w-8 h-px bg-[var(--border-strong)] mx-auto mb-5" />
        <h1 className="italic text-[var(--cream)] text-4xl tracking-wide" style={{ fontFamily: "var(--font-cormorant)" }}>
          Wear what you mean.
        </h1>
        <p className="text-[var(--text-faint)] text-xs tracking-widest uppercase mt-4">
          Local craft — limited, intentional.
        </p>
        <div className="w-8 h-px bg-[var(--border-strong)] mx-auto mt-5" />
      </section>

      {/* <section className="relative bg-surface-raised py-20 md:py-24 text-center border-b border-border overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 opacity-40"
          style={{
            background:
              "radial-gradient(ellipse 80% 60% at 50% 0%, color-mix(in srgb, var(--gold) 18%, transparent), transparent 70%)",
          }}
        />
        <div className="relative">
          <div className="w-10 h-px bg-gold/70 mx-auto mb-6" />
          <h1 className="font-display italic font-normal text-text text-5xl md:text-6xl tracking-tight leading-[1.1]">
            Wear what you mean.
          </h1>
          <p className="font-sans text-sage-soft/80 text-[11px] tracking-[0.2em] uppercase mt-5 font-normal">
            Local craft — limited, intentional.
          </p>
          <div className="w-10 h-px bg-border mx-auto mt-6" />
        </div>
      </section> */}

      <CatalogGrid />
    </>
  );
}
