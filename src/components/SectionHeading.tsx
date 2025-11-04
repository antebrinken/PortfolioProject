type Props = {
  eyebrow?: string
  title: string
  description?: string
  align?: 'left' | 'center'
}

export default function SectionHeading({ eyebrow, title, description, align = 'left' }: Props) {
  const alignClass = align === 'center' ? 'text-center mx-auto' : ''
  const maxW = align === 'center' ? 'max-w-2xl' : 'max-w-3xl'
  return (
    <div className={`${maxW} ${alignClass} scroll-mt-[6.5rem] md:scroll-mt-[7.5rem]`} data-section-anchor>
      {eyebrow ? (
        <p className="mb-4 inline-block rounded-full border border-white/20 px-3 py-1 text-xs font-medium tracking-wider uppercase">
          {eyebrow}
        </p>
      ) : null}
      <h2 className="text-3xl font-bold tracking-tight sm:text-5xl">{title}</h2>
      {description ? (
        <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-[#EDEDED]/80">{description}</p>
      ) : null}
    </div>
  )
}
