import Layout from "../../../components/layout"
import MenuMentor from "../../../components/menuMentor"

export default function JobList() {
    return (
        <Layout title="Vagas disponíveis">
            <MenuMentor />

            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar">
                    <a href="/app/mentor" className="mdl-tabs__tab">Candidaturas</a>
                    <a href="/app/mentor" className="mdl-tabs__tab">
                        <span className="mdl-badge" data-badge="4">Notificações</span>
                    </a>
                    <a href="/app/mentor" className="mdl-tabs__tab is-active">Mentoria</a>
                </div>

                <div className="mdl-tabs__panel is-active" id="students">
                    <ul className="mdl-list mdl-list--stripped">
                        <li className="mdl-list__item mdl-list__item--two-line" onClick={() => location.href = "/app/mentor/job" }>
                            <span className="mdl-list__item-primary-content">
                                <span className="mdl-list__item-avatar" style={{ fontSize: "24px", background: "none", textAlign: "center" }}>
                                    <img src="https://image.winudf.com/v2/image1/Y29tLnRyZXZpc2FuLm5lb2dyaWRfaWNvbl8xNTQ0OTU2MTE4XzA0MQ/icon.png?w=170&fakeurl=1" width="100%" />
                                </span>
                                <span>Auxiliar Administrativo</span>
                                <span className="mdl-list__item-sub-title">
                                    Neogrid -Santo Antônio - Joinville<br />
                                    R$ 1.200
                                </span>
                            </span>
                            <span className="mdl-list__item-secondary-content">
                                <i className="material-icons">keyboard_arrow_right</i>
                            </span>
                        </li>
                    </ul>
                </div>
            </div>
        </Layout>
    )
}