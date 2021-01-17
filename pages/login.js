import Layout from "../components/layout"

export default function Login() {
    return (
        <Layout title="Login">
            <p align="center">
                <img src="/images/logo.svg" width="64px" />
            </p>

            <div className="box-row">
                <div className="box">
                    <h3>Fazer login</h3>
                    <div className="marg-t-32">
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--icon-label">
                            <input className="mdl-textfield__input" type="text" name="username" />
                            <label className="mdl-textfield__label">Seu usuário ou e-mail</label>
                            <i className="material-icons md-12">person</i>
                        </div>
                        <div className="mdl-textfield mdl-js-textfield mdl-textfield--floating-label mdl-textfield--icon-label">
                            <input className="mdl-textfield__input" type="password" name="password" />
                            <label className="mdl-textfield__label">Insira sua senha</label>
                            <i className="material-icons md-12">lock</i>
                        </div>
                        <div className="button-centered marg-t-16">
                            <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => location.href = "/app/mentor/"}>
                                Entrar
                            </button>
                        </div>
                    </div>
                </div>

                <div className="box">
                    <h3>Ainda não tem cadastro?</h3>
                    <div className="button-centered marg-t-16">
                        <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored">
                            Seja um mentor
                    </button>
                    </div>
                    <div className="button-centered marg-t-16">
                        <button className="mdl-button mdl-js-button mdl-button--primary">
                            Divulgar vagas
                    </button>
                    </div>

                    <hr className="marg-t-32" />

                    <p className="marg-t-32">
                        <b>Procurando emprego?</b> <br></br>
                        <a href="/bot" style={{ color: "blue" }} target="_blank">Clique aqui</a> e se candidate por WhatsApp.
                    </p>
                </div>
            </div>
        </Layout>
    )
}