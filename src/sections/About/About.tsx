import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative isolate overflow-hidden py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="About Me"
          title="Engineer with a product mindset"
          description="I value clarity, iteration, and impact. I work across the stack, collaborate closely with design, and aim for maintainable solutions that ship."
          align="center"
        />
      </Container>
      <span aria-hidden="true" className="glow glow--about" />
    </section>
  )
}
