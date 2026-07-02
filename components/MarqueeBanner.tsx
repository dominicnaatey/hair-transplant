export default function MarqueeBanner() {
  const items = Array.from({ length: 16 }, (_, i) => i);

  return (
    <section className="w-full overflow-hidden py-6" style={{ background: '#F9F8F6', borderTop: '1px solid #e8e4dc', borderBottom: '1px solid #e8e4dc' }}>
      <div className="marquee-wrap">
        <div className="marquee-inner">
          {items.map((i) => (
            <div
              key={i}
              className="flex items-center gap-6 flex-shrink-0 px-6"
              style={{
                fontFamily: 'var(--font-chivo), Chivo, serif',
                fontSize: 'clamp(28px, 4vw, 48px)',
                fontWeight: 500,
                color: '#222222',
                letterSpacing: '-0.01em',
                lineHeight: '1.2',
                paddingBottom: '4px',
                whiteSpace: 'nowrap',
              }}
            >
              Service We Provide
              <span className="inline-block w-2 h-2 rounded-full bg-[#2458B3] flex-shrink-0" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
