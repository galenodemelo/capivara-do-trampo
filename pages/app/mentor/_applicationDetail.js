import styles from "../../../styles/applicationDetail.module.scss"

export default function ApplicationDetail() {
    return (
        <div id="application-detail" className={styles["application-detail"]}>
            <div className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <span className="mdl-list__item-avatar" style={{ fontSize: "24px", paddingTop: "8px", textAlign: "center" }}>MM</span>
                    <span>Mariana Malanconi</span>
                    <span className="mdl-list__item-sub-title">Auxiliar Administrativo na Neogrid</span>
                </span>
            </div>
            <div className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <span className="mdl-list__item-avatar" style={{ width: "16px", height: "16px", marginLeft: "12px", marginRight: "28px" }}></span>
                    <span>Contato via Bot</span>
                    <span className="mdl-list__item-sub-title" style={{ marginLeft: "56px"}}>12/01/2021, às 12:45</span>
                </span>
            </div>
            <div className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <span className="mdl-list__item-avatar" style={{ width: "16px", height: "16px", marginLeft: "12px", marginRight: "28px" }}></span>
                    <span>Envio de currículo</span>
                    <span className="mdl-list__item-sub-title" style={{ marginLeft: "56px"}}>12/01/2021, às 12:55</span>
                </span>
            </div>
            <div className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <span className="mdl-list__item-avatar" style={{ width: "16px", height: "16px", marginLeft: "12px", marginRight: "28px" }}></span>
                    <span>Em análise pelo RH</span>
                    <span className="mdl-list__item-sub-title" style={{ marginLeft: "56px"}}>13/01/2021, às 09:21</span>
                </span>
            </div>
            <div className="mdl-list__item mdl-list__item--two-line">
                <span className="mdl-list__item-primary-content">
                    <span className="mdl-list__item-avatar" style={{ width: "16px", height: "16px", marginLeft: "12px", marginRight: "28px", backgroundColor: "#009688" }}></span>
                    <span>Aprovação</span>
                    <span className="mdl-list__item-sub-title" style={{ marginLeft: "56px"}}>14/01/2021, às 08:00</span>
                </span>
            </div>
        </div>
    )
}