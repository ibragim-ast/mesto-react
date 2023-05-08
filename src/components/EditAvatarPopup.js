import React from "react";
import PopupWithForm from "./PopupWithForm.js";

function EditAvatarPopup(props) {
    return (
        <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            isOpen={props.isOpen}
            onClose={props.onClose}
        >
            <div className="form__section">
                <input
                    id="form-input"
                    className="form__input"
                    type="url" name="avatar"
                    placeholder="Аватар"
                    required
                    minLength="2"
                    maxLength="200" />
                <span className="form__input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;