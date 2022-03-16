import MenuLeft from "../sitebar";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
const ReadingRoom = () => {
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
                    <div className="phongdoc">
                        <h1>Thông tin phòng đọc và Internet</h1>
                        <table >
                            <tbody>
                                <tr>
                                    <td >Số lượng phòng đọc</td>
                                    <td>10</td>

                                </tr>
                                <tr>
                                    <td>Sức chứa phòng đọc</td>
                                    <td>20 chỗ ngồi/ 1 phòng</td>

                                </tr>
                                <tr>
                                    <td>Số lượng phòng internet</td>
                                    <td>7</td>
                                </tr>
                                <tr>
                                    <td>Sức chứa phòng Internet </td>
                                    <td>10 chỗ ngồi/ 1 phòng</td>
                                </tr>
                                <tr>
                                    <td>Thiết bị các phòng gồm</td>
                                    <td>Bàn, ghế, quạt, điều hòa, máy tính</td>
                                </tr>
                                <tr>
                                    <td>Thời gian mở - đóng</td>
                                    <td>8h-17h30 từ t2-t6</td>
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
export default ReadingRoom;