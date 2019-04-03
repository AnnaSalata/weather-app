import React from 'react';
import './Field.scss';

export class Field extends React.Component {
    onChange = (e) => {
        const {value} = e.currentTarget;
        this.props.onChange(value);
    };

    render() {
        const id = Math.ceil(Math.random() * 10000);
        return <div className="field">
            <label htmlFor={id}>{this.props.label}</label>
            <input
                placeholder={this.props.placeholder}
                type="text"
                onChange={this.onChange}
                id={id}
                value={this.props.value}
                className="field__input"/>
        </div>
    }
}