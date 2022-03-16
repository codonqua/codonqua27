import React, { useState, useEffect } from 'react';
import {
  Box,
  Container,
  Avatar, 
  Button, 
  TextField, 
  FormControlLabel, 
  Checkbox, 
  Grid, 
  Typography, 
  CircularProgress,
} from '@mui/material';

import LockOutlinedIcon from '@mui/icons-material/LockOutlined';

import axios from 'axios';
import { useNavigate } from "react-router-dom";

import Header from '../../common/Header'
import Footer from '../../common/Footer'
import image from '../../../assets/images/img-login.jpg'

function Login() {
  const [success, setSuccess] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [check, setCheck] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const navigate = useNavigate();


  useEffect(() => {
    if(email && password) {
      setSuccess(true);
    } else {
      setSuccess(false);
    }
  }, [email, password])
  
  const handleSubmit = (event) => {
    event.preventDefault();
    setCheck(true);
 
    if(success) {
      const account = {
        username: email,
        password,
      }
      setLoading(true);
      axios.post('http://localhost:3000/api/admin/login', account)
        .then(res => {
          if(res.data.success) {
            setTimeout(() => {
              localStorage.setItem('token', JSON.stringify(res.data.token));
              navigate('/admin');
              setLoading(false);
            }, 2000)
          }
        })
        .catch(err => {
          setTimeout(() => {
            setError(true);
          }, 2000)
        })
        .finally(() => {
          setTimeout(() => {
            setLoading(false);
          }, 2000)
        })
    }
  };

  return (
    <>
      <Header />
      <Box sx={{ p: 4 }} mt={8} mb={12}>
        <Grid container spacing={2}>
          <Grid item lg={6}>
            <Box>
              <img src={image} alt="" style={{ width: '100%', height: '100%' }} />
            </Box>
          </Grid>
          <Grid item lg={6}>
            <Box
              sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
                pl: 4,
                pr: 4,
              }}
            >
              <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
                <LockOutlinedIcon />
              </Avatar>
              <Typography component="h1" variant="h5">
                Sign in
              </Typography>
              <Box component="form" onSubmit={handleSubmit} noValidate sx={{ mt: 1 }}>
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  id="username"
                  label="Nhập username"
                  name="username"
                  autoComplete="username"
                  autoFocus
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {check && !email ? (
                  <span style={{color: 'red'}}>Vui lòng nhập username</span>
                ) : ''}
                <TextField
                  margin="normal"
                  required
                  fullWidth
                  name="password"
                  label="Nhập mật khẩu"
                  type="password"
                  id="password"
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {check && !password ? (
                  <span style={{color: 'red'}}>Vui lòng nhập mật khẩu</span>
                ) : ''}
                {check && error && <span style={{color: 'red'}}>Tài khoản mật khẩu không chính xác</span>}
                <Box>
                  <FormControlLabel
                    control={<Checkbox value="remember" color="primary" />}
                    label="Remember me"
                  />
                </Box>
                <Button
                  type="submit"
                  fullWidth
                  sx={{ mt: 3, mb: 2 }}
                >
                  {loading && <CircularProgress size={30} color="secondary" />}
                  Sign In
                </Button>
              </Box>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Footer />
    </>
  )
}

export default Login