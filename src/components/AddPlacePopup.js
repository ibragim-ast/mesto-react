import React, { useEffect } from "react";
import PopupWithForm from "./PopupWithForm.js";
import useFormValidator from "../hooks/useFormValidator.js";

function AddPlacePopup({ isOpen, onClose, onAddPlace }) {

    const { values, errors, isValid, handleChange, resetForm } = useFormValidator({});

    function handleSubmit(e) {
        e.preventDefault();
        onAddPlace(values);
    }

    useEffect(() => {
        resetForm();
    }, [isOpen, resetForm])

    return (
        <PopupWithForm
            name="add-card"
            title="Новое место"
            submitBtnText="Создать"
            isOpen={isOpen}
            onClose={onClose}
            onSubmit={handleSubmit}
            isDisabled={isValid}
        >
            <div className="form__section">
                <input
                    className={errors.name ? 'form__input form__input-error' : 'form__input'}
                    id="card-title"
                    type="text"
                    name="name"
                    placeholder="Название"
                    required
                    minLength="2"
                    maxLength="30"
                    value={values.name || ''}
                    onChange={handleChange}
                />
                <span
                    className={errors.name ? 'form__input-error form__input-error_active' : 'form__input-error'}
                    id="card-title-error">{errors.name}
                </span>
            </div>
            <div className="form__section">
                <input
                    className={errors.link ? 'form__input form__input-error' : 'form__input'}
                    id="card-link"
                    type="url"
                    name="link"
                    placeholder="Ссылка на картинку"
                    required
                    value={values.link || ''}
                    onChange={handleChange}
                />
                <span
                    className={errors.link ? 'form__input-error form__input-error_active' : 'form__input-error'}
                    id="card-link-error">{errors.link}
                </span>
            </div>
        </PopupWithForm>
    )
}

export default AddPlacePopup;