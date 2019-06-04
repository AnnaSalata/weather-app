import React from 'react';
import {Switch, Route} from 'react-router'
import {Forecast} from "../forecast";
import {Home} from "../home/Home";

export class Main extends React.Component {


    render() {
        return (
            <Switch>
                <Route exact path='/' render={(routeProps) => <Home cities={this.props.cities}
                                                                    onRemove={this.props.onRemove} {...routeProps} />}/>
                <Route path='/forecast/:id' component={Forecast}/>
            </Switch>
        );
    }
}
