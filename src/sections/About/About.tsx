import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative isolate py-24 sm:py-32 scroll-mt-28 md:scroll-mt-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Engineer with a product mindset"
          description="I value clarity, iteration, and impact. I work across the stack, collaborate closely with design, and aim for maintainable solutions that ship."
          align="center"
        />
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
