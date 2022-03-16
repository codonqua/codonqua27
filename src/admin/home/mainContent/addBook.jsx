import React, {useEffect, useState} from 'react'
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";
import Header from "../../../components/common/Header"
import Footer from "../../../components/common/Footer"
// import { useState } from "react";
function AddBook() {
    const navigate = useNavigate();

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [ISBN, setISBN] = useState('');
    const [amount, setAmount] = useState(0);
    const [page, setPage] = useState(0);
    const [idBookCategory, setIdBookCategory] = useState('');
    const [publisher, setPublisher] = useState('');
    const [publishDate, setPublishDate] = useState('');
    const [inputDate, setInputDate] = useState('');
    const [outputDate, setOutputDate] = useState('');
    const [description, setDescription] = useState('');
    const [img, setImg] = useState('');

    const [validate, setValidate] = useState(false);

    useEffect(() => {
        if(id && title && author && ISBN && amount && page && idBookCategory && publisher && publishDate && inputDate && outputDate) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    }, [id, title, author, ISBN, amount, page, idBookCategory, publisher, publishDate, inputDate, outputDate])

    const handleSubmit =  async () => {
        if(validate) {
            const book = {
                idBook: id,
                title,
                author,
                ISBN,
                amount,
                page,
                idBookCategory,
                publisher,
                publishDate,
                inputDate,
                outputDate,
                description,
            }
            
            axios.post('http://localhost:3000/api/admin/addBook', book)
                .then(res => {
                    if(res.data.success) {
                        navigate('/admin/books/edit');
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

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
                        <SearchBar />
                        <div className="list_option">
                        <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">ID sách</span>
                                    </div>
                                    <input type="text" className="form-control" value={id || ''} onChange={e => setId(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Tác giả</span>
                                    </div>
                                    <input type="text" className="form-control"  value={author || ''} onChange={e => setAuthor(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Tên sách</span>
                                    </div>
                                    <input type="text" className="form-control"  value={title || ''} onChange={e => setTitle(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">ISBN</span>
                                    </div>
                                    <input type="text" className="form-control"  value={ISBN || ''} onChange={e => setISBN(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Số lượng</span>
                                    </div>
                                    <input type="number" className="form-control" value={amount || ''} onChange={e => setAmount(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Số trang</span>
                                    </div>
                                    <input type="number" className="form-control" value={page || ''} onChange={e => setPage(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">ID thể loại</span>
                                    </div>
                                    <input type="text" className="form-control" value={idBookCategory || ''} onChange={e => setIdBookCategory(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Nhà xuất bản</span>
                                    </div>
                                    <input type="text" className="form-control" value={publisher || ''} onChange={e => setPublisher(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Ngày xuất bản</span>
                                    </div>
                                    <input type="text" className="form-control" value={publishDate || ''} onChange={e => setPublishDate(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Ngày nhập sách</span>
                                    </div>
                                    <input type="text" className="form-control" value={inputDate || ''} onChange={e => setInputDate(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Ngày xuất sách</span>
                                    </div>
                                    <input type="text" className="form-control" value={outputDate || ''} onChange={e => setOutputDate(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Mô tả</span>
                                    </div>
                                    <input type="text" className="form-control" value={description || ''} onChange={e => setDescription(e.target.value)}/>
                                </div>
                                <div className="input-group mb-3" >
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">Hình ảnh</span>
                                    </div>
                                    <div id="choose_image">
                                        <div className="form-group">
                                            <input type="file" className="form-control-file " id="exampleFormControlFile1" />
                                        </div>
                                    </div>
                                </div>
                            </form>
                            <div className="btn_add">
                                <button onClick={handleSubmit} className="btn btn-success search_admin">Thêm</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default AddBook;