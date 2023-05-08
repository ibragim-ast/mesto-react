function ImagePopup({ isOpen, onClose, card }) {
    return (
        <div className={`popup popup_type_large-image ${isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__image-container">
                <button
                    className="popup__close"
                    type="button"
                    aria-label="закрыть"
                    onClick={onClose}>
                </button>
                <figure className="popup__figure">
                    <img
                        className="popup__image"
                        src={card.link}
                        alt={card.name}
                    />
                    <figcaption
                        className="popup__image-caption">{card.name}
                    </figcaption>
                </figure>
            </div >
        </div >
    )
}

export default ImagePopup;