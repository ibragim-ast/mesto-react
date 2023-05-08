function PopupWithForm(props) {

    function handleClose() {
        props.onClose();
    }

    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button
                    className="popup__close"
                    type="button"
                    aria-label="Закрыть"
                    onClick={handleClose}>
                </button>
                <form className="form" name={props.name} method="post" noValidate>
                    <h2 className="form__title">{props.title}</h2>
                    <div className="form__section-container">
                        {props.children}
                    </div>
                    <button className="form__submit" type="submit" value="Сохранить">Сохранить</button>
                </form>
            </div>
        </div>
    )
}

export default PopupWithForm;
