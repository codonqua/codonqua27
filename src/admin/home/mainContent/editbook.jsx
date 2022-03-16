import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import SearchBar from '../sitebar/searchbar'
import MenuLeft from '../sitebar'
import { Link, useNavigate } from 'react-router-dom'

const EditBook = () => {
    const [books, setBooks] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if(token) {
        axios.get('http://localhost:3000/api/admin/books')
            .then(res => {
            if(res.data.success) {
                setBooks(res.data.data);
             
            }
            })
        } else {
        navigate('/login');
        }
    }, [])
    console.log(books);
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
                        <section className="section_container_homepage">
                            <SearchBar />
                            {books.length && (
                            <>
                                <table className="table">
                                    <thead>
                                        <tr>
                                            <th scope="col">STT</th>
                                            <th scope="col">ID</th>
                                            <th scope="col">Tên sách</th>
                                            <th scope="col">Id thể loại</th>
                                            <th scope="col" className='text_align'>Tác vụ</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {books.map((book, index) =>(
                                        <tr key={index}>
                                            <th scope="row">{index + 1}</th>
                                            <td>{book.idBook}</td>
                                            <td>{book.title}</td>
                                            <td>{book.idBookCategory}</td>
                                            {/* <td>{book.type}</td> */}
                                            <td className='text_align'>
                                                <Link to={`/admin/books/${book.idBook}/update`}>
                                                    <button type="button" className="btn btn-warning">Sửa</button>
                                                </Link>
                                                <Link to={`/admin/books/${book.idBook}`}>
                                                    <button type="button" className="btn btn-warning">Xem chi tiết</button>
                                                </Link>
                                            </td>
                                        </tr>
                                        ))}
                                    </tbody>
                                </table>
                                <nav aria-label="Page navigation example">
                                    <ul className="pagination justify-content-center">
                                        <li className="page-item disabled">
                                            <a className="page-link" href="#" tabIndex="-1">Previous</a>
                                        </li>
                                        <li className="page-item"><a className="page-link" href="#">1</a></li>
                                        <li className="page-item"><a className="page-link" href="#">2</a></li>
                                        <li className="page-item"><a className="page-link" href="#">3</a></li>
                                        <li className="page-item">
                                            <a className="page-link" href="#">Next</a>
                                        </li>
                                    </ul>
                                </nav>
                            </>
                            )}
                        </section>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default EditBook


