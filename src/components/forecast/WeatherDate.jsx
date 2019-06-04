import * as React from "react";
import './WeatherDate.scss';

export class WeatherDate extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        this.props.onClick(this.props.day);
    };

    render() {
        let className = 'weather-date ';

        if (this.props.isActive) {
            className = className + "active-date";
        }

        return <div className={className} onClick={this.onClick}>
            {this.props.day}
        </div>
    }
}
