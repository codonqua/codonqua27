import React from 'react'
import SearchBar from '../sitebar/searchbar'
import MenuLeft from '../sitebar'
import { Link } from 'react-router-dom'
import { paths } from '../../../utils/Constants'
const FreezeAccount = () => {
    return (
        <div className="Homepage">
            <div className='navbar_header'>
                <h4>Trang quản lý</h4>
            </div>
            <div className="section_container_homepage row">
                <MenuLeft />
                <div className="Homepage col-9">
                    <section className="section_container_homepage">
                        <SearchBar></SearchBar>
                        <table className="table">
                            <thead>
                                <tr>
                                    <th scope="col">STT</th>
                                    <th scope="col">ID Tài Khoản</th>
                                    <th scope="col">Tên Tài Khoản</th>
                                 
                                    <th scope="col">Tác vụ</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>1851061691</td>
                                    <td>Nguyễn Văn A</td>
                               
                                    <td><Link to={paths.detailEditBook}><button type="button" className="btn btn-danger">Đóng Băng</button></Link> </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>1851061691</td>
                                    <td>Nguyễn Văn A</td>
                               
                                    <td><Link to={paths.detailEditBook}><button type="button" className="btn btn-danger">Đóng Băng</button></Link> </td>
                                </tr>
                                <tr>
                                    <th scope="row">1</th>
                                    <td>1851061691</td>
                                    <td>Nguyễn Văn A</td>
                               
                                    <td><Link to={paths.detailEditBook}><button type="button" className="btn btn-danger">Đóng Băng</button></Link> </td>
                                </tr>
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
                    </section>
                </div>
            </div>
        </div>
    )
}

export default FreezeAccount
