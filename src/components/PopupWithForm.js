export const PopupWithForm = (props) => {
    console.log(`${props.isOpen}`);
    return (
        <div className={`popup popup_type_${props.name} ${props.isOpen ? 'popup_opened' : ''}`}>
            <div className="popup__container">
                <button className="popup__close" type="button" aria-label="Закрыть"></button>
                <form className="form" name={props.name} method="post" noValidate>
                    <h2 className="form__title">{props.title}</h2>
                    <div className="form__section-container">
                        {props.children}
                    </div>
                    <button className="form__submit" type="submit" value="Сохранить">Сохранить</button>
                </form>
            </div>
        </div>
    )
}


const EditProfilePopup = () => {
    return (
        <PopupWithForm name="edit-profile" title="Редактировать профиль">
            <div className="form__section">
                <input className="form__input form__input_type_profile-name" id="profile-name" type="text" name="name" placeholder="Введите имя" required
                    minLength="2" maxLength="40" />
                <span className="form__input-error" id="profile-name-error"></span>
            </div>
            <div className="form__section">
                <input className="form__input form__input_type_job" id="profile-job" type="text" name="about" placeholder="О себе" required minLength="2"
                    maxLength="200" />
                <span className="form__input-error" id="profile-job-error"></span>
            </div>
        </PopupWithForm>
    )
}

const AddPlacePopup = () => {
    return (
        <PopupWithForm name="add-card" title="Новое место">
            <div className="form__section-container">
                <div className="form__section">
                    <input className="form__input form__input_type_card-name" id="card-title" type="text" name="name" placeholder="Название" required
                        minLength="2" maxLength="30" />
                    <span className="form__input-error" id="card-title-error"></span>
                </div>
                <div className="form__section">
                    <input className="form__input form__input_type_link" id="card-link" type="url" name="link" placeholder="Ссылка на картинку" required />
                    <span className="form__input-error" id="card-link-error"></span>
                </div>
            </div>
        </PopupWithForm>
    )
}

const ConfirmDeletePopup = () => {
    return (
        <PopupWithForm name="card-delete" title="Вы уверены?">
            <h2 className="form__title">Вы уверены?</h2>
            <button className="form__submit" type="submit" value="Да">Да</button>
        </PopupWithForm>
    )
}

const EditAvatarPopup = () => {
    return (
        <PopupWithForm name="edit-avatar" title="Обновить аватар">
            <h2 className="form__title">Обновить аватар</h2>
            <div className="form__section form__section_type_avatar">
                <input id="form-input" className="form__input" type="url" name="avatar" placeholder="Аватар" value="" required minLength="2" maxLength="200" />
                <span className="form__input-error"></span>
            </div>
            <button className="form__submit form__submit_avatar" type="submit">Сохранить</button>
        </PopupWithForm>
    )
}