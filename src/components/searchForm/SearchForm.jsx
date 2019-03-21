import React from 'react';
import {Field} from '../field';
import './SearchForm.scss'

export class SearchForm extends React.Component {
    state = {
        searchValue: '',
    };
    onChange = (searchValue) => {
        this.setState((state) => ({...state, searchValue}));
    };
    onSubmit = (e) => {
        e.preventDefault();
        if (this.state.searchValue) {
            this.props.onSubmit(this.state.searchValue);
        }
        this.state.searchValue = '';
        this.setState(this.state);
    };


    render() {
        return <form onSubmit={this.onSubmit} className="search-form">
            <Field
                value={this.state.searchValue}
                placeholder="Enter city name"
                onChange={this.onChange}/>
        </form>
    }
}