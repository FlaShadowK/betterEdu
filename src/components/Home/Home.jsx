import Header from "../UI/Header";
import ReactDOM from "react-dom";
import Frame from "../UI/Frame";

const Home = () => {
    return (
        <>
            {ReactDOM.createPortal(<Header/>, document.getElementById('header'))}
            <Frame padding={'60px 150px'}>
                <div className={'py-5 d-flex flex-column justify-content-center'}>
                    <p className={'fw-bold'} style={{fontSize: '60px'}}>
                        Za bolju, pristupačnu i jednostavnu <span className={'text-primary'}>edu</span>kaciju!
                    </p>
                    <p className={'fs-5'}>
                        Naš cilj je da olakšamo posao profesorima i učenicima u školama, te da stvorimo bolje uslove
                        za učenje i razvoj. Smatramo da je kvalitetna edukacija ključna za budućnost naše društva,
                        te se zalažemo za stvaranje sistema koji će biti pravedniji i učinkovitiji za sve.
                    </p>
                    <div className={'py-3'}>
                        <a className={'btn btn-light fw-bold'}>O nama</a>
                        <a href={'/register'} className={'btn btn-primary fw-bold mx-3'}>Registruj se</a>
                    </div>
                </div>
                <div>
                    <div style={{padding: '80px'}}>
                        <img src="/assets/home/icon1.svg"
                         alt={''}/>
                    </div>
                </div>
            </Frame>

            <Frame padding={'96px 100px'} bgcolor={'#F9FAFB'}>
                <div>
                    <img className={'d-block mx-auto mb-5'} src="/logo.svg" alt="logo"/>
                    <p style={{fontSize: '48px'}} className={'fw-semibold'}>“Ulaganje u edukaciju je ulaganje u
                        budućnost”</p>
                </div>
            </Frame>

            <Frame padding={'60px 150px'}>
                <div>
                    <div style={{padding: '80px'}}>
                        <img src="/assets/home/icon2.svg"
                         alt={''}/>
                    </div>
                </div>
                <div className={'py-5 d-flex flex-column justify-content-center'}>
                    <p className={'fw-bold'} style={{fontSize: '60px'}}>
                        Edukacija
                    </p>
                    <p className={'fs-5'}>
                        Edukacija je veoma bitan proces učenja i sticanja znanja, vještina i vrijednosti. U današnjem
                        svijetu tehnologija može biti snažno sredstvo za unapređivanje edukacije na mnogo načina.
                        Tehnologija omogućava personalizovano učenje, gdje se materijali i lekcije prilagođavaju
                        individualnim potrebama svakog učenika.
                    </p>
                </div>
            </Frame>

            <Frame padding={'60px 150px'} bgcolor={'#F9FAFB'}>
                <div className={'py-5 d-flex flex-column justify-content-center'}>
                    <p className={'fw-bold'} style={{fontSize: '60px'}}>
                        Sigurnost
                    </p>
                    <p className={'fs-5'}>
                        Sigurnost je jedna od osnovnih ljudskih potreba, bez koje ne možemo normalno funkcionisati i
                        razvijati se. Sigurnost se odnosi na zaštitu ljudi od različitih vrsta opasnosti, uključujući
                        fizičku, emocionalnu i mentalnu. Svako nasilje predstavlja ozbiljan problem koji može imati
                        dugoročne posljedice po žrtve i njihovo okruženje. Zbog toga je važno da se nasilje prijavi kako
                        bi se spriječilo dalje širenje i osigurala zaštita žrtava.
                    </p>
                </div>
                <div>
                    <div style={{padding: '80px'}}>
                        <img src="/assets/home/icon3.svg"
                         alt={''}/>
                    </div>
                </div>
            </Frame>

            <Frame padding={'60px 150px'}>
                <div>
                    <div style={{padding: '80px'}}>
                        <img src="/assets/home/icon4.svg"
                         alt={''}/>
                    </div>
                </div>
                <div className={'py-5 d-flex flex-column justify-content-center'}>
                    <p className={'fw-bold'} style={{fontSize: '60px'}}>
                        Čuvanje
                    </p>
                    <p className={'fs-5'}>
                        Šteta u školskim objektima može biti uzrokovana neadekvatnim održavanjem, neodgovornim
                        ponašanjem učenika ili vanjskim faktorima, kao što su prirodne katastrofe. Spriječavanje i
                        evidentiranje štete u školskim objektima su neophodni kako bi se osigurala sigurnost učenika i
                        osoblja škole, kao i kako bi se sačuvala vrijednost objekta.
                    </p>
                </div>
            </Frame>

            <Frame padding={'60px 150px'} bgcolor={'#F9FAFB'}>
                <div className={'py-5 d-flex flex-column justify-content-center'}>
                    <p className={'fw-bold'} style={{fontSize: '60px'}}>
                        Aktivnost
                    </p>
                    <p className={'fs-5'}>
                        Aktivnost na času je veoma važna jer omogućava učenicima da aktivno učestvuju u nastavi,
                        učestvuju u raspravi i postavljaju pitanja. To pomaže učenicima da razumiju gradivo na većem
                        nivou, razvijaju kritičko mišljenje i unapređuju komunikacione vještine. Vrednovanje aktivnosti
                        učenika tokom časa može biti korisno za procjenu napretka učenika, praćenje njihovog angažmana i
                        motivisanje za dalje učenje.
                    </p>
                </div>
                <div>
                    <div style={{padding: '80px'}}>
                        <img src="/assets/home/icon5.svg"
                             alt={''}/>
                    </div>
                </div>
            </Frame>

            <Frame padding={'36px 120px'}>
                <p className={'fw-bold m-0'}>Made with love by better<span className={'text-primary'}>Edu</span></p>
            </Frame>
        </>
    );
}

export default Home;