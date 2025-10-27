import { Outlet, useLocation } from 'react-router-dom'
import { AnimatePresence, motion } from 'framer-motion'
import Header from '../components/Header'

const variants = {
  initial: { opacity: 0, y: 12, filter: 'blur(4px)' },
  animate: { opacity: 1, y: 0, filter: 'blur(0px)' },
  exit: { opacity: 0, y: -12, filter: 'blur(4px)' },
}

export default function RootLayout() {
  const location = useLocation()
  return (
    <div className="min-h-screen bg-black text-white relative isolate">
      {/* Global noise texture behind content */}
      <div aria-hidden="true" className="noise" />
      <Header />
      <AnimatePresence mode="wait">
        <motion.main
          className="relative z-10"
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
    </div>
  )
}
