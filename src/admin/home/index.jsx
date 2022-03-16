import MenuLeft from "./sitebar"
import Manage from "./mainContent/Manage";
import './styles/style.css';
import Header from "../../components/common/Header"
import Footer from "../../components/common/Footer"

function Homepage() {
    return (
        <>
            <Header />
            <div className="Homepage">
                <h4>Trang Quản Lý</h4>
                <section className="section_container_homepage row">
                    <MenuLeft />
                    <Manage/>
                </section>
            </div>
            <Footer />
        </>
    )
}
export default Homepage;
