import Head from 'next/head';
import Container from '@mui/material/Container';

export default function BasicLayout({ children }) {
  return (
    <Container maxWidth="md">
      <Head>
        <title>MetaWall</title>
        <meta name="description" content="MetaWall | 到元宇宙展開全新社交圈" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {children}
    </Container>
  )
}