import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'
import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiExpress,
  SiTailwindcss,
  SiVite,
  SiJest,
  SiMongodb,
  SiNextdotjs,
} from 'react-icons/si'

export default function TechStack() {
  const items = [
    { label: 'React', Icon: SiReact, blurb: 'Component-driven UI library' },
    { label: 'TypeScript', Icon: SiTypescript, blurb: 'Types for safer JS' },
    { label: 'Node.js', Icon: SiNodedotjs, blurb: 'Server-side JavaScript runtime' },
    { label: 'Express.js', Icon: SiExpress, blurb: 'Minimal Node web framework' },
    { label: 'Tailwind CSS', Icon: SiTailwindcss, blurb: 'Utility-first CSS' },
    { label: 'Vite', Icon: SiVite, blurb: 'Fast dev server and build' },
    { label: 'Jest', Icon: SiJest, blurb: 'Delightful JS testing' },
    { label: 'MongoDB', Icon: SiMongodb, blurb: 'Document database' },
    { label: 'Next.js', Icon: SiNextdotjs, blurb: 'React framework' },
  ]

  return (
    <section id="tech" className="relative isolate py-24 sm:py-32 scroll-mt-28 md:scroll-mt-32">
      <Container>
        <SectionHeading
          eyebrow=""
          title="The Tech Stack "
          description=""
          align="center"
        />

        {/* Single marquee row that pauses on hover */}
        <div className="mt-12">
          <div className="group relative overflow-hidden">
            <div
              className="flex w-max items-stretch gap-4 animate-marquee-right group-hover:[animation-play-state:paused]"
              style={{ ['--marquee-duration' as any]: '38s' }}
            >
              {[...items, ...items, ...items].map(({ label, Icon, blurb }, idx) => (
                <div key={`r1-${label}-${idx}`} className="relative group/item shrink-0">
                  <div className="rounded-xl border border-white/15 px-4 py-3 text-center transition hover:border-white/30 hover:bg-white/5">
                    <div className="mx-auto mb-1 flex h-10 w-10 items-center justify-center rounded-lg bg-white/5">
                      <Icon className="h-5 w-5 text-white" aria-hidden />
                    </div>
                    <div className="text-xs text-white/90">{label}</div>
                  </div>
                  <span
                    role="tooltip"
                    className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full whitespace-nowrap rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow transition-opacity duration-150 group-hover/item:opacity-100"
                  >
                    {blurb}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
