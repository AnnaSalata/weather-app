import React from 'react';
import './Home.scss';
import {City} from "./City";

export class Home extends React.Component {

    state = {
        cities: [],
        defaultCitiesIds: [703448, 2643743, 4927854, 2759794, 3054643, 2950158, 3067696, 2761369, 3169070, 6453366, 3413829, 2988507],
        currentCitiesIds: [],
        APPID: '3099e6458ebc0fd39d284df99562b969'
    };

    onLoadWeather = () => {
        if (this.state.defaultCitiesIds && this.state.defaultCitiesIds.length > 0) {
            this.prepareCityIds();
            this.showCurrentWeather();
        }
    };

    componentDidMount() {
        this.onLoadWeather()
    }

    componentWillUnmount() {
    }

    prepareCityIds() {
        let lsCityIds = localStorage.getItem("cityIds");
        if (!lsCityIds) {
            localStorage.setItem("cityIds", JSON.stringify(this.state.defaultCitiesIds));
            this.state.currentCitiesIds = this.state.defaultCitiesIds;
        } else {
            this.state.currentCitiesIds = JSON.parse(lsCityIds);
        }
    };

    removeCityId = (oldId) => {
        let currentCitiesIds = JSON.parse(localStorage.getItem("cityIds"));
        for (let i = 0; i < currentCitiesIds.length; i++) {
            if (currentCitiesIds[i] == oldId) {
                currentCitiesIds.splice(i, 1);
                localStorage.setItem("cityIds", JSON.stringify(currentCitiesIds));
                break;
            }
        }
        this.state.currentCitiesIds = currentCitiesIds;
        let cities = this.state.cities;
        for (let i = 0; i < cities.length; i++) {
            if (cities[i].id == oldId) {
                cities.splice(i, 1);
            }
        }
        this.setState(state => {
            return {...state, cities}
        });
    };

    showCurrentWeather = () => {
        let cities = [];
        if (this.state.currentCitiesIds && this.state.currentCitiesIds.length > 0) {
            const ids = [];
            ids.push(this.state.currentCitiesIds);
            const idsStr = ids.join(',');
            const url = `http://api.openweathermap.org/data/2.5/group?id=${idsStr}&units=metric&APPID=${this.state.APPID}`;
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log('list', response.list);
                    cities = response.list;
                    ///this.state.cities = cities;
                    this.setState(state => {
                        return {...state, cities}
                    })
                })
                .catch((e) => console.log(e));
        } else {
            this.setState(state => {
                return {...state, cities}
            });
        }
    };

    render() {
        const mainCities = this.state.cities.map(city => {
            return <City id={city.id} cityName={city.name} temperature={city.main.temp}
                         weather={city.weather[0].main}
                         onRemove={this.removeCityId}/>
        });

        return (
            <div>
                <div className='cities'>
                    {mainCities}
                </div>
            </div>
        );
    }
}