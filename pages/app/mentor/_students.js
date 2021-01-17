export default function Students() {
    return (
        <div className="mdl-list boxed-content">
            <div className="mdl-list__item" onClick={() => location.href = "/app/mentor/jobList"}>
                <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item">card_travel</i>
                    <span>Visualizar vagas</span>
                </span>
                <i className="material-icons">keyboard_arrow_right</i>
            </div>

            <div className="mdl-list__item" onClick={() => location.href = "/app/mentor/invite"}>
                <span className="mdl-list__item-primary-content">
                    <i className="material-icons mdl-list__item">person_add</i>
                    <span>Indicar aluno</span>
                </span>
                <i className="material-icons">keyboard_arrow_right</i>
            </div>
        </div>
    )
}