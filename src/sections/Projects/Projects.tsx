import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Projects() {
  return (
    <section id="projects" className="relative isolate py-24 sm:py-32 scroll-mt-28 md:scroll-mt-32">
      <Container>
        <SectionHeading
          eyebrow="Projects"
          title="Selected work"
          description="A snapshot of things I’ve designed, built, and shipped."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {/* TODO: Replace with real projects */}
          {[1, 2, 3].map((i) => (
            <div key={i} className="rounded-xl border border-white/15 p-6 hover:border-white/30 transition">
              <div className="text-sm text-white/60">Project {i}</div>
              <div className="mt-2 text-lg font-semibold">Project Title {i}</div>
              <p className="mt-2 text-sm text-white/70">Short description of the project, stack, and impact.</p>
            </div>
          ))}
        </div>
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
