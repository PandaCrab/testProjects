export const POST_DATA = 'data/POST_DATA';

const initialState = {}

export default function dataReducer(state = initialState, action) {
    switch (action.payload) {
        case POST_DATA:
            return {...state, data: action.payload};

        default: return state;
    }
};

export const postData = () => {
    return {
        type: POST_DATA
    }
}
