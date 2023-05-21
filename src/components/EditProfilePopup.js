import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import { CurrentUserContext } from './CurrentUserContext';
import FormValidator from './FormValidator.js';

function EditProfilePopup({ isOpen, onClose, onUpdateUser }) {

    const currentUser = React.useContext(CurrentUserContext);
    const { values, errors, isValid, handleChange, resetForm } = FormValidator({});

    React.useEffect(() => {
        if (currentUser) {
            resetForm(currentUser);
        } else {
            resetForm();
        }
    }, [currentUser, resetForm, isOpen]);


    function handleSubmit(e) {
        e.preventDefault();

        onUpdateUser(values);
        onClose()
    }

    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isDisabled={isValid}
        >
            <div className="form__section">
                <input
                    className={errors.name ? 'form__input form__input-error' : 'form__input'}
                    id="profile-name"
                    type="text"
                    name="name"
                    placeholder="Введите имя"
                    required
                    minLength="2"
                    maxLength="40"
                    value={values.name || ''}
                    onChange={handleChange}
                />
                <span
                    className={errors.name ? 'form__input-error form__input-error_active' : 'form__input-error'}
                    id="profile-name-error">{errors.name}
                </span>
                <input
                    className={errors.about ? 'form__input form__input-error' : 'form__input'}
                    id="profile-job"
                    type="text"
                    name="about"
                    placeholder="О себе"
                    required
                    minLength="2"
                    maxLength="200"
                    value={values.about || ''}
                    onChange={handleChange}
                />
                <span
                    className={errors.about ? 'form__input-error form__input-error_active' : 'form__input-error'}
                    id="profile-job-error">{errors.about}
                </span>
            </div>
        </PopupWithForm>
    );
};

export default EditProfilePopup;