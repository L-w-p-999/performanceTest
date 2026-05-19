import { useState } from 'react'
import { useTodoStore } from './todo-store'

export default function TodoList() {
  const [text, setText] = useState('')
  const { todos, filter, addTodo, toggleTodo, removeTodo, setFilter } =
    useTodoStore()

  const visibleTodos = todos.filter((t) => {
    if (filter === 'done') return t.done
    if (filter === 'active') return !t.done
    return true
  })

  const handleAdd = () => {
    const trimmed = text.trim()
    if (!trimmed) return
    addTodo(trimmed)
    setText('')
  }

  const remaining = todos.filter((t) => !t.done).length

  return (
    <section className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm">
      <h2 className="mb-1 text-lg font-semibold text-slate-900">待办列表</h2>
      <p className="mb-4 text-sm text-slate-500">
        测试 Zustand 的复杂状态（数组、嵌套对象、多操作）
      </p>

      <div className="mb-4 flex gap-2">
        <input
          value={text}
          onChange={(e) => setText(e.target.value)}
          onKeyDown={(e) => e.key === 'Enter' && handleAdd()}
          placeholder="添加新任务..."
          className="flex-1 rounded-lg border border-slate-200 px-3 py-2 text-sm outline-none transition focus:border-teal-400 focus:ring-2 focus:ring-teal-100"
        />
        <button
          onClick={handleAdd}
          className="rounded-lg bg-teal-600 px-4 py-2 text-sm font-medium text-white transition hover:bg-teal-700"
        >
          添加
        </button>
      </div>

      <div className="mb-3 flex gap-1">
        {[
          ['all', '全部'],
          ['active', '待完成'],
          ['done', '已完成'],
        ].map(([key, label]) => (
          <button
            key={key}
            onClick={() => setFilter(key)}
            className={`rounded-md px-3 py-1 text-xs font-medium transition ${
              filter === key
                ? 'bg-teal-100 text-teal-800'
                : 'text-slate-500 hover:bg-slate-100'
            }`}
          >
            {label}
          </button>
        ))}
      </div>

      {visibleTodos.length === 0 ? (
        <p className="py-6 text-center text-sm text-slate-400">
          {filter === 'all' ? '还没有任务，添加一个吧' : '没有匹配的任务'}
        </p>
      ) : (
        <ul className="space-y-1">
          {visibleTodos.map((todo) => (
            <li
              key={todo.id}
              className="flex items-center gap-3 rounded-lg border border-slate-100 px-3 py-2"
            >
              <input
                type="checkbox"
                checked={todo.done}
                onChange={() => toggleTodo(todo.id)}
                className="size-4 accent-teal-600"
              />
              <span
                className={`flex-1 text-sm ${
                  todo.done
                    ? 'text-slate-400 line-through'
                    : 'text-slate-800'
                }`}
              >
                {todo.text}
              </span>
              <button
                onClick={() => removeTodo(todo.id)}
                className="text-xs text-slate-400 transition hover:text-red-500"
              >
                删除
              </button>
            </li>
          ))}
        </ul>
      )}

      <p className="mt-3 text-xs text-slate-400">
        {remaining} 个任务未完成 / 共 {todos.length} 个
      </p>
    </section>
  )
}
