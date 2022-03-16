import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import MenuLeft from '../sitebar'
import { useNavigate, useParams } from 'react-router-dom'

const DetailBook = () => {
    const [book, setBook] = useState({});
    const navigate = useNavigate();
    
    const { idBook } = useParams();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if(!token) {
            navigate('/login');
            return;
        }

        axios.get(`http://localhost:3000/api/admin/searchBook/${idBook}`)
            .then(res => {
                if(res.data.success) {
                    setBook(res.data.data[0]);
                }
            })
    }, [idBook])
    // console.log(book);
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
                            <h1>Xem chi tiết sách</h1>
                            <table >
                                <tbody>
                                    <tr>
                                        <td >Mã sách</td>
                                        <td>{book.idBook}</td>
                                    </tr>
                                    <tr>
                                        <td>Tên sách</td>
                                        <td>{book.title}</td>
                                    </tr>
                                    <tr>
                                        <td>Tác giả</td>
                                        <td>{book.author}</td>
                                    </tr>
                                    <tr>
                                        <td>số ISBN</td>
                                        <td>{book.ISBN}</td>
                                    </tr>
                                    <tr>
                                        <td>Số lượng</td>
                                        <td>{book.amount}</td>
                                    </tr>
                                    <tr>
                                        <td>Số trang</td>
                                        <td>{book.page}</td>
                                    </tr>
                                    <tr>
                                        <td>Mã thể loại</td>
                                        <td>{book.idBookCategory}</td>
                                    </tr>
                                    <tr>
                                        <td>Xuất sách</td>
                                        <td>{book.outputDate?.slice(0, 10)}</td>
                                    </tr>
                                    <tr>
                                        <td>Nhập sách</td>
                                        <td>{book.inputDate?.slice(0, 10)}</td>
                                    </tr>
                                    <tr>
                                        <td>Nhà xuất bản</td>
                                        <td>{book.publisher}</td>
                                    </tr>
                                    <tr>
                                        <td>Ngày xuất bản</td>
                                        <td>{book.publishDate?.slice(0, 10)}</td>
                                    </tr>
                                    <tr>
                                        <td>Mô tả</td>
                                        <td>{book.description}</td>
                                    </tr>
                                    <tr>
                                        <td>Hình ảnh</td>
                                        <td>{book.idBook}</td>
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

export default DetailBook




