
const FETCH_STUFF = 'stuff/FETCH_STUFF';

const initialState = {
    stuff: []
}

export default function stuffReducer (state = initialState, action) {
    switch ( action.type ) {
        case FETCH_STUFF: 
            return { ...state, stuff: action.payload }
        default: return state
    }
}

export function getStuff() {
        return async dispatch => {
        const response = await fetch('http://demo3147501.mockable.io/');
        const json = await response.json();
        dispatch ({ type: FETCH_STUFF, payload: json.products });
    };
}
