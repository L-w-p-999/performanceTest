import { useCounterStore } from './counter-store'

export default function Counter() {
  const { count, increment, decrement, reset } = useCounterStore()

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-1 text-lg font-semibold text-slate-900">简单计数器</h2>
      <p className="mb-4 text-sm text-slate-500">
        测试 Zustand 的基本 select/get/set 模式
      </p>

      <div className="mb-4 text-4xl font-bold tabular-nums text-slate-950">
        {count}
      </div>

      <div className="flex gap-2">
        <button
          onClick={decrement}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-700 transition hover:bg-slate-50"
        >
          -1
        </button>
        <button
          onClick={increment}
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          +1
        </button>
        <button
          onClick={reset}
          className="rounded-lg border border-slate-200 px-4 py-2 text-sm font-medium text-slate-500 transition hover:bg-slate-50"
        >
          重置
        </button>
      </div>
    </section>
  )
}
