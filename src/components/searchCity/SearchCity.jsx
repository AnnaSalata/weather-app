import React from 'react';
import './SearchCity.scss';
import {Link} from "react-router-dom";

export class SearchCity extends React.Component {

    onAdd = (e) => {
        e.preventDefault();
        this.props.onAdd(this.props.cityId);
    };

    render() {
        return <div className='search-city' id={this.props.cityId}>
            <div className='search-city__name'>
                <Link to='/forecast'>
                    {this.props.cityName} </Link></div>
            <div className='search-city__temp'>{this.props.temperature}&#176;C</div>
            <div className='search-city__weather'>{this.props.weather}</div>
            <button className='search-city__btn' onClick={this.onAdd}>add</button>
        </div>
    }
}