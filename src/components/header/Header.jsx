import React from 'react';
import './Header.scss';
import {SearchForm} from "../searchForm";
import {SearchCity} from "../searchCity/SearchCity";
import logo from '../../assets/images/weather-logo.png';
import menu from '../../assets/images/button.png';

export class Header extends React.Component {

    state = {
        isExpand: false,
        searchValue: '',
        searchCities: [],
    };

    toggle = () => {
        this.setState({isExpand: !this.state.isExpand})
    };

    search = (searchValue) => {
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${searchValue}&units=metric&APPID=3099e6458ebc0fd39d284df99562b969`;
        fetch(url)
            .then(response => {
                    if (response.status == 200) {
                        return response.json();
                    } else {
                        return false
                    }
                }
            )
            .then(response => {
                if (response) {
                    const searchCities = this.state.searchCities;
                    searchCities.push(response);
                    this.setState(state => {
                        return {...state, searchValue, searchedCities: searchCities}
                    })
                }
            })
            .catch((e) => console.log(e));
    };

    addCityId = (newId) => {
        let currentCitiesIds = JSON.parse(localStorage.getItem("cityIds"));
        let idAlreadyExist = false;
        for (let id of currentCitiesIds) {
            if (id == newId) {
                idAlreadyExist = true;
                break;
            }
        }
        if (!idAlreadyExist) {
            currentCitiesIds.push(newId);
            localStorage.setItem("cityIds", JSON.stringify(currentCitiesIds));
        }
    };

    render() {
        const searchCities = this.state.searchCities.map(searchCity => {
            return <SearchCity id={searchCity.id} cityName={searchCity.name} temperature={searchCity.main.temp}
                               weather={searchCity.weather[0].main} onAdd={this.addCityId}/>
        });

        let className = "global-nav ";
        if (this.state.isExpand) {
            className += 'global-nav_expand'
        }

        return <nav className={className}>
            <div className="global-nav__controls controls">
                <div className="controls__close" onClick={this.toggle}><img className="controls__menu" src={menu}
                                                                            alt=""/></div>
                <div className="controls__logo">Weather App<img className="controls__img" src={logo} alt=""/></div>
            </div>
            <div className="global-nav__options">
                <SearchForm onSubmit={this.search}/>
                <div className="search-cities">{searchCities}</div>
            </div>
        </nav>
    }
}
