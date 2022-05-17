import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.scss';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}