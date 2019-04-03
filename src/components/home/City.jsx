import React from 'react';
import './City.scss';
import {Link} from 'react-router-dom';

export class City extends React.Component {

    onRemove = (e) => {
        e.preventDefault();
        this.props.onRemove(this.props.id);
    };

    render() {
        let className = "city__img " + this.props.weather.toLowerCase();

        return <div className='city' id={this.props.id}>
            <div className='city__name'>
                <Link to={'/forecast/' + this.props.id}>
                    {this.props.cityName} </Link>
            </div>
            <div className='city__temp'>
                {this.props.temperature}&#176;C
            </div>
            <div className='city__weather'>
                {this.props.weather}
            </div>
            <div className={className}/>
            <button className='city__btn' onClick={this.onRemove}>remove</button>
        </div>
    }
}