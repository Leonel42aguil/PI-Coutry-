
const initialState = {
    users:[]
}

const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case value:
        return {
            ...state
        }
        default:
            return {...state};
    }
}

export default rootReducer