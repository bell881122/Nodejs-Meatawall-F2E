import { useState, useRef } from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import SearchIcon from '@mui/icons-material/Search';
import BasicLayout from './_basicLayout';
import Post from '../components/Post'

export default function Index() {
  const [filterType, setFilterType] = useState("最新貼文");
  const [showSelect, setShowSelect] = useState(false);
  const selectRef = useRef();

  return (
    <div onClick={e => {
      if (!selectRef.current.contains(e.target)) {
        setShowSelect(false)
      } else {
        setShowSelect(state => !state)
      }
    }}>
      <BasicLayout>
        <div className="not-reverse">
          <Grid container spacing={2} sx={{ py: 4, mt: -6, mb: -1 }}>
            <Grid item xs={12} md={4}>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  position: 'relative',
                }}>
                <Box
                  ref={selectRef}
                  sx={{
                    pl: 2,
                    pr: 1,
                    py: 1,
                    display: "flex",
                    justifyContent: 'space-between',
                    width: '100%',
                    border: 2,
                    bgcolor: '#fff',
                  }}>
                  <p
                    className="primary-font"
                    style={{ fontWeight: 'bold', fontSize: '18px' }}
                  >{filterType}</p>
                  <KeyboardArrowDownIcon />
                </Box>
                <Box className={`${showSelect ? "" : "hide"}`} sx={{
                  display: "flex",
                  justifyContent: 'space-between',
                  width: '100%',
                  border: 2,
                  bgcolor: '#fff',
                  position: 'absolute',
                  top: 43,
                  left: 0,
                }}>
                  <Box sx={{ width: 1 }}>
                    {["最新貼文", "最早貼文"].map((item, index) => (
                      <div
                        key={index}
                        className="select-option"
                        onClick={() => setFilterType(item)}
                      >
                        <p
                          className="primary-font"
                          style={{ fontWeight: 'bold', fontSize: '18px' }}
                        >{item}</p>
                      </div>
                    ))}
                  </Box>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={8}>
              <Box sx={{
                display: 'flex',
              }}>
                <input placeholder='搜尋貼文' />
                <Box sx={{
                  p: 1,
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderTop: 2,
                  borderBottom: 2,
                  borderRight: 2,
                  borderColor: '#000',
                  bgcolor: '#03438D',
                  color: '#fff',
                }}>
                  <SearchIcon sx={{ fontSize: 28 }} />
                </Box>
              </Box>
            </Grid>
          </Grid>
        </div>
        <Post />
        <Post data={{
          txt: `外面看起來就超冷....
          我決定回被窩繼續睡....>.<`}} />
      </BasicLayout >
    </div>
  )
}