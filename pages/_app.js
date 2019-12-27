// 覆盖next默认app组件
import App, { Container } from 'next/app'
import Layout from '../components/Layout'
import '../test.css'

/**
 * app组件的作用
 * 1.固定Layout
 * 2.保持一些公用状态
 * 3.给页面传入一些自定义数据
 * 4.自定义错误处理
 */

class MyApp extends App {
  static async getInitialProps({ Component }) {
    let pageProps = {}
    // 判断是否执行子页面的getInitialProps
    if (Component.getInitialProps) {
      pageProps = await Component.getInitialProps()
    }
    return {
      pageProps
    }
  }

  render() {
    // 把子页面getInitialProps得到的数据传递给子组件
    const { Component, pageProps } = this.props

    return (
      <Container>
        <Layout></Layout>
        <Component {...pageProps} />
      </Container>
    )
  }
}

export default MyApp