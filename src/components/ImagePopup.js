export default function ImagePopup() {
    return (
        <div className="popup popup_type_large-image">
            <div className="popup__image-container">
                <button className="popup__close" type="button" aria-label="закрыть"></button>
                <figure className="popup__figure">
                    <img className="popup__image" src="#" alt="#" />
                    <figcaption className="popup__image-caption"></figcaption>
                </figure>
            </div>
        </div>
    )
}