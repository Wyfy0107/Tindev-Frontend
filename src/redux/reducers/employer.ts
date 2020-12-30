import { employerInfoFromStorage } from '../saga/employer'
import {
  EmployerActions,
  REGISTER_EMPLOYER_REQUEST,
  REGISTER_EMPLOYER_SUCCESS,
  REGISTER_EMPLOYER_FAIL,
  LOGIN_EMPLOYER_REQUEST,
  LOGIN_EMPLOYER_SUCCESS,
  LOGIN_EMPLOYER_FAIL,
  LOGOUT_EMPLOYER,
} from '../types'

const initialState = {
  info: {},
  credential: { email: '', password: '' },
  employerInfo: employerInfoFromStorage,
  loading: false,
  error: null,
}

const employer = (state = initialState, action: EmployerActions) => {
  switch (action.type) {
    case REGISTER_EMPLOYER_REQUEST:
      // if ('email' && 'password' in action.payload) {
      return {
        ...state,
        loading: true,
        // info: {},
        //@ts-ignore
        email: action.payload.email,
        //@ts-ignore
        password: action.payload.password,
      }
    // }

    case REGISTER_EMPLOYER_SUCCESS:
      return { ...state, employerInfo: action.payload, loading: false }
    case REGISTER_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGIN_EMPLOYER_REQUEST:
      return { ...state, loading: true, credentials: action.payload }
    case LOGIN_EMPLOYER_SUCCESS:
      return { ...state, loading: false, employerInfo: action.payload }
    case LOGIN_EMPLOYER_FAIL:
      return { ...state, loading: false, error: action.payload }
    case LOGOUT_EMPLOYER:
      return {}
    default:
      return state
  }
}

export default employer
