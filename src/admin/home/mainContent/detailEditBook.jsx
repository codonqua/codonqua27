import axios from "axios";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Footer from "../../../components/common/Footer";
import Header from "../../../components/common/Header";
import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";

function DetaiEditBook() {
    const navigate = useNavigate();
    const { idBook } = useParams();
    
    const [book, setBook] = useState({});
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

    const handleSave = () => {
        if(validate) {
            const book = {
                idBook,
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
                img,
            }
            console.log(book);
            axios.post('http://localhost:3000/api/admin/updateBook', book)
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

    const handleCancel = () => {
        navigate('/admin/books/edit')
    }

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

    useEffect(() => {
        setId(book.idBook)
        setTitle(book.title)
        setAuthor(book.author)
        setISBN(book.ISBN)
        setAmount(book.amount)
        setPage(book.page)
        setIdBookCategory(book.idBookCategory)
        setPublisher(book.publisher)
        setPublishDate(book.publishDate?.slice(0,10))
        setInputDate(book.inputDate?.slice(0,10))
        setOutputDate(book.outputDate?.slice(0,10))
        setDescription(book.description)
        // setImg(book.)
    }, [book])

    useEffect(() => {
        if(id && title && author && ISBN && amount && page && idBookCategory && publisher && publishDate && inputDate && outputDate) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    }, [id, title, author, ISBN, amount, page, idBookCategory, publisher, publishDate, inputDate, outputDate])

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
                        <SearchBar></SearchBar>
                        <h5 className="text_edit_detail_book">Sửa chi tiết</h5>
                        <div className="list_option">
                            <form>
                                <div className="input-group mb-3">
                                    <div className="input-group-prepend">
                                        <span className="input-group-text">ID sách</span>
                                    </div>
                                    <input type="text" className="form-control" value={id || ''} disabled onChange={e => setId(e.target.value)}/>
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
                            <div className="btn_add ">
                                <button type="button" className="btn btn-success" onClick={handleSave}>Lưu</button>
                                <button type="button" className="btn btn-danger" onClick={handleCancel}>Huỷ</button>
                            </div>
                        </div>
                    </div>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default DetaiEditBook;