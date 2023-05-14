import { useEffect, useState } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";
import { CurrentUserContext } from "./CurrentUserContext";
import React from "react";

function Main({
    onEditProfile,
    onAddPlace,
    onEditAvatar,
    onCardClick
}) {

    const currentUser = React.useContext(CurrentUserContext);

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
        api.getInitialCards()
            .then((cardsData) => {
                setCards(cardsData);
            })
            .catch((err) => console.log(`Ошибка ${err}`));
    }, []);



    return (
        <CurrentUserContext.Provider value={currentUser}>
            <main className="main">
                <section className="profile">
                    <button
                        className="profile__avatar-edit-btn"
                        onClick={onEditAvatar}
                    >
                        <img
                            className="profile__image"
                            src={currentUser.avatar}
                            alt="Аватар пользователя"
                        />
                    </button>
                    <div className="profile__info">
                        <h1 className="profile__user-name">{currentUser.name}</h1>
                        <button
                            className="profile__edit-button"
                            type="button"
                            aria-label="Редактировать"
                            onClick={onEditProfile}>
                        </button>
                        <p className="profile__user-profession">{currentUser.about}</p>
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
        </CurrentUserContext.Provider>
    )
}

export default Main;