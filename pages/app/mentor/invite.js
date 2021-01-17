import Layout from "../../../components/layout"
import MenuMentor from "../../../components/menuMentor"

function inviteStudent(event) {
    event.preventDefault()

    fetch("/api/invite", {
        method: "POST",
        body: JSON.stringify({
            name: document.querySelector("#form-invite-name").value,
            phone: document.querySelector("#form-invite-phone").value
        })
    }).then((response) => {
        return response.json()
    }).then((responseJson) => {
        document.querySelector("#toast").MaterialSnackbar.showSnackbar({
            message: responseJson.message
        });

        setTimeout(() => location.href = "/app/mentor", 3000)
    })

    return false
}

export default function Invite() {
    return (
        <Layout title="Indicar um novo aluno">
            <MenuMentor />

            <div className="mdl-tabs__tab-bar">
                <a href="/app/mentor" className="mdl-tabs__tab">Candidaturas</a>
                <a href="/app/mentor" className="mdl-tabs__tab">
                    <span className="mdl-badge" data-badge="4">Notificações</span>
                </a>
                <a href="/app/mentor" className="mdl-tabs__tab is-active">Mentoria</a>
            </div>
            <div className="boxed-content marg-t-32">
                <div className="box">
                    <p align="center">
                        Informe o nome e o celular do aluno para enviar o convite.
                    </p>
                    <form className="marg-t-16" action="/api/invite" method="POST" onSubmit={inviteStudent} id="form-invite">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--icon-label">
                            <input className="mdl-textfield__input" type="text" name="name" id="form-invite-name" />
                            <label className="mdl-textfield__label">Nome do aluno</label>
                            <i className="material-icons md-12">person</i>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--icon-label">
                            <input className="mdl-textfield__input" type="phone" name="phone" id="form-invite-phone" />
                            <label className="mdl-textfield__label">WhatsApp do aluno</label>
                            <i className="material-icons md-12">phone</i>
                        </div>
                        <div className="button-centered marg-t-16">
                            <button type="submit" className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                                Entrar
                            </button>
                        </div>
                    </form>
                </div>
            </div>
        </Layout>
    )
}