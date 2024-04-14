const initialState = {
    fullName: "Jamund Ferguson",
    loggedIn: false,
}

export function userReducer(state, action) {
    return state
}

// selectors
export const getName = (state) => {
    return state.user.fullName.split(" ")[0].toLowerCase()
}