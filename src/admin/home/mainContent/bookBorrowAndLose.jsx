import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
const BorrowAndLose = () =>{
    return (
     <>
     <Header/>
        <div className="Homepage">
        <div className='navbar_header'>
            <h4>Trang quản lý</h4>

        </div>
        <section className="section_container_homepage row">
            <MenuLeft />
            <div className="Homepage col-9">
                <SearchBar></SearchBar>
                <div className="equipment">
                
                    <table className="table"> 
                        <tbody>
                            <tr>
                                <th >STT</th>
                                <th>Mã sách</th>
                                <th >Tên sách</th>
                                <th>Trong thư viện</th>
                                <th>Đang mượn</th>
                                <th>Mất</th>
                                <th>Tổng</th>                            
                            </tr>
                            <tr>
                                <td >1</td>
                                <td>Quạt</td>
                                <td >20</td>
                                <td>2</td>
                                <td>Quạt</td>
                                <td >20</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td >2</td>
                                <td>Quạt</td>
                                <td >20</td>
                                <td>2</td>
                                <td>Quạt</td>
                                <td >20</td>
                                <td>2</td>
                            </tr>
                        </tbody>
                    </table>
                </div>

            </div>

        </section>
    </div>
    <Footer/>
     </>
    )
}
export default BorrowAndLose;