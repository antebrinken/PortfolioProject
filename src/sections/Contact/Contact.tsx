import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <Container>
        <SectionHeading
          eyebrow="Contact"
          title="Let’s build something great"
          description="Open to collaborations, full‑time roles, and interesting problems."
          align="center"
        />

        <div className="mt-10 flex justify-center">
          <a
            href="mailto:you@example.com"
            className="inline-flex items-center justify-center rounded-lg border border-white/60 px-5 py-2.5 font-medium text-white transition hover:border-white hover:bg-white/10"
          >
            Email Me
          </a>
        </div>
      </Container>
    </section>
  )
}

