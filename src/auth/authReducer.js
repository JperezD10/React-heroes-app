import { types } from "../types/types"

// actionExample = {
//     type: types.login,
//     payload: {
//         name: "Juan",
//         email: "asasdas@gmail.com"
//     }
// }

export const authReducer = (state = {}, action) => {
    switch (action.type) {
        case types.login:
            return {
                ...action.payload,
                logged:true
            }
        case types.logout:
            return {
                logged:false
            }
        default:
            return state
    }
}