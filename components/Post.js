import Box from '@mui/material/Box';
import Avatar from './Avatar';

export default function Post({ data }) {
  return (
    <Box sx={{ p: 2, mb: 2, borderRadius: 2, border: 2, borderBottom: 4, bgcolor: '#fff' }}>
      {data ?
        <>
          <Box sx={{ width: 1, display: "flex", alignItems: "center" }}>
            <Avatar size={44} />
            <Box sx={{ ml: 2 }}>
              <p style={{ fontWeight: 'bold' }}>邊緣小傑</p>
              <small style={{ color: '#9B9893' }}>2022/1/10 12:00</small>
            </Box>
          </Box>
          <Box sx={{ mt: 1.5 }}>
            <p style={{ whiteSpace: 'pre-line' }}>{data.txt}</p>
          </Box>
          <Box sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            borderRadius: 2,
            border: 2,
            overflow: 'hidden',
          }}>
            <img style={{
              width: '100%',
            }} src="https://picsum.photos/500/300" alt="post-image" />
          </Box>
        </>
        : <p style={{ textAlign: 'center', color: '#9B9893' }}>目前尚無動態，新增一則貼文吧！</p>
      }
    </Box >
  )
}