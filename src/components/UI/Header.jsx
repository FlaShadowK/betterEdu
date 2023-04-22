import styles from './Header.module.css';

const Header = () => {
    return (
        <>
            <div style={{backgroundColor: "black"}}
                 className={'d-flex justify-content-center text-center align-items-center h-100 py-3'}>
                <a href="https://github.com/betterEdu/betterEdu">
                    <div className={'d-flex justify-content-center align-items-center'}>
                        <div>
                            <img src="https://github.githubassets.com/favicons/favicon-dark.png" alt="github"
                                 className={'pe-2'}/>
                        </div>
                        <div>
                            <a style={{color: "white", display: "inline-block"}}>GitHUB repo</a>
                        </div>
                    </div>
                </a>
            </div>
            <nav style={{paddingLeft: '150px', paddingRight: '150px'}}
                 className={'d-flex justify-content-between py-3 align-items-center border-bottom'}>
                <div>
                    <a href={'/'}>
                        <img className={'pe-4 py-3'} src="/logo.svg" alt="logo"/>
                    </a>
                    <span className={'align-middle ' + styles.links}>
                    <a className={'px-3'} href={'/'}>Početna</a>
                    <a className={'px-3'} href={'/'}>O nama</a>
                    <a className={'px-3'} href={'/'}>Kontakt</a>
                </span>
                </div>
                <div className={styles.links}>
                    <a className={'px-4'} href={'/login'}>Prijavi se</a>
                    <a className={'btn btn-primary text-white'} href={'/register'}>Registruj se</a>
                </div>
            </nav>
        </>
    );
}

export default Header;