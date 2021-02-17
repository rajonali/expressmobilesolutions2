export default function AuthReducers(state, action){
    switch(action.type){
        case 'TOGGLE_USER_LOGGED_IN'  : {
            return {
                ...state,
                userLoggedIn : true
            }
        }
        default:
            throw new Error('Bad action type')
    }
}