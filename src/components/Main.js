export default function Main(props) {

    function handleEditAvatarClick() {
        document.querySelector('.popup_type_edit-avatar').classList.add('popup_opened');
    }

    function handleEditProfileClick() {
        document.querySelector('.popup_type_edit-profile').classList.add('popup_opened');
    }

    function handleAddPlaceClick() {
        document.querySelector('.popup_type_add-card').classList.add('popup_opened');
    }

    return (
        <main className="main">

            <section className="profile">
                <button className="profile__avatar">
                    <img className="profile__image" src='#' alt="Аватар пользователя" />
                </button>
                <div className="profile__info">
                    <h1 className="profile__user-name">Ибрагим Астамиров</h1>
                    <button className="profile__edit-button" type="button" aria-label="Редактировать"></button>
                    <p className="profile__user-profession">Веб-разработчик</p>
                </div>
                <button className="profile__add-button" type="button" aria-label="Добавить"></button>
            </section>

            <section className="cards">
                <ul className="cards__list">

                </ul>
            </section>



            {/* <!-- popup редактирования профиля --> */}
            <div className="popup popup_type_edit-profile">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>

                    <form className="form" name="editProfile" method="post" novalidate>
                        <h2 className="form__title">Редактировать профиль</h2>
                        <div className="form__section-container">
                            <div className="form__section">
                                <input className="form__input form__input_type_profile-name" id="profile-name" type="text" name="name" placeholder="Введите имя" required
                                    minLength="2" maxlength="40" />
                                <span className="form__input-error" id="profile-name-error"></span>
                            </div>
                            <div className="form__section">
                                <input className="form__input form__input_type_job" id="profile-job" type="text" name="about" placeholder="О себе" required minLength="2"
                                    maxlength="200" />
                                <span className="form__input-error" id="profile-job-error"></span>
                            </div>
                        </div>
                        <button className="form__submit" type="submit" value="Сохранить">Сохранить</button>
                    </form>

                </div>
            </div>

            {/* <!-- popup добавления карточки --> */}
            <div className="popup popup_type_add-card">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>

                    <form className="form" name="addCard" method="post" novalidate>
                        <h2 className="form__title">Новое место</h2>
                        <div className="form__section-container">
                            <div className="form__section">
                                <input className="form__input form__input_type_card-name" id="card-title" type="text" name="name" placeholder="Название" required
                                    minLength="2" maxlength="30" />
                                <span className="form__input-error" id="card-title-error"></span>
                            </div>
                            <div className="form__section">
                                <input className="form__input form__input_type_link" id="card-link" type="url" name="link" placeholder="Ссылка на картинку" required />
                                <span className="form__input-error" id="card-link-error"></span>
                            </div>
                        </div>
                        <button className="form__submit" type="submit" value="Создать">Создать</button>
                    </form>

                </div>
            </div>
            {/* <!-- popup увеличенного изображения --> */}
            <div className="popup popup_type_large-image">
                <div className="popup__image-container">
                    <button className="popup__close" type="button" aria-label="закрыть"></button>
                    <figure className="popup__figure">
                        <img className="popup__image" src="#" alt="#" />
                        <figcaption className="popup__image-caption"></figcaption>
                    </figure>
                </div>
            </div>

            {/* <!-- popup подтверждения удаления карточки --> */}
            <div className="popup popup_type_card-delete">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form" name="deleteCard" method="post" novalidate>
                        <h2 className="form__title">Вы уверены?</h2>
                        <button className="form__submit" type="submit" value="Да">Да</button>
                    </form>
                </div>
            </div>

            {/* <!-- popup смены аватара --> */}
            <div className="popup popup_type_edit-avatar">
                <div className="popup__container">
                    <button className="popup__close" type="button" aria-label="Закрыть"></button>
                    <form className="form" name="editAvatar" method="get" novalidate>
                        <h2 className="form__title">Обновить аватар</h2>
                        <div className="form__section form__section_type_avatar">
                            <input id="form-input" className="form__input" type="url" name="avatar" placeholder="Аватар" value="" required minLength="2" maxlength="200" />
                            <span className="form__input-error"></span>
                        </div>
                        <button className="form__submit form__submit_avatar" type="submit">Сохранить</button>
                    </form>
                </div>
            </div>

        </main>
    )

}