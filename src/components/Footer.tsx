export default function Footer() {
  return (
    <footer className="mt-auto border-t border-[#ffffff26]">
      <div className="mx-auto max-w-7xl px-6 py-8 lg:px-8 text-sm text-fg/70 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-3">
          <a href="mailto:antebrinken@live.se" className="hover:text-fg">antebrinken@live.se</a>
          <span className="text-fg/40">•</span>
          <a href="tel:+46734177109" className="hover:text-fg">0734177109</a>
        </div>
        <div className="flex items-center gap-4">
          <a href="#contact" className="hover:text-fg">Contact</a>
          <a href="https://github.com/antebrinken" target="_blank" rel="noopener noreferrer" className="hover:text-fg">GitHub</a>
          <a href="https://www.linkedin.com/in/philip-antebrink-7b5612277/" target="_blank" rel="noopener noreferrer" className="hover:text-fg">LinkedIn</a>
        </div>
      </div>
    </footer>
  )
}
