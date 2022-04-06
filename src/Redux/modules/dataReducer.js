export const REQUEST_DATA = 'data/REQUEST_DATA';
const FILL_DATA = 'data/FILL_DATA';

const initialState = {
    personInfo: []
};


export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FILL_DATA:
            return { 
                ...state,
                personInfo: action.payload
             };
        default: return state;
        }
    };
    
export const dataSelector = state => state.data

export const sendData = () => {
    return {
        type: REQUEST_DATA
    };
};

export const fillData = (info) => {
    return {
        type: FILL_DATA,
        payload: info
    };
};
