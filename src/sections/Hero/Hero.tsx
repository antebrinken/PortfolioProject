import Container from '../../components/Container'

export default function Hero() {
  return (
    <section id="hero" className="relative isolate min-h-screen py-20 sm:py-32 flex items-center scroll-mt-[6.5rem] md:scroll-mt-[7.5rem]">
      <div className="aurora aurora-hero" aria-hidden />
      <Container className="relative z-10">
        <div className="mx-auto max-w-3xl text-center scroll-mt-[6.5rem] md:scroll-mt-[7.5rem]" data-section-anchor>
          <h1 className="text-4xl font-bold tracking-tight sm:text-6xl text-balance">Software engineer</h1>
          <p className="mt-6 text-base leading-7 sm:text-lg sm:leading-8 text-[#EDEDED]/85 text-balance">
            Driven by passion, curiosity and impact.
          </p>
        </div>
        <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <a
            href="#contact"
            className="rounded-lg bg-white text-black px-5 py-2.5 text-sm font-medium shadow hover:bg-white/90 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
          >
            Work with me
          </a>
          <a
            href="/cv/Philip-Antebrink-CV.pdf"
            download
            className="rounded-lg border border-[#ffffff26] px-5 py-2.5 text-sm font-medium text-[#EDEDED] hover:border-white/40 hover:bg-white/5 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/30"
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
