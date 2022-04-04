export const POST_DATA = 'data/POST_DATA';
const FILL_DATA = 'data/FILL_DATA'

const initialState = {
    personInfo: []
}

export default function dataReducer(state = initialState, action) {
    switch (action.type) {
        case FILL_DATA:
            return {...state, personInfo: state.personInfo.concat([action.payload])}

        default: return state;
    }
};

export const postData = () => {
    return {
        type: POST_DATA
    }
}

export const fillData = (info) => {
    return {
        type: FILL_DATA,
        payload: info
    }
}
