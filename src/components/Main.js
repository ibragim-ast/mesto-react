export default function Main(props) {
    return (
        <main className="main">
            <section className="profile">
                <button className="profile__avatar" onClick={props.onEditAvatar}>
                    <img className="profile__image" src='#' alt="Аватар пользователя" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">Ибрагим Астамиров</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать" onClick={props.onEditProfile}></button>
                    <p className="profile__user-profession">Веб-разработчик</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить" onClick={props.onAddPlace}></button>
            </section>
            <section className="cards">
                <ul className="cards__list">

                </ul>
            </section>
        </main>
    )
}