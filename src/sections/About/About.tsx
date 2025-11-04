import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function About() {
  return (
    <section id="about" className="relative isolate py-20 sm:py-28 lg:py-32 scroll-mt-[6.5rem] md:scroll-mt-[7.5rem]">
      <div className="aurora aurora-about" aria-hidden />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow=""
          title="A social software engineer"
          description="Hi, I'm Philip — a frontend developer based in Stockholm, Sweden. I’m passionate about creating digital experiences that feel simple, fast and meaningful. I love turning ideas into products that people actually enjoy using, and I’m always pushing myself to learn, explore and build better. My goal is to craft interfaces that make a real difference."
          align="center"
        />
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
