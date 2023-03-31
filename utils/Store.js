import { useReducer, createContext } from "react"

export const Store = createContext()

// el estado inicial de la aplicacion o variable de estado

const initialState = {
  cart: {
    cartItems: []
  }
}

// funcion reductora donde crea la logica funcional

function reducer(state, action){
  switch (action.type) {
    case 'PRODUCT_ADD_ITEM': {
      const newItem = action.payload
      const existItem = state.cart.cartItems.find(item => item.sku === newItem.sku)

      state.cart.cartItems = state.cart.cartItems.filter(obj => typeof obj === "object" && Object.keys(obj).length > 0)

      console.log(state.cart.cartItems);

      const cartItems = existItem ? state.cart.cartItems.map(item => item.sku === existItem.sku ? newItem: item) : [...state.cart.cartItems, newItem]

      return {...state, cart: {...state.cart, cartItems}}
    }

    case 'CART_REMOVE_ITEM' :{
      const cartItems = state.cart.cartItems.filter(
          (item => item.sku !== action.payload.sku)
      )

      return {...state , cart:{...state.cart, cartItems}}
    }
    default:
      return state
  }
}

// funcion para crear el store y envolver a los componentes hijos

export function StoreProvider({children}){
  const [state, dispatch] = useReducer(reducer, initialState)
  const value = {state, dispatch}
  return <Store.Provider value={value}>{children}</Store.Provider>
}