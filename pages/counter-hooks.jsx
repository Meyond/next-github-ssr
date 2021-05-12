import {
  useState,
  useEffect,
  useLayoutEffect,
  useReducer,
  useContext,
  useRef,
} from 'react'
import { Button, Input } from 'antd'
import MyContext from '../lib/my-context'

// 根据action类型对state进行更新
function countReducer(state, action) {
  switch (action.type) {
    case 'add':
      // 如果是对象，需要返使用Object.assign,才能在子组件监听到数据变化
      return state + 1
    case 'minus':
      return state - 1
    default:
      return state
  }
}

function MyCounter() {
  const [count, dispatchCount] = useReducer(countReducer, 0)
  const [name, setName] = useState('jack')
  const context = useContext(MyContext)
  const inputRef = useRef()

  // useLayoutEffect会在DOM内容更新之前执行
  // useEffect会在DOM更新时才会执行
  useEffect(() => {
    console.log('effect invoked') // 组件初始化
    console.log(inputRef.current) // useRef
    return () => console.log('effect detached') // 组件卸载
  }, [name]) // 数组内传入的值变化时，会执行useEffect

  return (
    <div className="hooks">
      <Input
        ref={inputRef}
        value={name}
        onChange={(e) => setName(e.target.value)}
        type="text"
      />
      <Button onClick={() => dispatchCount({ type: 'add' })} type="primary">
        {count}
      </Button>
      <p>{context}</p>
      <style jsx>{`
        .hooks {
          width: 300px;
          padding: 20px;
        }
      `}</style>
    </div>
  )
}

export default MyCounter
