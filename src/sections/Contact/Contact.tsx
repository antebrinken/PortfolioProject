import Container from '../../components/Container'
import SectionHeading from '../../components/SectionHeading'

export default function Contact() {
  return (
    <section id="contact" className="relative isolate py-24 sm:py-32 scroll-mt-28 md:scroll-mt-32">
      <div className="aurora aurora-contact" aria-hidden />
      <Container className="relative z-10">
        <SectionHeading
          eyebrow=""
          title="Let's build something great"
          description="Open to collaborations, full-time roles, and interesting problems."
          align="center"
        />

        
        <p className="mt-8 text-center text-sm text-white/70"> Contact me on my socials</p>

        {/* Social icons */}
        <div className="mt-6 flex items-center justify-center gap-4">
          {/* Outlook / Email */}
          <div className="group relative">
            <a
              href="mailto:antebrinken@live.se"
              aria-label="Email via Outlook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.8"
                className="h-5 w-5"
              >
                <path d="M4 6a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2z"/>
                <path d="m22 7-8.97 5.98a2 2 0 0 1-2.06 0L2 7"/>
              </svg>
            </a>
            <span role="tooltip" className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
              Email
            </span>
          </div>

          {/* GitHub */}
          <div className="group relative">
            <a
              href="https://github.com/antebrinken"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path fillRule="evenodd" d="M12 .5a11.5 11.5 0 0 0-3.64 22.42c.58.11.79-.25.79-.56 0-.28-.01-1.03-.02-2.02-3.2.7-3.88-1.54-3.88-1.54-.53-1.35-1.3-1.71-1.3-1.71-1.06-.73.08-.72.08-.72 1.17.08 1.78 1.2 1.78 1.2 1.04 1.79 2.73 1.27 3.4.97.11-.76.41-1.27.74-1.56-2.55-.29-5.23-1.28-5.23-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.46.11-3.04 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.58.23 2.75.11 3.04.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.42.36.79 1.08.79 2.18 0 1.57-.01 2.83-.01 3.22 0 .31.21.67.8.56A11.5 11.5 0 0 0 12 .5Z" clipRule="evenodd"/>
              </svg>
            </a>
            <span role="tooltip" className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
              GitHub
            </span>
          </div>

          {/* LinkedIn */}
          <div className="group relative">
            <a
              href="https://www.linkedin.com/in/philip-antebrink-7b5612277/"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/30 text-white transition hover:border-white/60 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="currentColor"
                className="h-5 w-5"
              >
                <path d="M4.98 3.5C4.98 4.88 3.86 6 2.5 6S0 4.88 0 3.5 1.12 1 2.5 1s2.48 1.12 2.48 2.5zM.5 8.5h4V23h-4V8.5zM8.5 8.5h3.83v1.98h.05c.53-1 1.83-2.05 3.76-2.05 4.02 0 4.76 2.65 4.76 6.09V23h-4v-5.9c0-1.41-.03-3.23-1.97-3.23-1.97 0-2.27 1.54-2.27 3.13V23h-4V8.5z"/>
              </svg>
            </a>
            <span role="tooltip" className="pointer-events-none absolute -top-2 left-1/2 -translate-x-1/2 -translate-y-full rounded-md bg-white px-2 py-1 text-xs font-medium text-black opacity-0 shadow transition-opacity duration-150 group-hover:opacity-100 group-focus-within:opacity-100">
              LinkedIn
            </span>
          </div>
        </div>
      </Container>
      {/* Aurora removed for performance */}
    </section>
  )
}
