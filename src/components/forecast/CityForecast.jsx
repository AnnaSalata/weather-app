import React from 'react';
import './CityForecast.scss';

export class CityForecast extends React.Component {

    render() {
        let className = "weather-forecast__img " + this.props.weather.toLowerCase();

        return <div className='weather-forecast'>
            <div className='weather-forecast__date'>{this.props.date}</div>
            <div className={className}/>
            <div className='weather-forecast__weather'>{this.props.weather}</div>
            <div className='weather-forecast__temperature'>{this.props.temperature}&#176;C</div>
        </div>
    }
}