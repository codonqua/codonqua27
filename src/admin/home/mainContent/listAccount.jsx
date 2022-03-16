import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import SearchBar from '../sitebar/searchbar'
import MenuLeft from '../sitebar'
import { Link, useNavigate } from 'react-router-dom'
import { Book } from '@mui/icons-material'

const ListAccount = () => {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios.get('http://localhost:3000/api/admin/students')
                .then(res => {
                    if (res.data.success) {
                        setStudents(res.data.data);

                    }
                })
        } else {
            navigate('/login');
        }
    }, [])
    console.log(students);
    return (
        <>
            <div className="Homepage">
                <div className='navbar_header'>
                    <h4>Trang quản lý</h4>
                </div>
                <section className="section_container_homepage row">
                    <MenuLeft />
                    <div className="Homepage col-9">
                        <SearchBar></SearchBar>
                        <div className="equipment">
                            <h3>Danh sách tài khoản</h3>
                            {students.length && (
                                <>
                                    <table className="table">
                                        <thead>
                                            <tr>
                                                <th >STT</th>
                                                <th>ID</th>
                                                <th >Email</th>
                                                <th>Tên</th>
                                                <th>Loại</th>
                                                <th className="text_align">Hành động</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {students.map((student, index) => {

                                                return <tr key={index}>
                                                    <th scope="row">{index + 1}</th>
                                                    <td>{student.idStudent}</td>
                                                    <td>{student.email}</td>
                                                    <td>{student.fullname}</td>
                                                    <td>Sinh viên</td>
                                                    <td className="text_align">
                                                        <Link to={`/admin/student/${student.idStudent}`}> <button className='btn_xem_sua_dongbang'>Xem</button></Link>
                                                        <Link to="/admin/editAccount"><button className='btn_xem_sua_dongbang'>Sửa</button></Link>
                                                        <Link to="/admin/confirmFreeze"><button className='btn_xem_sua_dongbang'>Đóng băng</button></Link>
                                                    </td>
                                                </tr>
                                            })}
                                        </tbody>
                                    </table>
                                </>
                            )}
                        </div>
                    </div>
                </section>
            </div>
        </>
    )
}
export default ListAccount;