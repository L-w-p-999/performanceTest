import { Suspense } from 'react'
import { Link, useLocation, useRoutes } from 'react-router-dom'
import { ArrowLeft, FlaskConical } from 'lucide-react'
import { motion } from 'motion/react'
import routes from '~react-pages'
import './App.css'

function App() {
  return (
    <Suspense
      fallback={
        <main className="flex min-h-screen items-center justify-center px-6 text-slate-500">
          Loading...
        </main>
      }
    >
      {useRoutes(routes)}
    </Suspense>
  )
}

export function AppFrame({ children, title }) {
  const { pathname } = useLocation()
  const isHome = pathname === '/'

  return (
    <main className="mx-auto flex min-h-screen w-full max-w-6xl flex-col px-5 py-6 sm:px-8">
      <nav className="flex min-h-12 items-center justify-between gap-4">
        <Link
          to="/"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-950"
        >
          <FlaskConical aria-hidden="true" size={18} />
          React Playground
        </Link>

        {!isHome && (
          <Link
            to="/"
            className="inline-flex h-10 items-center gap-2 rounded-lg border border-slate-200 bg-white px-3 text-sm font-medium text-slate-700 shadow-sm transition hover:border-teal-300 hover:text-slate-950"
          >
            <ArrowLeft aria-hidden="true" size={16} />
            Back
          </Link>
        )}
      </nav>

      <motion.section
        className="flex flex-1 flex-col"
        initial={{ opacity: 0, y: 12 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.28, ease: 'easeOut' }}
      >
        {title && (
          <header className="border-b border-slate-200 py-8">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-teal-700">
              Playground
            </p>
            <h1 className="mt-3 text-3xl font-semibold tracking-normal text-slate-950 sm:text-4xl">
              {title}
            </h1>
          </header>
        )}

        {children}
      </motion.section>
    </main>
  )
}

export default App
