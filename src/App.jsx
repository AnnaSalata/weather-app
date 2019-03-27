import React, {Component} from 'react';
import './App.scss';
import {Header} from './components/header/';
import {Main} from "./components/main";


class App extends Component {


    /*onLoadWeather = () => {
        console.log("onload", this.state.defaultCitiesIds);
        if (this.state.defaultCitiesIds && this.state.defaultCitiesIds.length > 0) {
            this.prepareCityIds();
            this.showCurrentWeather();
        }
    };

    prepareCityIds() {
        let lsCityIds = localStorage.getItem("cityIds");
        if (!lsCityIds) {
            localStorage.setItem("cityIds", JSON.stringify(this.state.defaultCitiesIds));
            this.setCurrentCityIds(this.state.defaultCitiesIds);
        } else {
            this.setCurrentCityIds(JSON.parse(lsCityIds));
        }
        //this.addCityId(703448);
        //this.removeCityId(703448);
    };

    setCurrentCityIds(cityIds) {
        const currentCitiesIds = cityIds;
        this.setState(state => {
            return {...state, currentCitiesIds}
        })
    };

    addCityId(newId) {
        let currentCitiesIds = this.state.currentCitiesIds;
        let idAlreadyExist = false;
        for (let id of currentCitiesIds) {
            if (id == newId) {
                idAlreadyExist = true;
                break;
            }
            console.log('ADD', newId)
        }
        if (!idAlreadyExist) {
            currentCitiesIds.push(newId);
            localStorage.setItem("cityIds", JSON.stringify(currentCitiesIds));
            // this.setCurrentCityIds(currentCitiesIds);
        }
    };

    removeCityId(oldId) {
        let currentCitiesIds = this.state.currentCitiesIds;
        for (let i = 0; i < currentCitiesIds.length; i++) {
            if (currentCitiesIds[i] == oldId) {
                currentCitiesIds.splice(i, 1);
                localStorage.setItem("cityIds", JSON.stringify(currentCitiesIds));
                break;
            }
        }
    }

    showCurrentWeather = () => {
        if (this.state.currentCitiesIds && this.state.currentCitiesIds.length > 0) {
            const ids = [];
            ids.push(this.state.currentCitiesIds);
            console.log('ids', ids);
            const idsStr = ids.join(',');
            console.log('idsStr', idsStr);
            const url = `http://api.openweathermap.org/data/2.5/group?id=${idsStr}&units=metric&APPID=${this.state.APPID}`;
            fetch(url)
                .then(response => response.json())
                .then(response => {
                    console.log('list', response.list);
                    const cities = response.list;
                    this.setState(state => {
                        return {...state, cities}
                    })
                })
                .catch((e) => console.log(e));
        }
    };*/

    render() {
        return (
            <div className="App">


                <Header/>
                <Main/>
            </div>
        );
    }
}

export default App;
