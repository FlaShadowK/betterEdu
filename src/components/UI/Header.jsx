import styles from './Header.module.css';

const Header = () => {
    return (
        <>

            <nav style={{paddingLeft: 20, paddingRight: 20}}
                 className={'d-flex justify-content-between py-1 align-items-center border-bottom'}>
                <div>
                    <a href={'/'}>
                        <img className={'pe-4 py-3'} src="/logo.svg" alt="logo"/>
                    </a>
                    <span className={'align-middle ' + styles.links}>
                        <a className={'px-3'} href={'/'}>Dashboard</a>
                        <a className={'px-3'} href={'/'}>Resources</a>
                        <a className={'px-3'} href={'/'}>Blog</a>
                        <a className={'px-3'} href={'/'}>Panel</a>
                    </span>
                </div>
                <div className={styles.links}>
                    <a href="/profile">
                        <img style={{height: 32}} src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2c/Default_pfp.svg/340px-Default_pfp.svg.png?20220226140232" alt=""/>
                    </a>
                </div>
            </nav>
        </>
    );
}

export default Header;