import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from './CurrentUserContext';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(CurrentUserContext);
    const [name, setName] = React.useState('')
    const [description, setDescription] = React.useState('')

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser({
            name,
            about: description,
        });
        onClose()
    }

    React.useEffect(() => {
        setName(currentUser.name);
        setDescription(currentUser.about);
    }, [currentUser]);

    function handleChangeName(e) {
        setName(e.target.value);
    }

    function handleChangeDescription(e) {
        setDescription(e.target.value);
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="form__section">
                <input
                    className="form__input form__input_type_profile-name"
                    id="profile-name"
                    type="text"
                    name="name"
                    placeholder="Введите имя"
                    required
                    minLength="2"
                    maxLength="40"
                    value={name}
                    onChange={handleChangeName}
                />
                <span
                    className="form__input-error"
                    id="profile-name-error">
                </span>
                <input
                    className="form__input form__input_type_job"
                    id="profile-job"
                    type="text"
                    name="about"
                    placeholder="О себе"
                    required
                    minLength="2"
                    maxLength="200"
                    value={description}
                    onChange={handleChangeDescription}
                />
                <span
                    className="form__input-error"
                    id="profile-job-error">
                </span>
            </div>
        </PopupWithForm>
    );
};

export default EditProfilePopup;