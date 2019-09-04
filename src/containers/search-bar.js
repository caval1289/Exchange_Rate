import React, { Component } from 'react';
import { fetchCountries } from '../actions/index';
import { connect } from 'react-redux';
import './index.css';

class SearchBar extends Component {
    componentWillMount() {
        this.props.fetchCountries()
    }

    renderSelectCountries() {
        return (
            <select
                onChange={e => this.onChangeCountry(e)}
                className='form-control search_bar'>
                {this.props.countries.map(country => (
                    <option key={country.code} value={country.code}>
                        {country.name}
                    </option>
                ))}
            </select>
        );
    }
    onChangeCountry = e => {
        console.log(" on change ", e.target.value);
    }
    render() {
        return (
            <form className='form-group'>
                {this.renderSelectCountries()}
            </form>
        )
    }
}
const mapStateToProps = (store) => {
    return {
        countries: store.countryReducer.countries
    }
}
const mapDispatchToProps = {
    fetchCountries
}

export default connect(mapStateToProps, mapDispatchToProps)(SearchBar);
