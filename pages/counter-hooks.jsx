import { useState, useEffect, useReducer } from 'react'

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

  useEffect(() => {
    // 初始化、卸载时调用
    const interval = setInterval(() => {
      // dispatchCount({ type: 'add' })
      // or
      dispatchCount({ type: 'minus' })
    }, 1000)

    return () => clearInterval(interval) // 清除定时器
  }, [])

  return(
    <span>计数器：{ count }</span>
  )
}

export default MyCounter