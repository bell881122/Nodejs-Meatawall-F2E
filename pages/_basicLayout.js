import Head from 'next/head';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GlobalContainer from '../components/GlobalContainer';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from '../styles/_basicLayout.module.scss';

export default function BasicLayout({ children }) {
  return (
    <div className={styles.basicLayout}>
      <Head>
        <title>MetaWall</title>
        <meta name="description" content="MetaWall | 到元宇宙展開全新社交圈" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <GlobalContainer>
        <Grid container spacing={2} sx={{ py: 4 }}>
          <Grid item xs={12} sm={4}>
            <SideBar />
          </Grid>
          <Grid item xs={12} sm={8}>
            <main>
              {children}
            </main>
          </Grid>
        </Grid>
      </GlobalContainer>
    </div>
  )
}