import StudentSeach from "../sitebar/studentSearch";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useNavigate } from "react-router-dom";

const InforLoan = () => {
    const [student, setStudent] = useState([]);
    const [count1, setCount1] = useState([0])
    const [count2, setCount2] = useState([0])
    const navigate = useNavigate();
    useEffect(() => {
        const token = JSON.parse(localStorage.getItem('token'));
        if (token) {
            axios.get('http://localhost:3000/api/admin/loan/1851061893')
                .then(res => {
                    if (res.data.success) {
                        setStudent(res.data.data);
                        console.log(res.data.data);
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
                            <h1>Thông tin mượn/ trả sách</h1>
                        </div>

                        <table className="table">
                            <tbody>
                                <tr>
                                    <th scope="col">Số lượng sách đã mượn</th>
                                    {

                                        <td scope="col">{student.muon + student.tra}</td>
                                    }

                                </tr>
                                <tr>
                                    <th scope="row">Số lượng sách đã trả</th>
                                    {

                                        <td scope="col">{student.tra}</td>
                                    }
                                </tr>
                            </tbody>
                        </table>
                    </div>

                </section>
            </div>
            <Footer />
        </>
    )
}
export default InforLoan;