type ProductVisualProps = { kind: 'playup' | 'sd13' | 'infinity' | 'web' | 'mobile' | 'systems'; compact?: boolean }

const config = {
  playup: { title: 'Find your next game', eyebrow: 'PLAYUP · DISCOVER', accent: '#9bd54b', stats: ['12 games today', '8 venues nearby', 'Join a team'], nav: ['Discover', 'Games', 'Venues'] },
  sd13: { title: 'Academy overview', eyebrow: 'SD13 · ADMIN', accent: '#60c5ad', stats: ['128 athletes', '24 sessions', '92% attendance'], nav: ['Overview', 'Athletes', 'Schedule'] },
  infinity: { title: 'Facility operations', eyebrow: 'INFINITY · FINANCE', accent: '#75a7ed', stats: ['JOD 8,420 revenue', '36 bookings', '12 invoices'], nav: ['Dashboard', 'Bookings', 'Finance'] },
  web: { title: 'A clearer web experience', eyebrow: 'WEB PLATFORMS · 01', accent: '#9bd54b', stats: ['Designed for clarity', 'Fast by default', 'Ready to grow'], nav: ['Overview', 'Solutions', 'Contact'] },
  mobile: { title: 'Every step, in your pocket', eyebrow: 'MOBILE PRODUCTS · 02', accent: '#60c5ad', stats: ['Discover', 'Book a session', 'Stay connected'], nav: ['Home', 'Explore', 'Profile'] },
  systems: { title: 'One view of your business', eyebrow: 'BUSINESS SYSTEMS · 03', accent: '#75a7ed', stats: ['Live operations', 'Clear reporting', 'Less manual work'], nav: ['Dashboard', 'Reports', 'Settings'] },
}

export default function ProductVisual({ kind, compact = false }: ProductVisualProps) {
  const item = config[kind]
  return (
    <div className={`relative h-full min-h-[220px] overflow-hidden bg-[#e8eef0] p-4 text-[#183b57] sm:p-6 ${compact ? 'min-h-[190px]' : ''}`}>
      <div className="mx-auto flex h-full max-w-[520px] flex-col overflow-hidden rounded-xl border border-[#cbd7dc] bg-[#f9fbfa] shadow-[0_18px_45px_-25px_rgba(18,47,69,.45)]">
        <div className="flex items-center gap-1.5 border-b border-[#e3e9e8] px-3 py-2">
          <i className="h-2 w-2 rounded-full bg-[#e5a49b]"/><i className="h-2 w-2 rounded-full bg-[#e4c27c]"/><i className="h-2 w-2 rounded-full bg-[#91c49a]"/>
          <span className="ml-2 h-4 flex-1 rounded bg-[#edf1f0]" />
        </div>
        <div className="grid min-h-0 flex-1 grid-cols-[76px_1fr] sm:grid-cols-[100px_1fr]">
          <aside className="border-r border-[#e3e9e8] bg-[#f2f6f5] p-2 sm:p-3">
            <div className="mb-4 h-5 w-8 rounded" style={{ backgroundColor: item.accent }} />
            {item.nav.map((nav, i) => <div key={nav} className={`mb-2 truncate rounded-md px-2 py-1.5 text-[8px] sm:text-[9px] ${i === 0 ? 'bg-white font-semibold shadow-sm' : 'text-[#71818a]'}`}>{nav}</div>)}
          </aside>
          <main className="min-w-0 p-3 sm:p-4">
            <p className="text-[7px] font-bold tracking-[.16em] text-[#80919a] sm:text-[8px]">{item.eyebrow}</p>
            <div className="mt-1 flex items-center justify-between gap-2"><h3 className="truncate text-[13px] font-bold sm:text-base">{item.title}</h3><span className="h-5 w-5 shrink-0 rounded-full" style={{ backgroundColor: item.accent }} /></div>
            <div className="mt-3 grid grid-cols-3 gap-1.5 sm:gap-2">{item.stats.map((stat, i) => <div key={stat} className="rounded-md border border-[#e3e9e8] bg-white p-1.5 sm:p-2"><div className="h-1 w-5 rounded" style={{ backgroundColor: item.accent, opacity: .8 - i * .12 }} /><p className="mt-1.5 text-[7px] leading-tight text-[#576b77] sm:text-[8px]">{stat}</p></div>)}</div>
            <div className="mt-3 flex h-[54px] items-end gap-1 rounded-md border border-[#e3e9e8] bg-white px-3 pt-2 sm:h-[70px]">{[32,53,40,72,48,82,60,95,67,78,56,88].map((height, i) => <span key={i} className="flex-1 rounded-t-sm" style={{ height: `${height}%`, backgroundColor: item.accent, opacity: .35 + (i % 4) * .15 }} />)}</div>
          </main>
        </div>
      </div>
    </div>
  )
}
