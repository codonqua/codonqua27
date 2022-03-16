import React, { useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

import { Stack, Paper, Box, List, ListItemText, Collapse, ListItemButton } from '@mui/material';
import { ExpandLess, ExpandMore } from '@mui/icons-material'
import act from "../../../assets/images/act.png"

function MenuLeft() {
    const [openAccount, setOpenAccount] = useState(false);
    const [openBook, setOpenBook] = useState(false);
    const [openBorrowBook, setOpenBorrowBook] = useState(false);
    const [openStatistic, setOpenStatistic] = useState(false);

    return (
        <div className="container_menu_left col-3">
            <img src={act} alt="" />
            <Stack spacing={4} mt={4} pb={3}>
                <Box sx={{ pl: 3, pr: 3 }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
                        <ListItemButton onClick={() => setOpenAccount(!openAccount)} style={{ borderRadius: '10px' }}>
                            <ListItemText primary="Quản lý tài khoản" />
                            {openAccount ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openAccount} timeout="auto" unmountOnExit>
                            <Link to="/admin/addAccount" className='text_link'>
                                <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                    <ListItemText primary="Thêm tài khoản" />
                                </ListItemButton>
                            </Link>
                            <Link to="/admin/account/list" className='text_link'>
                                <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                    <ListItemText primary="Danh sách tài khoản" />
                                </ListItemButton>
                            </Link>

                        </Collapse>
                    </List>
                </Box>
                <Box sx={{ pl: 3, pr: 3 }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
                        <ListItemButton onClick={() => setOpenBook(!openBook)} style={{ borderRadius: '10px' }}>
                            <ListItemText primary="Quản lý sách" />
                            {openBook ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openBook} timeout="auto" unmountOnExit>
                            <Link to='/admin/books/add' className='text_link'>
                                <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                    <ListItemText primary="Thêm sách" />
                                </ListItemButton>
                            </Link>
                            <Link to='/admin/books/edit' className='text_link'>
                                <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                    <ListItemText primary="Sửa sách" />
                                </ListItemButton>
                            </Link>
                        </Collapse>
                    </List>
                </Box>
                <Box sx={{ pl: 3, pr: 3 }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
                        <Link to="/admin/borrowBook" className='text_link'>
                            <ListItemButton onClick={() => setOpenBorrowBook(!openBorrowBook)} style={{ borderRadius: '10px' }}>
                                <ListItemText primary="Quản lý mượn sách" />
                                {/* {openBorrowBook ? <ExpandLess /> : <ExpandMore />} */}
                            </ListItemButton>
                        </Link>

                    </List>
                </Box>
                <Box sx={{ pl: 3, pr: 3 }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
                        <Link className='text_link' to="/admin/MaterialFacilities">
                           <ListItemButton style={{ borderRadius: '10px' }}>
                            <ListItemText primary="Quản lý cơ sở vật chất" />
                        </ListItemButton>
                        </Link>
                     
                    </List>
                </Box>
                <Box sx={{ pl: 3, pr: 3 }}>
                    <List sx={{ width: '100%', bgcolor: 'background.paper', padding: '0px', borderRadius: '10px' }}>
                        <ListItemButton onClick={() => setOpenStatistic(!openStatistic)} style={{ borderRadius: '10px' }}>
                            <ListItemText primary="Thống kê" />
                            {openStatistic ? <ExpandLess /> : <ExpandMore />}
                        </ListItemButton>
                        <Collapse in={openStatistic} timeout="auto" unmountOnExit>
                            <Link to="/admin/book/borrowAndLose" className='text_link'>
                            <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                <ListItemText primary="Sách mượn & mất" />
                            </ListItemButton>
                            </Link>
                            <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                <ListItemText primary="Sách nhập " />
                            </ListItemButton>
                            <ListItemButton sx={{ pl: 4 }} style={{ borderRadius: '10px' }}>
                                <ListItemText primary="Sách xuất" />
                            </ListItemButton>
                        </Collapse>
                    </List>
                </Box>
            </Stack>
        </div>
    )
}
export default MenuLeft
