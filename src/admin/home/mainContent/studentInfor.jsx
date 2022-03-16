import StudentSeach from "../sitebar/studentSearch";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const StudentInfor = () => {
    const [student, setStudent] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios.get('http://localhost:3000/api/admin/student/1851061893')
                .then(res => {
                    if (res.data.success) {
                        setStudent(res.data.data);
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
                <section className="section_container_homepage row StudentSearchBook">
                    <StudentSeach></StudentSeach>
                    <div className="Homepage col-9">
                        <div className="phongdoc">
                            <h1>Thông tin cá nhân</h1>
                        </div>
                        {
                            student.length ? (
                                <>
                                    <table className="table">
                                    <tbody>
                                            <tr>
                                                <th scope="col">Mã Sinh Viên</th>
                                                    <td scope="col">{student[0].idStudent}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Tên Sinh Viên</th>
                                                <td>{student[0].fullname}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Ngày Sinh</th>
                                                <td>{student[0].birthday.slice(0,10)}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Địa chỉ</th>
                                                <td>{student[0].address}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Giới Tính</th>
                                                <td>{student[0].gender}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Số Điện Thoại</th>
                                                <td>{student[0].phoneNumber}</td>
                                            </tr>
                                            <tr>
                                                <th scope="row">Email</th>
                                                <td>{student[0].idStudent}@e.tlu.edu.vn</td>
                                            </tr>
                                   
                                        </tbody>
                                    </table>
                                </>
                            ) : ''
                        }

                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}
export default StudentInfor;