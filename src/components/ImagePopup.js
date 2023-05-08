function ImagePopup(props) {
    console.log(props)
    return (
        <div className={`popup popup_type_large-image ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__image-container">
                <button className="popup__close" type="button" aria-label="закрыть" onClick={props.onClose}></button>
                <figure className="popup__figure">
                    <img
                        className="popup__image"
                        src={props.card.link} alt={props.card.name}
                    />
                    <figcaption
                        className="popup__image-caption">{props.card.name}
                    </figcaption>
                </figure>
            </div >
        </div >
    )
}

export default ImagePopup;