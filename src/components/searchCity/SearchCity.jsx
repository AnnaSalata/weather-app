import React from 'react';
import './SearchCity.scss';

export class SearchCity extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        if (this.props.cityId) {
            this.props.onClick(this.props.cityId);
        }
    };

    render() {
        return <div className='search-city' id={this.props.cityId}>
            <div className='search-city__name' onClick={this.onClick}>{this.props.cityName}</div>
            <div className='search-city__temp'>{this.props.temperature}&#176;C</div>
            <div className='search-city__weather'>{this.props.weather}</div>
        </div>
    }
}