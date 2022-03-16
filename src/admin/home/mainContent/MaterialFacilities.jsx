import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";
import phongdoc from "../../../assets/images/phongdoc.png"
import trangthietbi from "../../../assets/images/trangthietbi.png"
import { Link } from "react-router-dom";
import { paths } from "../../../utils/Constants";
import Header from "../../../components/common/Header";
import Footer from "../../../components/common/Footer";
const MaterialFacilities = () => {

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
                    <div className="option_material_fac">
                        <Link to={paths.readingRoom}>
                            <div className="option_material_fac_item">
                                <img src={phongdoc} alt="" />
                                <h4 className="text_align">Phòng đọc & Internet</h4>
                            </div>
                        </Link>
                        <Link to={paths.equipment}>
                        <div className="option_material_fac_item">
                            <img src={trangthietbi} alt="" />
                            <h4>Trang thiết bị</h4>
                        </div>
                        </Link>
                    </div>
                </div>

            </section>
        </div>
        <Footer></Footer>
        </>
     
    );
}

export default MaterialFacilities;