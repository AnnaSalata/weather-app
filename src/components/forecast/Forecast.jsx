import React from 'react';
import './Forecast.scss';
import {CityForecast} from "./CityForecast";
import {WeatherDate} from "./WeatherDate";

export class Forecast extends React.Component {

    state = {
        cityName: '',
        cityId: '',
        weatherForecast: {},
        image: '',
        selectedDate: '',
    };

    componentDidMount() {
        let cityId = this.props.match.params.id;
        this.showWeatherForecast(cityId);
    }

    componentWillReceiveProps(nextProps) {
        if (this.props.match.params.id !== nextProps.match.params.id) {
            this.showWeatherForecast(nextProps.match.params.id);
        }
    }

    showWeatherForecast = (id) => {
        const url = `http://api.openweathermap.org/data/2.5/forecast?id=${id}&units=metric&APPID=3099e6458ebc0fd39d284df99562b969`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const cityName = response.city.name;
                const weatherForecast = this.prepareWeatherList(response.list);
                const selectedDate = Object.keys(weatherForecast)[0];
                this.showCityImage(cityName);
                this.setState(state => {
                    return {...state, cityName, weatherForecast, selectedDate}
                })
            })
            .catch((e) => console.log(e));
    };

    showCityImage = (name) => {
        const url = `https://api.unsplash.com/search/photos?page=1&query=${name}&client_id=16766e2454ae30995948ba5b09abdbededcd6ba83fef87a22a80706efa472849`;
        fetch(url)
            .then(response => response.json())
            .then(response => {
                const image = response.results[0].urls.small;
                this.setState(state => {
                    return {...state, image}
                })
            })
            .catch((e) => console.log(e));
    };

    convertDate = (date, withTime) => {
        const weatherDate = new Date(date * 1000);
        let formattedDate = this.addZero(weatherDate.getDate()) + '.'
            + this.addZero(weatherDate.getMonth() + 1) + '.'
            + weatherDate.getFullYear();
        if (withTime) {
            formattedDate = formattedDate + ' '
                + this.addZero(weatherDate.getHours()) + ':'
                + this.addZero(weatherDate.getMinutes());
        }
        return formattedDate;
    };

    addZero = (dateElement) => {
        dateElement = dateElement.toString();
        if (dateElement.length < 2) {
            dateElement = '0' + dateElement;
        }
        return dateElement;
    };

    onChangeSelectedDate = (selectedDate) => {
        this.setState(state => {
            return {...state, selectedDate}
        })
    };

    prepareWeatherList = (responseList) => {
        let weatherList = {};
        for (let resp of responseList) {
            let date = this.convertDate(resp.dt);
            let weatherPerDay = weatherList[date];
            if (!weatherPerDay) {
                weatherPerDay = [];
            }
            weatherPerDay.push(resp);
            weatherList[date] = weatherPerDay;
        }
        return weatherList;
    };

    render() {

        let weatherComponents = [];
        let days = [];

        if (this.state.weatherForecast && this.state.selectedDate) {
            weatherComponents = this.state.weatherForecast[this.state.selectedDate].map(item => {
                return <CityForecast key={item.id} date={this.convertDate(item.dt, true)} temperature={item.main.temp}
                                     weather={item.weather[0].main}/>
            });

            days = Object.keys(this.state.weatherForecast).map(day => {
                return <WeatherDate key={day.id} onClick={this.onChangeSelectedDate} day={day}/>

            })
        }

        return <div className='forecast-page'>
            <h2 className='forecast-page__header'>{this.state.cityName} 5 days weather forecast</h2>
            <div className='forecast-page__components'>
                <div className='forecast-page__weather'>
                    <div className='forecast-page__days'>{days}</div>
                    <div className='forecast-page__time'>{weatherComponents}</div>
                </div>
                <div className='forecast-page__img'><img src={this.state.image} alt=""/></div>
            </div>
        </div>
    }
}