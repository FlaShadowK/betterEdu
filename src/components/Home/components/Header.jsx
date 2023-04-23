const Header = () => {
  return(
      <div className="container">
          <div className="row justify-content-between">
              <div className="d-flex textarea col-md-7 align-items-center">
                  <div>
                      <h1 className={'titleHeader'}>Za bolju, pristupačnu i jednostavnu edukaciju!</h1>
                      <p className={'para py-3'}>Naš cilj je da olakšamo posao profesorima i učenicima u školama, te da stvorimo bolje uslove za učenje i razvoj.
                          Smatramo da je kvalitetna edukacija ključna za budućnost našeg društva, te se zalažemo za stvaranje sistema koji će biti pravedniji i učinkovitiji za sve.</p>
                      <div className="buttons">
                          <a className="btn btn-light btn-lg me-2" href={'/'}>O nama</a>
                          <a className="btn btn-primary btn-lg" href={'/register'}>Registruj se</a>
                      </div>
                  </div>
              </div>
              <div className="picture col-md-4">
                  <img src="/assets/home/icon1.svg" alt=""/>
              </div>
          </div>
      </div>
  );
}

export default Header;