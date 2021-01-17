import Layout from "../../../components/layout";
import MenuMentor from "../../../components/menuMentor";

import styles from "../../../styles/job.module.scss"

export default function Job() {
    return (
        <Layout title="Auxiliar Administrativo na Neogrid">
            <MenuMentor />

            <div className="mdl-tabs mdl-js-tabs mdl-js-ripple-effect">
                <div className="mdl-tabs__tab-bar">
                    <a href="/app/mentor" className="mdl-tabs__tab">Candidaturas</a>
                    <a href="/app/mentor" className="mdl-tabs__tab">
                        <span className="mdl-badge" data-badge="4">Notificações</span>
                    </a>
                    <a href="/app/mentor" className="mdl-tabs__tab is-active">Mentoria</a>
                </div>

                <div className="mdl-tabs__panel is-active box" id="students">
                    <div className={styles.detail}>
                        <header>
                            <img src="https://image.winudf.com/v2/image1/Y29tLnRyZXZpc2FuLm5lb2dyaWRfaWNvbl8xNTQ0OTU2MTE4XzA0MQ/icon.png?w=170&fakeurl=1" width="100%" />
                            <h1>
                                Auxiliar Administrativo na Neogrid
                                <small>Cód #5512</small>
                            </h1>
                        </header>
                        <div className={styles.description}>
                            <h2>Salário</h2>
                            <p>R$ 1.200,00 + Benefícios</p>

                            <h2>Descrição da vaga</h2>
                            <p>Controle de estoque, planilhas, sistema do caixa e outras atividades pertinentes à função. Contará com treinamento para gestão e rotinas administrativas.</p>

                            <h2>Requisitos</h2>
                            <ul>
                                <li>Ensino médio completo ou cursando</li>
                                <li>Facilidade de comunicação para atendimento aos colaboradores</li>
                                <li>Interesse em se desenvolver profissionalmente</li>
                                <li>Proatividade</li>
                            </ul>

                            <h2>Localização</h2>
                            <p>
                                Av. Santos Dumont, 935 - Santo Antônio, Joinville - SC<br />
                                <i className="material-icons md-12">map</i>
                                &nbsp;
                                <a href="https://goo.gl/maps/EbGw4rZNDDFCCcHb9" target="_blank">Ver no mapa</a>
                            </p>

                            <h3>Envie para um de seus alunos</h3>

                            <div className="button-centered">
                                <button className="mdl-button mdl-js-button mdl-button--raised mdl-button--colored" onClick={() => location.href = `https://wa.me/?text=${location.href}`}>
                                    Enviar por WhatsApp
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    )
}