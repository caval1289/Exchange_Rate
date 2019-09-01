import axios from 'axios';

const GET_COUNTRIES = "GET_COUNTRIES";
export function fetchCountries() {
    return function fetchCountries() {
        axios.get("https://restcountries.eu/rest/v2/all").then(axiosResponse => {
            dispatch({
                type: GET_COUNTRIES,
                payload: axiosResponse.data
            });
        });
    };

}