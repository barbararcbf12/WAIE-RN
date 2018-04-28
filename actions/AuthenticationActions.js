import firebase from 'firebase'
import { Actions } from 'react-native-router-flux'
import b64 from 'base-64'
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
} from './types'

export const modifyName = (text) => {
    return {
        type: MODIFY_NAME,
        payload: text
    }
}

export const modifyEmail = (text) => {
    console.log(text)
    return {
        type: MODIFY_EMAIL,
        payload: text
    }
}

export const modifyPassword = (text) => {
    return {
        type: MODIFY_PASSWORD,
        payload: text
    }
}

export const signUpUser = ({ name, email, password }) => {
    return dispatch => {

        dispatch({type: LOADING_SIGNUP})

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(user => {
                let emailB64 = b64.encode(email); //convert email to base 64
                firebase.database().ref(`/users/ ${emailB64}`)
                    .push({ name }) //they key:value are the same, so it isn't necessary to declare the key
                    .then( value =>  signupSuccess(dispatch) )
            })
            .catch(error => signupError(error, dispatch));
    }
}

const signupSuccess = (dispatch) => {
    dispatch ({ 
        type: SUCCESS_SIGNUP 
    });
    Actions.principal();
}

const signupError = (error, dispatch) => {
    dispatch ({ 
        type: ERROR_SIGNUP, 
        payload: error.message 
    });
}

export const logInUser = ({ email, password }) => {
    return dispatch => {

        dispatch({ type: LOADING_LOGIN })

        firebase.auth().signInWithEmailAndPassword(email, password)
        .then( value => loginSuccess(dispatch))
        .catch( error => loginError(error,dispatch));
    }
}

const loginSuccess = (dispatch) => {
    dispatch ({ 
        type: SUCCESS_LOGIN 
    });
    Actions.principal();
}

const loginError = (error, dispatch) => {
    dispatch ({ 
        type: ERROR_LOGIN, 
        payload: error.message 
    });
}
