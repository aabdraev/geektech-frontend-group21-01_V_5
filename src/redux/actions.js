import { types } from "./types";

export function setLoggedUserAction(username) {
    return {
        type: types.USER_LOGIN,
        payload: username
    }
}

export function handleLogOutAction() {
    return {
        type: types.USER_LOGOUT
    }
}

export function handleAddAction(value) {
    return {
        type: types.HANDLE_ADD,
        payload: value
    }
}

export function handleClearAction() {
    return {
        type: types.HANDLE_CLEAR
    }
}