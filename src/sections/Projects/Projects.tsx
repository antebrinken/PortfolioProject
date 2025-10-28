import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Projects() {
  return (
    <section className="relative isolate py-24 sm:py-32">
      <div className="aurora aurora-projects" aria-hidden />
      <Container className="relative z-10">
        {/* Anchor element so heading appears at top on nav jump */}
        <div id="projects" className="h-0 scroll-mt-24 md:scroll-mt-32" />
        <SectionHeading
          eyebrow=""
          title="Selected Projects"
          description="A snapshot of things I’ve designed and built."
          align="center"
        />

        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-2 max-w-5xl mx-auto">
          {/* The Last TODO project */}
          <div className="rounded-xl border border-white/15 p-6 hover:border-white/30 transition">
            <div className="text-sm text-[#EDEDED]/60">Web App</div>
            <div className="mt-2 text-lg font-semibold">The Last Todo</div>
            {/* Browser-style device chrome with full-bleed preview */}
            <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-black/50">
              <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/5 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <div className="mx-auto h-5 w-1/2 rounded bg-white/10" />
              </div>
              <div className="aspect-[16/9] w-full">
                <img
                  src="/projects/lasttodopng.png"
                  alt="Screenshot preview of The Last TODO app"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-[#EDEDED]/70">
              One of my last school projects before my internship started, a clean and responsive Todo application. Source at
              {' '}<a className="underline hover:text-[#EDEDED]" href="https://github.com/Medieinstitutet/fed24s-the-last-todo-antebrinken" target="_blank" rel="noreferrer">github.com/Medieinstitutet/fed24s-the-last-todo-antebrinken</a>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#EDEDED]/80">
              <span className="rounded-md border border-white/20 px-2 py-1">React</span>
              <span className="rounded-md border border-white/20 px-2 py-1">TypeScript</span>
              <span className="rounded-md border border-white/20 px-2 py-1">Tailwind</span>
            </div>
          </div>

          {/* The Zoo project */}
          <div className="rounded-xl border border-white/15 p-6 hover:border-white/30 transition">
            <div className="text-sm text-[#EDEDED]/60">Website</div>
            <div className="mt-2 text-lg font-semibold">The Zoo</div>
            {/* Browser-style device chrome with full-bleed preview */}
            <div className="mt-3 overflow-hidden rounded-lg border border-white/10 bg-black/50">
              <div className="flex h-9 items-center gap-2 border-b border-white/10 bg-white/5 px-3">
                <span className="h-2.5 w-2.5 rounded-full bg-red-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-yellow-400/80" />
                <span className="h-2.5 w-2.5 rounded-full bg-green-400/80" />
                <div className="mx-auto h-5 w-1/2 rounded bg-white/10" />
              </div>
              <div className="aspect-[16/9] w-full">
                <img
                  src="/projects/zooapp.png"
                  alt="Screenshot preview of The Zoo website"
                  className="h-full w-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
            <p className="mt-3 text-sm text-[#EDEDED]/70">
              A school assignment exploring layout, accessibility, and clean UI for a zoo-themed site. Source at{' '}
              <a
                className="underline hover:text-[#EDEDED]"
                href="https://github.com/Medieinstitutet/fed24s-the-zoo-antebrinken"
                target="_blank"
                rel="noreferrer"
              >
                github.com/Medieinstitutet/fed24s-the-zoo-antebrinken
              </a>.
            </p>
            <div className="mt-4 flex flex-wrap items-center gap-2 text-xs text-[#EDEDED]/80">
              <span className="rounded-md border border-white/20 px-2 py-1">React</span>
              <span className="rounded-md border border-white/20 px-2 py-1">TypeScript</span>
              <span className="rounded-md border border-white/20 px-2 py-1">REST API</span>
            </div>
          </div>
        </div>
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
