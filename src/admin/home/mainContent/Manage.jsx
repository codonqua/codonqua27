import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

import SearchBar from '../sitebar/searchbar'

const Manage = () => {

  const [books, setBooks] = useState([]);
  const navigate = useNavigate();
  useEffect(() => {
    const token = JSON.parse(localStorage.getItem('token'));
    if(token) {
      axios.get('http://localhost:3000/api/admin/books')
        .then(res => {
          if(res.data.success) {
            setBooks(res.data.data);
            console.log(res.data.data);
          }
        })
    } else {
      navigate('/login');
    }
  }, [])

  return (
    <div className="Homepage col-9">
      <section className="section_container_homepage">
        <SearchBar />
        {books.length ? (
          <>
            <table className="table">
              <thead>
                <tr>
                  <th scope="col">STT</th>
                  <th scope="col">Mã Sách</th>
                  <th scope="col">Tên sách</th>
                  <th scope="col">Số Lượng</th>
                  <th scope="col">Mã thể loại</th>
                </tr>
              </thead>
              <tbody>
                {books.map((book, index) =>(
                  <tr key={index}>
                    <th scope="row">{index + 1}</th>
                    <td>{book.idBook}</td>
                    <td>{book.title}</td>
                    <td>{book.amount}</td>
                    <td>{book.type}</td>
                  </tr>
                ))}
              </tbody>
            </table>
            <nav aria-label="Page navigation example">
              <ul className="pagination justify-content-center">
                <li className="page-item disabled">
                  <span className="page-link" href="#" tabIndex="-1">Previous</span>
                </li>
                <li className="page-item"><span className="page-link" href="#">1</span></li>
                <li className="page-item"><span className="page-link" href="#">2</span></li>
                <li className="page-item"><span className="page-link" href="#">3</span></li>
                <li className="page-item">
                  <span className="page-link" href="#">Next</span>
                </li>
              </ul>
            </nav>
          </>
        ) : ''}
      </section>
    </div>
  )
}

export default Manage