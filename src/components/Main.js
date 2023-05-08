import { useEffect, useState } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick
}) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    const cardElements = cards.map((card) => {
        return (
            <li key={card._id}>
                <Card
                    card={card}
                    onCardClick={onCardClick}
                />
            </li>
        )
    })

    useEffect(() => {
        Promise.all([api.getUserInfo(), api.getInitialCards()])
            .then(([userData, cardsData]) => {
                setUserName(userData.name);
                setUserDescription(userData.about);
                setUserAvatar(userData.avatar);
                setCards(cardsData);
            })
            .catch((err) => console.log(`Ошибка ${err}`));
    }, []);


    return (
        <main className="main">
            <section className="profile">
                <button
                    className="profile__avatar-edit-btn"
                    onClick={onEditAvatar}
                >
                    <img
                        className="profile__image"
                        src={userAvatar}
                        alt="Аватар пользователя"
                    />
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">{userName}</h1>
                    <button
                        className="profile__edit-button"
                        type="button"
                        aria-label="Редактировать"
                        onClick={onEditProfile}>
                    </button>
                    <p className="profile__user-profession">{userDescription}</p>
                </div>
                <button
                    className="profile__add-button"
                    type="button"
                    aria-label="Добавить"
                    onClick={onAddPlace}>
                </button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {cardElements}
                </ul>
            </section>
        </main>
    )
}

export default Main;