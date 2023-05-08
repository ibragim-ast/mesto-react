function Card({ id, link, name, likes, onCardClick, card }) {

    function handleClick() {
        onCardClick(card);
    }

    return (
        <div className="card">
            <button
                className="card__remove-button"
                type="button"
                aria-label="удалить">
            </button>
            <img
                className="card__image"
                src={card.link}
                alt={card.name}
                onClick={handleClick}
            />
            <div className="card__description">
                <h2 className="card__title">{card.name}</h2>
                <div className="card__like-group">
                    <button
                        className="card__like-button"
                        type="button"
                        aria-label="Лайк">
                    </button>
                    <span className="card__like-counter">{card.likes.length}</span>
                </div>
            </div>
        </div>
    )
}

export default Card;