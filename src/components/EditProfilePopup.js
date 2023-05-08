import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditProfilePopup({ isOpen, onClose }) {
    return (
        <PopupWithForm
            name="edit-profile"
            title="Редактировать профиль"
            isOpen={isOpen}
            onClose={onClose}
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