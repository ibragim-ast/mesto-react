function Card(props) {

    return (
        <li className="card" key={props.id}>
            <button className="card__remove-button" type="button" aria-label="удалить"></button>
            <img className="card__image" src={props.link} alt={props.name} />
            <div className="card__description">
                <h2 className="card__title">{props.name}</h2>
                <div className="card__like-group">
                    <button className="card__like-button" type="button" aria-label="Лайк"></button>
                    <span className="card__like-counter">{props.likes}</span>
                </div>
            </div>
        </li>
    )
}

export default Card;