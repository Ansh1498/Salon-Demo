import { useLocation, useOutlet } from 'react-router-dom'
import { AnimatePresence, MotionConfig } from 'framer-motion'
import Navbar from './Navbar'
import Footer from './Footer'
import PageTransition from '../animations/PageTransition'

export default function Layout() {
  const { pathname } = useLocation()
  const outlet = useOutlet()

  return (
    <MotionConfig reducedMotion="user">
      <div className="flex min-h-screen flex-col">
        <Navbar />
        <main className="flex-1">
          <AnimatePresence mode="wait" onExitComplete={() => window.scrollTo(0, 0)}>
            <PageTransition key={pathname}>{outlet}</PageTransition>
          </AnimatePresence>
        </main>
        <Footer />
      </div>
    </MotionConfig>
  )
}