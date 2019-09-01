import React, { Component } from 'react';

class SearchBar extends Component {
    componentWillMount() {
        //
    }

    renderSelectCountries() {
        return (
            <select>
                <option />
            </select>
        );
    }

    render() {
        return (
            <form>
                {this.renderSelectCountries()}
            </form>
        )
    }
}

export default SearchBar;
