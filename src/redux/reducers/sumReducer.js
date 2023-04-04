import { types } from "../types";

const initialState = {
    value: "",
    sum: "",
    array: []
}

export function sumReducer(state = initialState, action) {
    switch (action.type) {
        case types.HANDLE_ADD:
            if (state.array.length < 1) {
                state.array.push(+action.payload)
                return { ...state, value: action.payload, sum: action.payload }
            }
            else {
                state.array.push(+action.payload)
                return { ...state, value: action.payload, sum: state.array.reduce((sum, prev) => sum + prev) }
            }
        case types.HANDLE_CLEAR:
            return { ...state, value: "", sum: "", array: [] }
        default: return state
    }
}