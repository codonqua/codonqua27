import MenuLeft from "../sitebar";
import SearchBar from "../sitebar/searchbar";
import React, { useState } from "react";
import { render } from "react-dom";
import ReactPhoneInput from "react-phone-input-2";
import 'react-phone-input-2/lib/style.css'
function AddAccount() {
    // const [phone, setPhone] = useState("")
    // const handleOnChange = (phone) => {
    //     setPhone(phone)
    // }

    return (
        <div className="Homepage">
            <div className='navbar_header'>
                <h4>Trang quản lý</h4>

            </div>
            <section className="section_container_homepage row">
                <MenuLeft />
                <div className="Homepage col-9">
                    <SearchBar></SearchBar>
                    <h5 className="text_edit_detail_book">Thêm tài khoản</h5>
                    <div className="list_option">
                        <form>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Email</span>
                                </div>
                                <input type="email" placeholder="Vui lòng điền email" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Mật khẩu</span>
                                </div>
                                <input type="password" placeholder="Vui lòng điền mật khẩu" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Tên</span>
                                </div>
                                <input type="text" placeholder="Vui lòng điền tên" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Ngày Sinh</span>
                                </div>
                                <input type="date" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Giới tính</span>
                                </div>
                                <div className="check_TT_SV">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios13" value="option3" />
                                        <label className="form-check-label" for="exampleRadios13">
                                            Nam
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios1" id="exampleRadios23" value="option4" checked />
                                        <label className="form-check-label" for="exampleRadios23">
                                            Nữ
                                        </label>
                                    </div>
                                </div>

                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Địa chỉ</span>
                                </div>
                                <input type="text" placeholder="Vui lòng điền địa chỉ" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Số điện thoại</span>
                                </div>
                                <ReactPhoneInput
                                    inputExtraProps={{
                                        name: false,
                                        required: true,
                                        autoFocus: true
                                    }}
                                    defaultCountry={"vn"}
                                />
                            </div>

                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Mã người dùng</span>
                                </div>
                                <input type="text" placeholder="Vui lòng điền Mã người dùng" className="form-control" aria-label="Default" aria-describedby="inputGroup-sizing-default" />
                            </div>
                            <div className="input-group mb-3">
                                <div className="input-group-prepend">
                                    <span className="input-group-text" id="inputGroup-sizing-default">Phân quyền</span>
                                </div>
                                <div className="check_TT_SV">
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios1" value="option1" checked />
                                        <label className="form-check-label" for="exampleRadios1">
                                            Thủ thư
                                        </label>
                                    </div>
                                    <div className="form-check">
                                        <input className="form-check-input" type="radio" name="exampleRadios" id="exampleRadios2" value="option2" />
                                        <label className="form-check-label" for="exampleRadios2">
                                            Sinh viên
                                        </label>
                                    </div>
                                </div>

                            </div>
                        </form>
                        <div className="btn_add ">
                            <button type="button" className="btn btn-success">Thêm</button>
                            <button type="button" className="btn btn-danger">Huỷ</button>
                        </div>
                    </div>
                </div>
            </section>


        </div>
    )
}

export default AddAccount;