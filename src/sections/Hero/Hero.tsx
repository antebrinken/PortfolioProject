import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-[80vh] py-24 sm:py-32 flex items-center scroll-mt-28 md:scroll-mt-32">
      <Container>
        <SectionHeading
          title="Philip Antebrink"
          description="A software engineer driven by passion, curiosity and impact."
          align="center"
        />

      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
