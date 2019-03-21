import React from 'react';
import './Main.scss';
import {City} from "./City";

export const Main = ({items}) => {
    return <div>
        {items.map(item => <City key={item.id} cityName={item.name} temperature={item.main.temp}
                                 weather={item.weather[0].main}/>)}
    </div>
};
/*
export class Main extends React.Component {
    state = {
        cityName: '',
        temperature: 0,
        weather: '',
    };
    showCurrentWeather = () => {
        const url = `http://api.openweathermap.org/data/2.5/group?id=703448,2643743,4927854,2759794,3054643,2950158,3067696,2761369,3169070,6453366,3413829,2988507&units=metric&APPID=3099e6458ebc0fd39d284df99562b969`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                console.log('response', response);
                const cityName = response.name;
                const temperature = response.main.temp;
                const weather = response.weather[0].main;
                this.setState(state => {
                    return {...state, cityName, temperature, weather}
                })
            })
            .catch((e) => console.log(e));
    };
    render() {
        return <div>
            <div>{this.state.cityName}</div>
            <div>{this.state.temperature}</div>
            <div>{this.state.weather}</div>
        </div>
    }
}*/
