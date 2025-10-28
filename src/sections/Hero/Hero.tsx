import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-screen py-24 sm:py-32 flex items-center scroll-mt-28 md:scroll-mt-32">
      <div className="aurora aurora-hero" aria-hidden />
      <Container className="relative z-10">
        <SectionHeading
          title="Philip Antebrink"
          description="A software engineer driven by passion, curiosity and impact."
          align="center"
        />
        <div className="mt-8 flex items-center justify-center gap-3">
          <a
            href="#contact"
            className="rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium shadow hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Work with me
          </a>
          <a
            href="/cv/Philip-Antebrink-CV.pdf"
            download
            className="rounded-lg border border-white/20 px-5 py-2.5 text-sm font-medium text-[#EDEDED] hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
            title="Download my resume (PDF)"
            rel="noopener"
          >
            Download CV
          </a>
        </div>
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
