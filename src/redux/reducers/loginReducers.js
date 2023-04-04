import { types } from "../types"


const initialState = {
    loggedUser: "",
}

export function loginReducer(state = initialState, action) {

    switch (action.type) {
        case types.USER_LOGIN:
            return { ...state, loggedUser: action.payload }
        case types.USER_LOGOUT:
            return { ...state, loggedUser: action.payload }


        default: return state
    }
}
