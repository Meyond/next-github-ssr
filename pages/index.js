import '../test.css'
import { Button } from 'antd'

const Home = () => (
  <div className="box">
    <div className="hero">
      <h1 className="title">Welcome to Next.js!</h1>
    </div>
    <Button>按钮</Button>

    <style jsx>{`
      .hero {
        width: 100%;
        color: #333;
      }
    `}</style>
  </div>
)

export default Home
