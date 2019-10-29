import * as math from 'mathjs';

const ADD_SYMBOL = 'displayReducer/ADD_SYMBOL';
const TO_COUNT = 'displayReducer/TO_COUNT';
const CLEAR_DISPLAY = 'displayReducer/CLEAR_DISPLAY';

let initialState = {
    input: ''
};

export const displayReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_SYMBOL:
            return {
                ...state,
                input: state.input + action.value
            };
        case TO_COUNT:
            return {
                ...state,
                input: math.evaluate(state.input)
            };
        case CLEAR_DISPLAY:
            return {
                ...state,
                input: ''
            };

        default:
            return state

    }
};


export const addSymbol = (value) => {
    return {
        type: ADD_SYMBOL,
        value
    }
};

export const toCount = () => {
    return {type: TO_COUNT}
};


export const clearDisplay = () => {
    return {type: CLEAR_DISPLAY}
};