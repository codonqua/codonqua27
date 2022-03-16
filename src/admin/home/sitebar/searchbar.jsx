function SearchBar() {
    return (
        <section className="section_container_homepage">
            <nav className="navbar navbar-light bg-light justify-content-between">
                <form className="form-inline">
                    <input className="form-control mr-sm-2" type="search" placeholder="Nhập từ khoá tìm kiếm" aria-label="Search" />
                    <button className="btn btn-outline-success my-2 my-sm-0 search_admin" type="submit">Tìm</button>
                </form>
            </nav>
        </section>
    );
}

export default SearchBar;