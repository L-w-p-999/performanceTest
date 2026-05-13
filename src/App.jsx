import { Suspense } from 'react'
import { Link, useRoutes } from 'react-router-dom'
import routes from '~react-pages'
import './App.css'

function App() {
  return (
    <Suspense fallback={<main className="shell">Loading...</main>}>
      {useRoutes(routes)}
    </Suspense>
  )
}

export function AppFrame({ children }) {
  return (
    <main className="shell">
      <nav className="topbar">
        <Link to="/" className="brand">
          React Performance Lab
        </Link>
        <div className="navLinks">
          <Link to="/memo-callback">Memo</Link>
          <Link to="/list-memo">List</Link>
          <Link to="/transition-search">Transition</Link>
        </div>
      </nav>
      {children}
    </main>
  )
}

export default App
