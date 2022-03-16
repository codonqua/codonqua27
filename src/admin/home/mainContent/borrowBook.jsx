import React, { useEffect, useState } from 'react'
import axios from 'axios'
import Header from '../../../components/common/Header'
import Footer from '../../../components/common/Footer'
import SearchBar from '../sitebar/searchbar'
import MenuLeft from '../sitebar'
import { Link, useNavigate } from 'react-router-dom'

const BorrowBook = () => {

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
                        <SearchBar/>
                        <h3 className='text_align text_color'>Quản lý mượn trả sách</h3>
                        <div className="list_option">
                        <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Nhập MSV cần quản lý</span>
                                    </div>
                                    <input type="text" className="form-control" />
                                </div>
                            </form>
                            <div className="text_align">
                                <button className="btn btn-warning">Chuyển đến phần quản lý</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    )
}

export default BorrowBook




