import React from "react";

export default class TextField extends React.Component
{
    render()
    {
        return (
          <div className="form-floating">
            <input
              type={this.props.type}
              className="form-control"
              id={this.props.id}
              placeholder={this.props.placeholder}
              name={this.props.name}
              disabled={this.props.disabled}
              readOnly={this.props.readOnly}
              aria-describedby={this.props.ariaDescribedby}
            />
            <label for={this.props.id}>{this.props.label}</label>
          </div>
        );
    }
}