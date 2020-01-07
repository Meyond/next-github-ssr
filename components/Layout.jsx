import { Button } from "antd";
import Link from "next/link";
import Router from "next/router";

export default ({ children }) => {
  function gotoTest() {
    Router.push(
      {
        pathname: "/test",
        query: { id: 2 }
      },
      "/test/2"
    ); // 路由映射
  }

  return (
    <>
      <header>
        <Link href="/">
          <Button type="danger">主页</Button>
        </Link>
        <Link href="/404" as="/404/路由映射">
          <Button type="primary">404</Button>
        </Link>
        <Button onClick={gotoTest}>Test</Button>
        <Button onClick={() => Router.push("/counter")}>计数器</Button>
        <Button onClick={() => Router.push("/counter-hooks")}>Hooks</Button>
        <Button onClick={() => Router.push("/optimize-hooks")}>Optimize</Button>
      </header>
    </>
  );
};
