import Section from "./components/Section";
import NavBar from "./components/NavBar";
import Header from "./components/Header";
import Quote from "./components/Quote";
import Footer from "./components/Footer";

import './assets/main.css'
const Home = () => {
  return(
      <div>
          <div style={{backgroundColor: "black", gap: '20px'}}
               className={'d-flex justify-content-center text-center align-items-center h-100 py-3'}>
              <a target={'_blank'} href="https://github.com/betterEdu/betterEdu">
                  <div className={'d-flex justify-content-center align-items-center'}>
                      <div>
                          <img src="https://github.githubassets.com/favicons/favicon-dark.png" alt="github"
                               style={{height: '20px'}} className={'pe-2'}/>
                      </div>
                  </div>
              </a>
              <a target={'_blank'} href="https://www.figma.com/file/sVBo8tqzFELSqAMtB76fq5/hakaton?node-id=3-65&t=ISsdfaxdBPTvcG6T-0">
                  <div className={'d-flex justify-content-center align-items-center'}>
                      <div>
                          <img style={{height: '20px'}} src="https://static.figma.com/app/icon/1/favicon.svg" alt="github"/>
                      </div>
                  </div>
              </a>
          </div>
          <NavBar/>
          <Section className={'titleHeaderSection'}>
              <Header/>
          </Section>

          <Section background={'#F9FAFB'}>
              <Quote/>
          </Section>

          <Section>
              <div className="container">
                  <div className="row justify-content-between">
                      <div className="picture1 col-md-4">
                          <img src="/assets/home/icon2.svg" className={'img-fluid'} alt=""/>
                      </div>
                      <div className="d-flex textarea col-md-7 align-items-center">
                          <div>
                              <h1 className={'title1'}>Edukacija</h1>
                              <p className={'para py-3'}>
                                  Edukacija je veoma bitan proces učenja i sticanja znanja, vještina i vrijednosti. U današnjem svijetu tehnologija može biti snažno sredstvo za unapređivanje edukacije na mnogo načina. Tehnologija omogućava personalizovano učenje, gdje se materijali i lekcije prilagođavaju individualnim potrebama svakog učenika.</p>
                          </div>
                      </div>
                  </div>
              </div>
          </Section>

          <Section background={'#F9FAFB'}>
              <div className="container">
                  <div className="row justify-content-between">
                      <div className="picture1 col-md-4">
                          <img src="/assets/home/icon3.svg" className={'img-fluid'}  alt=""/>
                      </div>
                      <div className="order-md-first d-flex textarea col-md-7 align-items-center">
                          <div>
                              <h1 className={'title1'}>Sigurnost</h1>
                              <p className={'para py-3'}>
                                  Sigurnost je jedna od osnovnih ljudskih potreba, bez koje ne možemo normalno funkcionisati i razvijati se. Sigurnost se odnosi na zaštitu ljudi od različitih vrsta opasnosti, uključujući fizičku, emocionalnu i mentalnu. Svako nasilje predstavlja ozbiljan problem koji može imati dugoročne posljedice po žrtve i njihovo okruženje. Zbog toga je važno da se nasilje prijavi kako bi se spriječilo dalje širenje i osigurala zaštita žrtava.
                              </p>
                              </div>
                      </div>
                  </div>
              </div>
          </Section>

          <Section>
              <div className="container">
                  <div className="row justify-content-between">
                      <div className="picture1 col-md-4">
                          <img src="/assets/home/icon4.svg" className={'img-fluid'} alt=""/>
                      </div>
                      <div className="d-flex textarea col-md-7 align-items-center">
                          <div>
                              <h1 className={'title1'}>Čuvanje</h1>
                              <p className={'para py-3'}>
                                  Šteta u školskim objektima može biti uzrokovana neadekvatnim održavanjem, neodgovornim ponašanjem učenika ili vanjskim faktorima, kao što su prirodne katastrofe. Spriječavanje i evidentiranje štete u školskim objektima su neophodni kako bi se osigurala sigurnost učenika i osoblja škole, kao i kako bi se sačuvala vrijednost objekta.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </Section>

          <Section background={'#F9FAFB'}>
              <div className="container">
                  <div className="row justify-content-between">
                      <div className="picture1 col-md-4">
                          <img src="/assets/home/icon5.svg" className={'img-fluid'}  alt=""/>
                      </div>
                      <div className="order-md-first d-flex textarea col-md-7 align-items-center">
                          <div>
                              <h1 className={'title1'}>Aktivnost</h1>
                              <p className={'para py-3'}>
                                  Aktivnost na času je veoma važna jer omogućava učenicima da aktivno učestvuju u nastavi, učestvuju u raspravi i postavljaju pitanja. To pomaže učenicima da razumiju gradivo na većem nivou, razvijaju kritičko mišljenje i unapređuju komunikacione vještine. Vrednovanje aktivnosti učenika tokom časa može biti korisno za procjenu napretka učenika, praćenje njihovog angažmana i motivisanje za dalje učenje.
                              </p>
                          </div>
                      </div>
                  </div>
              </div>
          </Section>

          <Footer/>
      </div>
  );
}


export default Home;