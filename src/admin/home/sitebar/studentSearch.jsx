import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Stack, Paper, Box, List, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import act from "../../../assets/images/act.png"

function StudentSeach() {
  const [openAccount, setOpenAccount] = useState(false);
  const [openBook, setOpenBook] = useState(false);
  const [openBorrowBook, setOpenBorrowBook] = useState(false);
  const [openStatistic, setOpenStatistic] = useState(false);

  return (
    <div className="container_menu_left col-3">
      {/* <img src={act} alt="" /> */}
      <Stack spacing={4} mt={4} pb={3}>
        <Box sx={{ pl: 3, pr: 3 }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
            <Link to="/login/studentInfor">
              <ListItemButton onClick={() => setOpenAccount(!openAccount)} style={{ borderRadius: '10px' }}>
                <ListItemText primary="Xem thông tin cá nhân" />
              </ListItemButton>
            </Link>
          </List>
        </Box>
        <Box sx={{ pl: 3, pr: 3 }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
            <Link to="/login/inforLoan">
              <ListItemButton onClick={() => setOpenBook(!openBook)} style={{ borderRadius: '10px' }}>
                <ListItemText primary="Xem thông tin mượn / trả sách" />
              </ListItemButton>
            </Link>
          </List>
        </Box>
        <Box sx={{ pl: 3, pr: 3 }}>
          <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
          <Link to="/login/studentSearchBook">
            <ListItemButton onClick={() => setOpenBorrowBook(!openBorrowBook)} style={{ borderRadius: '10px' }}>
              <ListItemText primary="Tìm kiếm sách" />
            </ListItemButton>
            </Link>
          </List>
        </Box>
      </Stack>
    </div>
  )
}
export default StudentSeach
