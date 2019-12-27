import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";

export default ({ children }) => {

  function gotoTest() {
    Router.push({
      pathname: "/test",
      query: { id: 2 }
    }, '/test/2') // 路由映射
  }

  return(
    <>
      <header>
      <Link href="/404" as="/404/路由映射">
        <Button type="primary">404</Button>
      </Link>
      <Button onClick={gotoTest}>Test</Button>
    </header>
    </>
  )
}