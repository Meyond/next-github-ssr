import Document, { Html, Head, Main, NextScript } from 'next/document';
import { ServerStyleSheet } from 'styled-components';

/**
 * Document只有在服务端渲染才会被执行
 * 用来修改服务端渲染的文档内容
 * 一般配合css-in-js方案使用
 */
export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) => sheet.collectStyles(<App {...props} />),
          enhanceComponent: (Component) => withLog(Component),
        });

      const props = await Document.getInitialProps(ctx);
      return {
        ...props,
        // 结合jsx样式和css样式
        styles: (
          <>
            {props.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } catch (error) {
      console.log(error);
    } finally {
      sheet.seal();
    }
  }

  render() {
    return (
      <Html>
        <Head></Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

// withLog HOC
function withLog(Comp) {
  return (props) => {
    console.log(props);
    return <Comp {...props} />;
  };
}
