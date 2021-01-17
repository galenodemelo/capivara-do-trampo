export default function Applications() {
    return (
        <div className="boxed-content">
            <div className="mdl-list" id="applications-list">
                <div className="mdl-list__item" onClick={showDetails}>
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar" style={{ fontSize: "24px", paddingTop: "8px", textAlign: "center" }}>MM</span>
                        <span>Mariana Malanconi</span>
                    </span>
                    <span className="mdl-list__item-secondary-action">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </span>
                </div>

                <div className="mdl-list__item mdl-list__item--two-line" onClick={showDetails}>
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar" style={{ fontSize: "24px", paddingTop: "8px", textAlign: "center" }}>WF</span>
                        <span>Willian Figueiredo</span>
                        <span className="mdl-list__item-sub-title">
                            <i className="material-icons md-12">warning</i>
                        &nbsp;
                        Enviar currículo até 18/01
                    </span>
                    </span>
                    <span className="mdl-list__item-secondary-action">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </span>
                </div>

                <div className="mdl-list__item" onClick={showDetails}>
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar" style={{ fontSize: "24px", paddingTop: "8px", textAlign: "center" }}>GP</span>
                        <span>Guilherme Panizzon</span>
                    </span>
                    <span className="mdl-list__item-secondary-action">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </span>
                </div>

                <div className="mdl-list__item" onClick={showDetails}>
                    <span className="mdl-list__item-primary-content">
                        <span className="mdl-list__item-avatar" style={{ fontSize: "24px", paddingTop: "8px", textAlign: "center" }}>AC</span>
                        <span>Ana Carolina Zuchi</span>
                    </span>
                    <span className="mdl-list__item-secondary-action">
                        <i className="material-icons">keyboard_arrow_right</i>
                    </span>
                </div>
            </div>
        </div>
    )
}