import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import dynamic from 'next/dynamic'
import styled from 'styled-components'
import getConfig from 'next/config'

// 异步加载组件(渲染到才会加载)
const Comp = dynamic(import('../components/Comp'))

const Title = styled.h2`
  font-size: 40px;
  `;

const { serverRuntimeConfig, publicRuntimeConfig } = getConfig()
const color = '#0C7D9D'

const Test = ({ router, name, time }) => {
  return (
    <>
      <Title>这是标题{ time }</Title>
      <Comp />
      <Link href="/">
        <h2>{router.query.id} - {name}</h2>
      </Link>
      <style jsx>{`
        h2 {
          color: ${color};
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

// page获取数据(刷新此页面会在服务端执行，跳转到此页面会在客户端执行)
Test.getInitialProps = async () => {
  const Moment = await import('moment') // 使用webpack懒加载moment
  console.log('-----server render------')
  return {
    name: 'HAHA',
    time: Moment.default(Date.now() - 60 * 1000 * 5).fromNow()
  }
}

export default withRouter(Test) // HOC