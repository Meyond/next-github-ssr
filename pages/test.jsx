import Router, { withRouter } from 'next/router'
import Link from 'next/link'

const Test = ({ router, name }) => {
  return (
    <>
      <Link href="/">
        <h2>{router.query.id} - {name}</h2>
      </Link>
      <style jsx>{`
        h2 {
          color: #0C7D9D;
          cursor: pointer;
        }
      `}</style>
    </>
  )
}

// page获取数据(刷新此页面会在服务端执行，跳转到此页面会在客户端执行)
Test.getInitialProps = async () => {
  console.log('-----------')
  return {
    name: 'HAHA'
  }
}

export default withRouter(Test) // HOC