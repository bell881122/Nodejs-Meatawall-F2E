import Head from 'next/head';
import { useRouter } from 'next/router';
import Grid from '@mui/material/Grid';
import GlobalContainer from '../components/GlobalContainer';
import WelcomeWrapper from '../components/WelcomeWrapper';
import Header from '../components/Header';
import SideBar from '../components/SideBar';
import styles from '../styles/_basicLayout.module.scss';

export default function BasicLayout({ children }) {
  const router = useRouter();

  return (
    <div className={styles.basicLayout}>
      <Head>
        <title>MetaWall</title>
        <meta name="description" content="MetaWall | 到元宇宙展開全新社交圈" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      {(router.pathname === "/register" || router.pathname === "/login") ?
        <WelcomeWrapper>{children}</WelcomeWrapper>
        :
        <div className="main-section">
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
      }
    </div>
  )
}