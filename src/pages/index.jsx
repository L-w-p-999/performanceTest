import { Link } from 'react-router-dom'
import { AppFrame } from '../App'
import { playgrounds } from '../playgrounds'

export default function HomePage() {
  return (
    <AppFrame>
      <section className="hero">
        <p className="eyebrow">React performance playgrounds</p>
        <h1>用于验证 React 性能优化策略的实验台</h1>
        <p className="intro">
          每个页面都保留可调参数和渲染计数，方便你快速对比优化前后的行为。
        </p>
      </section>

      <section className="playgroundGrid" aria-label="Playgrounds">
        {playgrounds.map((item) => (
          <article className="playgroundCard" key={item.path}>
            <Link className="button" to={item.path} aria-label={item.label}>
              打开 playground
            </Link>
          </article>
        ))}
      </section>
    </AppFrame>
  )
}
