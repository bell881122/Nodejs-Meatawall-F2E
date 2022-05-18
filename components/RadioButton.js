import Box from '@mui/material/Box';

export default function RadioButton({ label, checked, onClick }) {
  return (
    <Box onClick={onClick} sx={{
      mr: 2,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
    }}>
      <Box sx={{
        width: 20,
        height: 20,
        bgcolor: '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
      }} >
        <Box sx={{
          width: 16,
          height: 16,
          bgcolor: '#fff',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          borderRadius: '50%',
        }} >
          {checked &&
            <Box sx={{
              width: 12,
              height: 12,
              bgcolor: '#000',
              borderRadius: '50%',
            }} />
          }
        </Box>
      </Box>
      <Box sx={{ ml: 1 }}>
        <span>{label}</span>
      </Box>
    </Box>
  )
}