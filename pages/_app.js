import CssBaseline from '@mui/material/CssBaseline';
import '../styles/globals.css';

export default function MyApp({ Component, pageProps }) {
  return (
    <>
      <CssBaseline />
      <Component {...pageProps} />
    </>
  )
}