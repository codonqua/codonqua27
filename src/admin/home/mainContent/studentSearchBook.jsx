import { useEffect, useState } from "react";
import StudentSeach from "../sitebar/studentSearch";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import axios from "axios";

const StudentSearchBook = () => {
    const [bookList, setBookList] = useState([]);

    const [id, setId] = useState('');
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [keywords, setKeywords] = useState('');
    const [validate, setValidate] = useState(false);

    const handleClick = () => {
        if(validate) {
            const book = {
                idBook: id,
                title,
                author
            }
            
            axios.get('http://localhost:3000/api/admin/searchBook', book)
                .then(res => {
                    if(res.data.success) {
                        setBookList(res.data.data)
                    }
                })
                .catch(err => {
                    console.log(err);
                })
        }
    }

    useEffect(() => {
        if(id || title || author) {
            setValidate(true);
        } else {
            setValidate(false);
        }
    }, [id, title, author])

    return (
        <>
            <Header />
            <div className="Homepage">
                <section className="section_container_homepage row StudentSearchBook">
                    {/* <MenuLeft /> */}
                    <StudentSeach></StudentSeach>
                    <div className="Homepage col-9">
                        <div className="phongdoc">
                            <h1>Tìm kiếm sách</h1>
                        </div>
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
                                    <span className="input-group-text">Từ khoá ?</span>
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text">ID Thể loại</span>
                                </div>
                                <input type="text" className="form-control" />
                            </div>
                        </form>
                        <div className="btn_add">
                            <button onClick={handleClick} type="button" className="btn btn-success search_admin">Tìm</button>
                        </div>
                    </div>

                </section>


                {bookList.length > 0 && (
                <div className="resultSearch">
                    <h3 className="resultSearchTitle">Kết quả tìm kiếm</h3>
                    <table class="table">
                        <thead>
                            <tr>
                                <th scope="col">STT</th>
                                <th scope="col">ID</th>
                                <th scope="col">Tên Sách</th>
                                <th scope="col">Thể Loại</th>
                                <th scope="col">Tác giả</th>
                                <th scope="col">NXB</th>
                                <th scope="col">SL trong thư viện</th>
                                <th scope="col">Số trang</th>
                                <th scope="col">Hình ảnh</th>
                            </tr>
                        </thead>
                        <tbody>
                            {bookList.map((book, index) => (
                                <tr key={index}>
                                    <th scope="row">{index + 1}</th>
                                    <td>{book.idB}</td>
                                    <td>{book.title}</td>
                                    <td>{book.idBookCategory}</td>
                                    <td>{book.author}</td>
                                    <td>{book.publisher}</td>
                                    <td>{book.amount}</td>
                                    <td>{book.page}</td>
                                    <td></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
                )}
            </div>
            <Footer />
        </>
    )
}
export default StudentSearchBook;