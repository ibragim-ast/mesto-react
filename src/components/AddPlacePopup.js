import React from "react";
import PopupWithForm from "./PopupWithForm.js";


function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const nameRef = React.useRef();
    const linkRef = React.useRef();

    function handleSubmit(e) {
        e.preventDefault();

        onAddPlace({
            link: linkRef.current.value,
            name: nameRef.current.value
        });
    }

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
        >
            <div className="form__section">
                <input
                    className="form__input form__input_type_card-name" id="card-title"
                    type="text"
                    name="name"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    ref={nameRef}
                />
                <span
                    className="form__input-error"
                    id="card-title-error">
                </span>
            </div>
            <div className="form__section">
                <input
                    className="form__input form__input_type_link"
                    id="card-link"
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                    ref={linkRef}
                />
                <span
                    className="form__input-error"
                    id="card-link-error">
                </span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;