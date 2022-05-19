import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BasicLayout from './_basicLayout';

export default function Register() {
  const router = useRouter();

  return (
    <BasicLayout>
      <p style={{ fontWeight: 'bold' }}>註冊</p>
      <Box sx={{ pt: 2 }} />
      <input placeholder='暱稱' />
      <Box sx={{ pt: 1 }} />
      <input placeholder='Email' />
      <Box sx={{ pt: 1 }} />
      <input placeholder='Password' />
      <Box sx={{ pt: 2 }} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button variant="contained" sx={{ width: 1, color: '#000', border: 2 }}>
          <span className='primary-font'>註冊</span>
        </Button>
      </Box>
      <Box sx={{ pt: 1 }} />
      <p
        style={{ fontWeight: 'bold', fontSize: '12px' }}
        onClick={() => router.push("/login")}
      >登入</p>
    </BasicLayout>
  )
}