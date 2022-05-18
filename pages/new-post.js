import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BasicLayout from './_basicLayout';
import styles from '../styles/new-post.module.scss';

export default function NewPost() {
  return (
    <BasicLayout>
      <div className={styles.newPost}>
        <Box sx={{ py: 4, px: 3, mb: 2, borderRadius: 2, border: 2, borderBottom: 4, bgcolor: '#fff' }}>
          <p style={{ marginBottom: '4px' }}>貼文內容</p>
          <textarea>輸入您的貼文內容</textarea>
          <Button
            sx={{ px: 4, mt: 1, mb: 2, bgcolor: '#000' }}
            variant="contained"
          >上傳圖片</Button>
          <Box sx={{
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
          <Box sx={{
            mt: 2,
            display: 'flex',
            justifyContent: 'center',
          }}>
            <Button
              variant="contained"
              sx={{
                width: '70%',
                bgcolor: '#A8B0B9',
                color: '#000',
                border: 2,
              }}
            >
              <span className='primary-font'>送出貼文</span>
            </Button>
          </Box>
        </Box >
      </div>
    </BasicLayout>
  )
}