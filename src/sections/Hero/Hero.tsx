import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate overflow-hidden min-h-[80vh] py-24 sm:py-32 flex items-center">
      <Container>
        <SectionHeading
          title="Software Engineer"
          description="Driven by passion, curiosity and impact."
          align="center"
        />

      </Container>
      <span aria-hidden="true" className="glow glow--hero" />
    </section>
  )
}
