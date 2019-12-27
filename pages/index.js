import { Button } from 'antd'
import Link from 'next/link'
import Router from 'next/router'

const Home = () => {

  function gotoTest() {
    Router.push({
      pathname: '/test',
      query: { id: 2 }
    })
  }

  return (
    <div className="box">
      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
      </div>
      <Link href="/404"><Button type="primary">404</Button></Link>
      <Button onClick={ gotoTest }>Test</Button>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
      `}</style>
    </div>
  )
}

export default Home
