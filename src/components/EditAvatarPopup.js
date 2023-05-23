import React from "react";
import PopupWithForm from "./PopupWithForm.js";
import useFormValidator from '../hooks/useFormValidator.js';

function EditAvatarPopup({ isOpen, onClose, onUpdateAvatar }) {

    const avatarRef = React.useRef();
    const { values, errors, isValid, handleChange,
        resetForm } = useFormValidator({});

    function handleSubmit(e) {
        e.preventDefault();

        onUpdateAvatar({
            avatar: avatarRef.current.value,
        });
    }

    React.useEffect(() => {
        resetForm();
    }, [isOpen, resetForm])

    return (
        <PopupWithForm
            name="edit-avatar"
            title="Обновить аватар"
            submitBtnText="Сохранить"
            isOpen={isOpen}
            onClose={onClose}
            isDisabled={!isValid}
            onSubmit={handleSubmit}
        >
            <div className="form__section">
                <input
                    id="form-input"
                    className={errors.avatar ? 'form__input form__input-error' : 'form__input'}
                    type="url"
                    name="avatar"
                    placeholder="Аватар"
                    required
                    minLength="2"
                    maxLength="200"
                    ref={avatarRef}
                    value={values.avatar || ''}
                    onChange={handleChange}
                />
                <span className={errors.avatar ? 'form__input-error form__input-error_active' : 'form__input-error'}>
                    {errors.avatar}
                </span>
            </div>
        </PopupWithForm>
    )
}

export default EditAvatarPopup;