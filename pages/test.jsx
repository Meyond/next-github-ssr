import Router, { withRouter } from 'next/router'

const Test = ({ router, name }) => {
  return (
    <>
      <h2>test:{router.query.id}-{name}</h2>
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