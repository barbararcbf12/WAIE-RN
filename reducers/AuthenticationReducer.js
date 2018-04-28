import { 
    MODIFY_EMAIL,
    MODIFY_PASSWORD,
    MODIFY_NAME,
    ERROR_SIGNUP,
    SUCCESS_SIGNUP,
    ERROR_LOGIN,
    SUCCESS_LOGIN,
    LOADING_LOGIN,
    LOADING_SIGNUP,
} from '../actions/types'

const INITIAL_STATE = {
    name: '',
    email: '',
    password: '',
    errorSignUp: '',
    errorLogIn: '',
    loadingLogin: false,
    loadingSignUp: false,
}

export default ( state = INITIAL_STATE, action ) => {

    switch(action.type){

        case MODIFY_NAME:
            return { ...state, name: action.payload }
        
        case MODIFY_EMAIL:
            return { ...state, email: action.payload }
        
        case MODIFY_PASSWORD:
            return { ...state, password: action.payload }
        
        case SUCCESS_SIGNUP:
            return { ...state, nome: '', password: '', loadingSignUp: false }
        
        case ERROR_SIGNUP:
            return { ...state, errorSignUp: action.payload, loadingSignUp: false }

        case SUCCESS_LOGIN:
            return { ...state, errorSignUp: '', errorLogIn: '', loadingLogin: false, loadingSignUp: false, loadingSignUp: false } //...INITIAL_STATE  }
        
        case ERROR_LOGIN:
            return { ...state, errorLogIn: action.payload, loadingLogin: false  }

        case LOADING_LOGIN:
            return { ...state, loadingLogin: true }

        case LOADING_SIGNUP:
            return { ...state, loadingSignUp: true }

        default:
            return state

    }

}