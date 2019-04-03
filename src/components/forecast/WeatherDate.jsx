import * as React from "react";
import './WeatherDate.scss';

export class WeatherDate extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        this.props.onClick(this.props.day);
    };

    render() {
        return <button className='weather-date' onClick={this.onClick}>
            {this.props.day}
        </button>
    }
}