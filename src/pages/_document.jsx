import { Html, Head, Main, NextScript } from 'next/document'

export default function Document() {
  return (
    <Html lang='pt-br'>
      <Head>
        <meta property="og:title" content="Kopenagen" key="title" />
        <meta name="description" content="Clone paginas site Decathlon"/>
        <meta name="keywords" content="Dev. front-end, next.js, react.js, HTML, CSS, JavaScript"/>
        <meta name="author" content="Letícia Oliveira"/>
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Roboto+Condensed:ital,wght@0,300;0,400;0,700;1,300;1,400;1,700&display=swap" rel="stylesheet"/>

      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  )
}