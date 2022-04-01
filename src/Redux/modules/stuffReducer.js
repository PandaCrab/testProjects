
export const FETCH_STUFF = 'stuff/FETCH_STUFF';
export const REQUEST_STUFF = 'stuff/REQUEST_STUFF';

const initialState = {
    stuff: [],
};

export default function stuffReducer (state = initialState, action) {
    switch ( action.type ) {
        case FETCH_STUFF: 
            return { ...state, stuff: action.payload }
        default: return state
    };
};

export function getStuff() {
        return {
            type: REQUEST_STUFF
        };
};
