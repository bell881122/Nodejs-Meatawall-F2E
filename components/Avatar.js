import Box from '@mui/material/Box';

export default function Avatar({ size, icon, url = "https://i.pravatar.cc/100" }) {
  return !icon ?
    (<Box sx={{
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <img style={{
        width: size,
        height: size,
        borderRadius: '50%',
        border: '2px solid #000',
      }} src={url} alt="aaa" />
    </Box>)
    :
    (<Box sx={{
      width: size,
      height: size,
      borderRadius: '50%',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      border: '2px solid #000',
      bgcolor: '#E2EDFA',
    }}>{icon}</Box>)
}