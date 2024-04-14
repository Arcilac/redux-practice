export function ratesReducer(state = initialState, action) {
    switch(action.type) {
        case "rates/amountChanged":
            return {...state, amount: action.payload }
        case "currencyCodeChanged":
            return {...state, currencyCode: action.payload }
        default:
            return state
    }
}