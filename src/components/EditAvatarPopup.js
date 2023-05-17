import React from "react";
import PopupWithForm from "./PopupWithForm.js";


function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef()

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    return (
        <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="form__section">
                <input
                    id="form-input"
                    className="form__input"
                    type="url"
                    name="avatar"
                    placeholder="Аватар"
                    required
                    minLength="2"
                    maxLength="200"
                    ref={avatarRef}
                />
                <span className="form__input-error"></span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;