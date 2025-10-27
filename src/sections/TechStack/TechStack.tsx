import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function TechStack() {
  const stack = [
    'React',
    'TypeScript',
    'Node.js',
    'Express',
    'PostgreSQL',
    'Prisma',
    'Tailwind CSS',
    'Vite',
    'Playwright',
    'Jest',
  ]

  return (
    <section id="tech" className="relative isolate overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Tech Stack"
          title="Tools I enjoy using"
          description="A pragmatic set of tools I know well and reach for often."
          align="center"
        />

        <div className="mt-12 flex flex-wrap gap-3 justify-center">
          {stack.map((item) => (
            <span key={item} className="rounded-md border border-white/20 px-3 py-1.5 text-sm">
              {item}
            </span>
          ))}
        </div>
      </Container>
      <span aria-hidden="true" className="glow glow--tech" />
    </section>
  )
}
