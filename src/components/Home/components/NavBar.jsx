const NavBar = () => {
    return(
        <nav className="navbar navbar-expand-lg" style={{minHeight: 80, borderBottom: '1px solid #F2F4F7'}}>
            <div className="container">
                <a className="navbar-brand" href="/">better<span style={{color: '#0085FF'}}>Edu</span></a>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent"
                        aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Početna</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">O nama</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link" aria-current="page" href="/">Kontakt</a>
                        </li>
                    </ul>
                    <div className="d-flex">
                        <a className="btn btn-light me-2" href={'/login'}>Prijavi se</a>
                        <a className="btn btn-primary" href={'/register'}>Registruj se</a>
                    </div>
                </div>
            </div>
        </nav>
    );
}

export default NavBar;