import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'
import { motion } from 'motion/react'
import { AppFrame } from '../App'
import { playgrounds } from '../playgrounds'

export default function HomePage() {
  return (
    <AppFrame>
      <section className="flex flex-1 flex-col justify-center py-16 sm:py-24">
        <motion.h1
          className="text-6xl font-semibold tracking-normal text-slate-950 sm:text-8xl"
          initial={{ opacity: 0, y: 18 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.36, ease: 'easeOut' }}
        >
          React
        </motion.h1>

        <motion.div
          className="mt-10 flex flex-wrap gap-3"
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.32, delay: 0.08, ease: 'easeOut' }}
        >
          {playgrounds.map((item) => (
            <Link
              className="inline-flex h-11 items-center gap-2 rounded-lg border border-slate-200 bg-white px-4 text-sm font-medium text-slate-800 shadow-sm transition hover:border-teal-300 hover:bg-teal-50 hover:text-slate-950"
              key={item.path}
              to={item.path}
            >
              {item.label}
              <ArrowRight aria-hidden="true" size={16} />
            </Link>
          ))}
        </motion.div>
      </section>
    </AppFrame>
  )
}
