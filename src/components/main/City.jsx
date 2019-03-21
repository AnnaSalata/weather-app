import React from 'react';
import './City.scss';

export class City extends React.Component {

    render() {
        return <div className='city'>
            <div className='city__name'>
                {this.props.cityName}
            </div>
            <div className='city__temp'>
                {this.props.temperature}&#176;C
            </div>
            <div className='city__weather'>
                {this.props.weather}
            </div>
        </div>
    }


}