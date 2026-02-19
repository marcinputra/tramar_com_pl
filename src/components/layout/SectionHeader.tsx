type Props = {
  kicker?: string
  title: string
  desc?: string
}

export function SectionHeader({ kicker, title, desc }: Props) {
  return (
    <div className="max-w-3xl">
      {kicker ? <div className="section-kicker">{kicker}</div> : null}
      <h2 className="mt-2 section-title text-xl font-bold">{title}</h2>
      {desc ? <p className="mt-3 text-sm sm:text-base text-zinc-700 leading-relaxed">{desc}</p> : null}
      <div className="mt-5 h-1 w-16 bg-signal rounded" />
    </div>
  )
}
