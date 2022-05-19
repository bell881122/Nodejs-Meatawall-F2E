import Image from 'next/image';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import GlobalContainer from './GlobalContainer';
import welcomeImg from '../public/img/welcome.svg';

export default function WelcomeWrapper({ children }) {
  return (
    <GlobalContainer>
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        p: 2,
      }}>
        <Box sx={{
          px: 3,
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          width: '90%',
          border: 2,
          textAlign: 'center',
        }}>
          <Grid container spacing={3} sx={{ py: 4 }}>
            <Grid item xs={12} sm={6}>
              <Box sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: 1,
                width: 1,
              }}>
                <div>
                  <Image src={welcomeImg} alt="welcomeImg" />
                </div>
              </Box>
            </Grid>
            <Grid item xs={12} sm={6}>
              <div className="primary-font logo-word">MetaWall</div>
              {children}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </GlobalContainer>
  )
}