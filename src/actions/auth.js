export const loginSuccess = ({user, notes}) => {
    return{
        type: 'LOGIN_SUCCESS',
        user,
        notes 
    } 
}

export const currentUser = ({ user, notes}) => {
    // debugger
    return {
        type: 'CURRENT_USER',
        user,
        notes 
    }
}

export const logoutUser = () =>{
    return {
        type: 'LOGOUT_USER'
    }
}

