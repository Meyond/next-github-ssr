import { useState, useEffect } from 'react'

function MyCounter() {
  const [count, setCount] = useState(0)

  // 初始化、卸载时调用
  useEffect(() => {
    const interval = setInterval(() => {
      setCount(count => count + 1 )
    }, 1000)

    return () => clearInterval(interval) // 清除定时器
  }, [])

  return(
    <span>计数器：{ count }</span>
  )
}

export default MyCounter