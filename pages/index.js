import Link from 'next/link'
import Router from 'next/router'
import { Button } from 'antd'
import store from '../store/store'

const Home = () => {

  return (
    <div className="box">
      <div className="hero">
        <h1 className="title">Welcome to Next.js!</h1>
      </div>
      <style jsx>{`
        .hero {
          width: 100%;
          color: #333;
        }
      `}</style>
    </div>
  );
};

export default Home;
