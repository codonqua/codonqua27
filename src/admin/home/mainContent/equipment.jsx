import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
const Equipment = () =>{
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
                    <h3>Trang thiết bị</h3>
                    <table className="table"> 
                        <tbody>
                            <tr>
                                <td >STT</td>
                                <td>Tên Thiết Bị</td>
                                <td >Số Lượng</td>
                                <td>Đang Bảo Trì</td>
                            </tr>
                            <tr>
                                <td >1</td>
                                <td>Quạt</td>
                                <td >20</td>
                                <td>2</td>
                            </tr>
                            <tr>
                                <td >2</td>
                                <td>Điều hoà</td>
                                <td >30</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td >3</td>
                                <td>Bàn</td>
                                <td >100</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td >4</td>
                                <td>Ghế</td>
                                <td >100</td>
                                <td>10</td>
                            </tr>
                            <tr>
                                <td >5</td>
                                <td>Máy Tính</td>
                                <td >100</td>
                                <td>10</td>
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
export default Equipment;