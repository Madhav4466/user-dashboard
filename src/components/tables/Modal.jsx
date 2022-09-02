import React from "react";

export default function Modal({ closeModal }) {
    return (
        <div className="modaMain">
            <button
                className="modalContainer"
                onClick={() => closeModal(false)}
            >
                X
            </button>
            <div className="modalTitle">User Management</div>
            <div className="modalBody">
                <input
                    type="text"
                    className="userName form-control"
                    placeholder="Username"
                />
                <input
                    type="text"
                    className="age form-control"
                    placeholder="Age"
                />
            </div>
            <div className="modalFooter">
                <button className="btn btn-primary">Close</button>
                <button className="btn btn-success">Save</button>
            </div>
        </div>
    );
}
