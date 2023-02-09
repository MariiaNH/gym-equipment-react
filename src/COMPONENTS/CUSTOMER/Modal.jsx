import React from "react";
import LoginForm from "./LoginForm/LoginForm";
import Registration from "./RegistrationForm/RegistrationForm";

export const Modal = ({  currentForm, setOpenModal, toggleForm }) => {

    return (
        <div className="customer-modal">
            <div className="customer-modal-content">
                {
                    currentForm === 'login' ?
                        <LoginForm onFormSwitch={toggleForm} />
                        : <Registration onFormSwitch={toggleForm} />
                }
            </div>
        </div>
    )
}
