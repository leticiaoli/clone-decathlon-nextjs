import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <meta property="og:title" content="Kopenagen" key="title" />
        <meta name="description" content="Clone paginas site Decathlon"/>
        <meta name="keywords" content="Dev. front-end, next.js, react.js, HTML, CSS, JavaScript"/>
        <meta name="author" content="Letícia Oliveira"/>
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}