import { AppFrame } from '../../App'
import Counter from './Counter'
import TodoList from './TodoList'

export default function ZustandPage() {
  return (
    <AppFrame title="Zustand 状态管理">
      <div className="mt-8 grid gap-6 lg:grid-cols-2">
        <Counter />
        <TodoList />
      </div>
    </AppFrame>
  )
}
