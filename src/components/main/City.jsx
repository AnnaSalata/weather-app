import React from 'react';
import './City.scss';
import {Route, Router, Switch} from 'react-router'
import {Link} from 'react-router-dom';
import {Forecast} from "../forecast";


import history from '../../history';

export class City extends React.Component {

    onClick = (e) => {
        e.preventDefault();
        if (this.props.cityName) {
            this.props.onClick(this.props.cityName);
        }
    };

    onRemove = (e) => {
        e.preventDefault();
        console.log("this.props.id", this.props.id);
        this.props.onRemove(this.props.id);
    };


    render() {
        return <Router history={history}>
            <div className='city' id={this.props.id}>

            <div className='city__name'>

                <Link to="/forecast"> {this.props.cityName}</Link>
            </div>
            <div className='city__temp'>
                {this.props.temperature}&#176;C
            </div>
            <div className='city__weather'>
                {this.props.weather}
            </div>
                <button className='city__btn' onClick={this.onRemove}>remove</button>
        </div>
            {/*<Route path="/forecast" component={Forecast} />*/}

        </Router>
    }


}