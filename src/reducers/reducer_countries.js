import { GET_COUNTRIES } from '../actions/index';

const initialState = {
    countries: []
};
export default function (countryReducer = initialState, action) {
    switch (action.type) {
        case GET_COUNTRIES:
            return {
                ...countryReducer,
                countries: getCountriesInfo(action.payload)
            };
    }
    return countryReducer
}

function getCountriesInfo(data) {
    return data.map(country => {
        return {
            name: country.name,
            currencyCode: country.currencies[0].code,
            flag: country.flag,
            code: country.alpha3Code,
        };
    }).filter(country => {
        return country.currencyCode !== 'USD'
    });
}