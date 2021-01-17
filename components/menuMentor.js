export default function MenuMentor() {
    return (
        <header className="menubar">
            <h1 onClick={() => location.href = "/app/mentor"}>
                Capivara do Trampo
            </h1>
            <nav>
                <button id="nav-menu" className="mdl-button mdl-js-button mdl-button--icon">
                    <i className="material-icons">menu</i>
                </button>

                <ul className="mdl-menu mdl-menu--bottom-left mdl-js-menu mdl-js-ripple-effect" htmlFor="nav-menu">
                    <li className="mdl-menu__item">
                        <i className="material-icons md-12">settings</i>
                        Minha conta
                    </li>
                    <li className="mdl-menu__item">
                        <i className="material-icons md-12">ballot</i>
                        Lei do Aprendiz
                    </li>
                    <li className="mdl-menu__item mdl-menu__item--full-bleed-divider">
                        <i className="material-icons md-12">info</i>
                        Sobre
                    </li>
                    <li className="mdl-menu__item" style={{color: "red", textAlign: "center", fontSize: "12px", height: "30px"}} onClick={function() { location.href = "/login" }}>
                        SAIR
                    </li>
                </ul>
            </nav>
        </header>
    )
}