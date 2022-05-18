import Link from 'next/link';
import Box from '@mui/material/Box';
import styles from './Header.module.scss';
import GlobalContainer from './GlobalContainer';
import Avatar from './Avatar';

export default function Header() {
  return (
    <Box borderBottom={3} className={styles.header}>
      <GlobalContainer>
        <Link href="/">
          <h1 className="primary-font">MetaWall</h1>
        </Link>
        <Link href="/member">
          <div className="profile">
            <Avatar size={30} />
            <Box sx={{ ml: 1, borderBottom: 2 }}>
              <p className="primary-font">Member</p>
            </Box>
          </div>
        </Link>
      </GlobalContainer>
    </Box >
  )
}