import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'

import logoSO from '../../assets/images/bytesize_sign_out.svg'

const Header = () =>  {
    const navigate = useNavigate();
    const [token, setToken] = useState(false);
    const handleSignout = () => {
        localStorage.removeItem('token');
        navigate('/');
    }

    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        setToken(token);

        if(!token) {
            navigate('/login');
        }
    }, [token])

    return (
        <header>
            <div className='banner_header'>
                <img style={{width: '100%'}} src="https://uploads-ssl.webflow.com/6209d1f44ae14d3e8f726765/620b12e172a99153f5053b8a_banner.png" />
            </div>
            <div className="nav_bar_admin">
                <ul>
                    <li><Link className="link_a" to='/'>Trang chủ</Link></li>
                    <li><a className="link_a" href="#">Duyệt theo</a></li>
                    <li><a className="link_a" href="#">Liên hệ</a></li>
                </ul>
                <div>
                    {token ? (
                        <>
                            <Link className="link_a" to='/admin'>Go to Admin</Link>
                            <img src={logoSO} alt="" />
                            <Link className="link_a" to='/' onClick={handleSignout}>Đăng xuất</Link>
                        </>
                    ) : (
                        <>
                            <img src={logoSO} alt="" />
                            <Link className="link_a" to='/login'>Đăng nhập</Link>
                        </>
                    )}
                </div>
            </div>
      
        </header>
    )
}
export default Header;