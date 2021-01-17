import Layout from "../../../components/layout"
import MenuMentor from "../../../components/menuMentor"
import Applications from "./_applications"
import Notifications from "./_notifications"
import Students from "./_students"

export default function Mentor() {
    return (
        <Layout title="Acesso do mentor">
            <MenuMentor />
            
            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar">
                    <a href="/app/mentor" className="mdl-tabs__tab is-active">Candidaturas</a>
                    <a href="#notifications" className="mdl-tabs__tab">
                        <span className="mdl-badge" data-badge="4">Notificações</span>
                    </a>
                </div>

                <div className="mdl-tabs__panel is-active" id="applications">
                    <Applications />
                </div>
                <div className="mdl-tabs__panel" id="notifications">
                    <Notifications />
                </div>
            </div>
        </Layout>
    )
}