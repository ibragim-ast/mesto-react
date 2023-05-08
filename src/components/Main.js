import { useEffect, useState } from "react";
import { api } from "../utils/Api.js";
import Card from "./Card.js";

function Main(props) {

    const [userName, setUserName] = useState('');
    const [userDescription, setUserDescription] = useState('');
    const [userAvatar, setUserAvatar] = useState('');
    const [cards, setCards] = useState([]);

    useEffect(() => {
        api.getUserInfo()
            .then((data) => {
                setUserName(data.name)
                setUserDescription(data.about)
                setUserAvatar(data.avatar)
            })
    }, []);

    useEffect(() => {
        api.getInitialCards()
            .then((data) => {
                setCards(data)
            })
    }, [])

    return (
        <main className="main">
            <section className="profile">
                <button
                    className="profile__avatar-edit-btn"
                    onClick={props.onEditAvatar}
                >
                    <img
                        className="profile__image"
                        src={userAvatar}
                        alt="Аватар пользователя"
                    />
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">{userName}</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    <p className="profile__user-profession">{userDescription}</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="cards__list">
                    {cards.map((card) => {
                        return (
                            <Card
                                key={card._id}
                                name={card.name}
                                link={card.link}
                                likes={card.likes}
                                card={card}
                                onCardClick={props.onCardClick}
                            />
                        )
                    })}
                </ul>
            </section>
        </main>
    )
}

export default Main;