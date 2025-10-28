import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'
import Footer from '../components/Footer'

const variants = {
  initial: { opacity: 0, y: 12, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(4px)' },
}

export default function RootLayout() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-canvas text-fg relative isolate flex flex-col">
      {/* Global noise texture behind content */}
      <div aria-hidden="true" className="noise" />
      {/* Global static starfield background */}
      <div aria-hidden className="stars" />
      {/* Bottom seam guard to prevent any stray body stripe */}
      <div aria-hidden className="pointer-events-none fixed inset-x-0 bottom-0 h-[2px] bg-[#1e1e1e] z-[1]" />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10 flex-1"
          key={location.pathname}
          variants={variants}
          initial="initial"
          animate="animate"
          exit="exit"
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        >
          <Outlet />
        </motion.main>
      </AnimatePresence>
      <Footer />
    </div>
  )
}
