import React from 'react';
import {Switch, Route} from 'react-router'
import '../home/Home.scss';
import {Forecast} from "../forecast";
import {Home} from "../home/Home";

export class Main extends React.Component {

    render() {
        return (
            <Switch>
                <Route path='/forecast' component={Forecast}/>
                <Route exact path='/' component={Home}/>
            </Switch>
        );
    }
}