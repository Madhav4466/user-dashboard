import React from "react";

export default class ModalDialog extends React.Component {
    handleCloseClick = () => 
    {
        this.props.changeDisplay("none");
        document.querySelectorAll("#ui-dashboard > div > div > div.modal-body > div > button")[0].focus();
    };

    handleEscDown = (event) => {
        if (event.key === "Escape") 
        {
            this.props.changeDisplay("none");
            document.querySelectorAll("#ui-dashboard > div > div > div.modal-body > div > button")[0].focus();
        }
    };

    render() {
        return (
            <div
                className="modal"
                style={{ display: this.props.display }}
                id={this.props.id}
                tabIndex="-1"
                role="dialog"
                aria-labelledby={this.props.titleId}
                aria-modal={this.props.display === "block" ? true : false}
                aria-hidden={this.props.display === "none" ? true : false}
                onKeyDown={this.handleEscDown}
            >
                <div
                    className={`modal-dialog modal-dialog-centered modal-${this.props.size}`}
                >
                    <div className="modal-content">
                        <div
                            className="modal-header"
                            style={{
                                borderBottom: "1px solid #fff",
                                justifyContent: "center",
                            }}
                        >
                            {this.props.modalTitle}
                            {this.props.showClose === true ? (
                                <button
                                    type="button"
                                    id={`${this.props.titleId}-close`}
                                    className="btn-close"
                                    data-dismiss="modal"
                                    aria-label="Close"
                                    aria-labelledby={` ${this.props.titleId}-close ${this.props.titleId}`}
                                    onClick={this.handleCloseClick}
                                ></button>
                            ) : null}
                        </div>
                        <div className="modal-body">{this.props.modalBody}</div>
                        {this.props.modalFooter !== undefined ? (
                            <div className="modal-footer">
                                {this.props.modalFooter}
                            </div>
                        ) : null}
                    </div>
                </div>
            </div>
        );
    }
}
