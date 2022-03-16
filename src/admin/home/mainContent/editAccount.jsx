import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";

function EditAccount() {
    return (
        <div className="Homepage">
            <div className='navbar_header'>
                <h4>Trang quản lý</h4>

            </div>
            <section className="section_container_homepage row">
                <MenuLeft />
                <div className="Homepage col-9">
                    <SearchBar></SearchBar>
                    <h5 className="text_edit_detail_book">Sửa tài khoản</h5>
                    <div className="list_option">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Tên đăng nhập</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Mật khẩu</span>
                                </div>
                                <input type="password" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Ngày sinh</span>
                                </div>

                                <input type="date" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Giới tính</span>
                                </div>
                                <div className="check_TT_SV">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        <label className="form-check-label" for="exampleRadios1">
                                            Nam
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                           Nữ
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Địa chỉ</span>
                                </div>
                                <input type="text" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3" >
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Số điện thoại</span>
                                </div>
                                <input type="number" min="0" max="10" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                </div>
                                <input type="email" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Phân quyền</span>
                                </div>
                                <div className="check_TT_SV">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios3" value="option3" checked />
                                        <label className="form-check-label" for="exampleRadios3">
                                            Thủ thư
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios4" value="option4" />
                                        <label className="form-check-label" for="exampleRadios4">
                                            Sinh viên
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div className="btn_add ">
                            <button type="Submit" className="btn btn-success" >Sửa</button>
                            <button type="button" className="btn btn-danger">Huỷ</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default EditAccount;