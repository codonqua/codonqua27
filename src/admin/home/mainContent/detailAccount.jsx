import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import MenuLeft from '../sitebar'
import { useNavigate, useParams } from 'react-router-dom'

const DetailAccount = () => {
    const [student, setStudent] = useState({});
    const navigate = useNavigate();
    
    const { idStudent } = useParams();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if(!token) {
            navigate('/login');
            return;
        }

        axios.get(`http://localhost:3000/api/admin/student/${idStudent}`)
            .then(res => {
                if(res.data.success) {
                    setStudent(res.data.data[0]);
                }
            })
    }, [idStudent])
    // const a = student.birthday
    // let b = a.slice(0,10)
    // console.log(b);
    return (
        <>
            <Header />
            <div className="Homepage">
                <div className='navbar_header'>
                    <h4>Trang quản lý</h4>
                </div>
                <div className="section_container_homepage row">
                    <MenuLeft />
                    <div className="Homepage col-9">
                        <div className="phongdoc">
                            <h1>Xem chi tiết tài khoản</h1>
                            <table>
                                <tbody>
                                    <tr>
                                        <td >Loại tài khoản</td>
                                        <td>Sinh viên</td>
                                    </tr>
                                    <tr>
                                        <td>Mã tài khoản</td>
                                        <td>{student.idStudent}</td>
                                    </tr>
                                    <tr>
                                        <td>Họ và tên </td>
                                        <td>{student.fullname}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày sinh </td>
                                        <td>{student.birthday}</td>
                                    </tr>
                                    <tr>
                                        <td>Giới tính </td>
                                        <td>{student.gender}</td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td>{student.address}</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại </td>
                                        <td>{student.phoneNumber}</td>
                                    </tr>
                                    <tr>
                                        <td>Email </td>
                                        <td>{student.email}</td>
                                    </tr>
                                    <tr>
                                        <td>Trạng thái </td>
                                        <td>{student.idStudent}</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default DetailAccount




