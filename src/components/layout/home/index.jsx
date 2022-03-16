import React, { useEffect, useState } from 'react'
import Header from '../../common/Header'
import Footer from '../../common/Footer'
import { useNavigate } from "react-router-dom";

function Home() {
  const [token, setToken] = useState(false);
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    setToken(token);

    if (!token) {
      navigate('/login');
    }
  }, [token])

  return (
    <>
      <Header token={token} />
      <h1>Home Page</h1>
      <Footer />
    </>
  )
}

export default Home