import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import Avatar from './Avatar';

export default function SideBar() {
  const size = 40;

  return (
    <Box sx={{ border: 2, py: 3, px: 2, bgcolor: '#fff' }}>
      <Button
        sx={{ width: 1, borderTop: 1, borderRight: 1, borderBottom: 3, borderLeft: 3, borderColor: "#000" }}
        variant="contained"
      >張貼動態</Button>
      {[
        { txt: "邊緣小傑", img: <Avatar size={size} /> },
        { txt: "追蹤名單", img: <Avatar size={size} icon={<NotificationsNoneIcon sx={{ fontSize: 25 }} />} /> },
        { txt: "我按讚的文章", img: <Avatar size={size} icon={<ThumbUpOffAltIcon sx={{ fontSize: 25 }} />} /> },
      ].map((item, i) => (
        <Box key={i} sx={{ width: 1, mt: 2, ml:1, display: "flex", alignItems: "center" }}>
          {item.img}
          <Box sx={{ ml: 1.5 }}>
            <p style={{ fontWeight: 'bold' }}>{item.txt}</p>
          </Box>
        </Box>
      ))}
    </Box>
  )
}