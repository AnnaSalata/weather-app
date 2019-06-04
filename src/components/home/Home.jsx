import React from 'react';
import './Home.scss';
import {City} from "./City";

export class Home extends React.Component {

    render() {
        const mainCities = this.props.cities.map(city => {
            return <City key={city.id} id={city.id} cityName={city.name} temperature={city.main.temp}
                         weather={city.weather[0].main}
                         onRemove={this.props.onRemove}/>

        });

        return (
            <div className='cities-page'>
                <div className='cities-page__list'>
                    {mainCities}
                </div>
            </div>
        );
    }
}
