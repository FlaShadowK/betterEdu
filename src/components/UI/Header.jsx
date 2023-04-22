import styles from './Header.module.css';

const Header = () => {
    return (
        <nav style={{paddingLeft: '150px', paddingRight: '150px'}} className={'d-flex justify-content-between py-3 align-items-center border-bottom'}>
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
    );
}

export default Header;