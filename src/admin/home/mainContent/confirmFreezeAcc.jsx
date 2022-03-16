import MenuLeft from "../sitebar";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const ConfirmFreeze = () => {
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios.get('http://localhost:3000/api/admin/student/1851061893')
                .then(res => {
                    if (res.data.success) {
                        setStudent(res.data.data);
                        console.log(student);
                    }
                })
        } else {
            navigate('/login');
        }
    }, [])
    return (
        <>
            <Header />
            <div className="Homepage">
                <div className='navbar_header'>
                    <h4>Trang quản lý</h4>
                </div>
                <section className="section_container_homepage row">
                    <MenuLeft />
                    <div className="Homepage col-9">
                        <div className="Freeze">
                            <h1 className="text_align text_color">Thông tin tài khoản</h1>
                            <table >
                                <tbody>
                                    <tr>
                                        <td >Tên sinh viên</td>
                                        {/* <td>{student[0].fullname}</td> */}

                                    </tr>
                                    <tr>
                                        <td>Mã sinh viên</td>
                                        <td>20 chỗ ngồi/ 1 phòng</td>

                                    </tr>
                                    <tr>
                                        <td>Ngày sinh</td>
                                        <td>7</td>
                                    </tr>
                                    <tr>
                                        <td>Giới tính </td>
                                        <td>10 chỗ ngồi/ 1 phòng</td>
                                    </tr>
                                    <tr>
                                        <td>Địa chỉ</td>
                                        <td>Bàn, ghế, quạt, điều hòa, máy tính</td>
                                    </tr>
                                    <tr>
                                        <td>Số điện thoại</td>
                                        <td>8h-17h30 từ t2-t6</td>
                                    </tr>
                                    <tr>
                                        <td>Email</td>
                                        <td>8h-17h30 từ t2-t6</td>
                                    </tr>
                                </tbody>
                            </table>
                            <h4 className="text_align">Chắc chắn muốn đóng băng tài khoản ?</h4>
                            <div className="btn_xacnhan_huy text_align">
                            <button type="button" class="btn btn-warning">Xác nhận</button>
                            <button type="button" class="btn btn-danger">Huỷ</button>
                                </div>
                        </div>

                    </div>

                </section>
            </div>
            <Footer />
        </>

    )
}
export default ConfirmFreeze;