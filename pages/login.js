import { useRouter } from 'next/router';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BasicLayout from './_basicLayout';

export default function Login() {
  const router = useRouter();

  return (
    <BasicLayout>
      <p style={{ fontWeight: 'bold', fontSize: '14px' }}>到元宇宙展開全新社交圈</p>
      <Box sx={{ pt: 2 }} />
      <input placeholder='Email' />
      <Box sx={{ pt: 1 }} />
      <input placeholder='Password' />
      <Box sx={{ pt: 2 }} />
      <Box sx={{
        display: 'flex',
        justifyContent: 'center',
      }}>
        <Button variant="contained" sx={{ width: 1, color: '#000', border: 2 }}>
          <span className='primary-font'>登入</span>
        </Button>
      </Box>
      <Box sx={{ pt: 1 }} />
      <p
        style={{ fontWeight: 'bold', fontSize: '12px' }}
        onClick={() => router.push("/register")}
      >註冊帳號</p>
    </BasicLayout>
  )
}