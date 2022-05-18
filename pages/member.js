import { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import BasicLayout from './_basicLayout';
import Avatar from '../components/Avatar';
import RadioButton from '../components/RadioButton';

export default function Member() {
  const [gender, setGender] = useState("male");
  const [tab, setTab] = useState("暱稱修改");

  return (
    <BasicLayout>
      <Box sx={{ ml: 2, display: 'flex' }}>
        {["暱稱修改", "重設密碼"].map((item, i) => (
          <Box key={i} onClick={() => setTab(item)} sx={{
            px: 3,
            py: 1,
            borderLeft: 2,
            borderTop: 2,
            borderRight: 2,
            borderRadius: '8px 8px 0 0',
            color: tab == item ? "#fff" : "#000",
            bgcolor: tab == item ? "#000" : "#fff",
            borderColor: "#000",
          }}>{item}</Box>
        ))}
      </Box>
      <Box sx={{ py: 4, px: '15%', mb: 2, borderRadius: 2, border: 2, borderBottom: 4, bgcolor: '#fff' }}>
        {tab == "暱稱修改" ?
          <>
            <Avatar size={70} />
            <Box sx={{ my: 2, display: 'flex' }} >
              <Button
                sx={{ px: 4, mt: 1, bgcolor: '#000', margin: '0 auto' }}
                variant="contained"
              >上傳大頭照</Button>
            </Box>
            <Box sx={{ mb: 2 }} >
              <p style={{ marginBottom: '4px' }}>暱稱</p>
              <input placeholder='請輸入暱稱' defaultValue={"邊緣小傑"} />
            </Box>
            <Box sx={{ mb: 4 }} >
              <p style={{ marginBottom: '4px' }}>性別</p>
              <Box sx={{ display: 'flex' }} >
                {[
                  { label: "男性", gender: "male" },
                  { label: "女性", gender: "female" },
                ].map((item, i) => (
                  <RadioButton
                    key={i}
                    label={item.label}
                    checked={gender == item.gender}
                    onClick={() => setGender(item.gender)}
                  />
                ))}
              </Box>
            </Box>
            <Box sx={{ mt: 2, display: 'flex', justifyContent: 'center' }}>
              <Button variant="contained" sx={{ width: 1, bgcolor: '#EEC32A', color: '#000', border: 2 }}>
                <span className='primary-font'>送出更新</span>
              </Button>
            </Box>
          </> : <>
            <Box sx={{ mb: 2 }} >
              <p style={{ marginBottom: '4px' }}>輸入新密碼</p>
              <input placeholder='請輸入新密碼' />
            </Box>
            <Box sx={{ mb: 4 }} >
              <p style={{ marginBottom: '4px' }}>再次輸入</p>
              <input placeholder='再次輸入新密碼' />
            </Box>
            <Box sx={{
              display: 'flex',
              justifyContent: 'center',
            }}>
              <Button variant="contained" sx={{ width: 1, bgcolor: '#EEC32A', color: '#000', border: 2 }}>
                <span className='primary-font'>重設密碼</span>
              </Button>
            </Box>
          </>
        }
      </Box >
    </BasicLayout >
  )
}