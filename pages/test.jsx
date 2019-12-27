import Router, { withRouter } from 'next/router'
import Link from 'next/link'
import styled from 'styled-components'

const Title = styled.h2`
  font-size: 40px;
`;
const color = '#0C7D9D'

const Test = ({ router, name }) => {
  return (
    <>
      <Title>这是标题</Title>
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
  console.log('-----server render------')
  return {
    name: 'HAHA'
  }
}

export default withRouter(Test) // HOC