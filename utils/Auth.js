import { useReducer, createContext } from "react"

export const Auth = createContext()

// el estado inicial de la aplicacion o variable de estado

const initialState = {
  user: {
    isActive: false,
    data: {}
  }
}


// funcion reductora donde crea la logica funcional

function reducer(state, action){
  switch (action.type) {
    case 'USER_LOG_IN': {
      const newData = action.payload
      state.user.data = newData
      state.user.isActive = true
      return state
    }
    case 'USER_LOG_OUT' :{
      state.user.isActive = false
      state.user.data = {}

      return state
    }
    default:
      return state
  }
}


export function AuthProvider({children}){
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  return <Auth.Provider value={value}>{children}</Auth.Provider>
}