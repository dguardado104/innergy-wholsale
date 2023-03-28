import { useState, useContext, useEffect } from "react"
import { Store } from "@/utils/Store"
import { XMarkIcon } from "@heroicons/react/24/solid"

export default function Header(){


    const {state, dispatch} = useContext(Store)
    const { cart } = state
    const [cartItemsCount, setCartItemsCount] = useState(0)

    const removeCartHandler = (item) => {
        dispatch({type: 'CART_REMOVE_ITEM', payload: item})
    }

    const updateCartHandler = (item, qty) => {
        const quantity = Number(qty)
        dispatch({type: 'PRODUCT_ADD_ITEM', payload: {...item, quantity}})
    }



    useEffect(() => {

        setCartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0))

    }, [cart.cartItems])
    
    

    const [active, setActive] = useState(false)

    return (
        <div className="relative flex justify-between items-center p-4 shadow">
            <div>
                <img src="https://test3.innergyapparel.com/media/wysiwyg/logo-black.png" alt="Innergy" className="w-28" />
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <span className="font-bold">John Doe</span>
                </div>
                <div>
                    <button onClick={() => setActive(!active) }>Cart {cartItemsCount}</button>
                </div>
            </div>

            <div className={`absolute bg-white w-3/4 md:w-1/2 shadow  top-16 right-4 flex flex-col ${active ? '' : 'hidden'}`} >
                <div className="text-white bg-[#222] text-center py-2 font-bold">
                    <span>Cart</span>
                </div>
               
                    {
                        cart.cartItems.length > 0 ? (
                            <>
                                <div>
                                    {
                                        cart.cartItems.map((item) => (
                                            <div className="flex items-center py-4 mx-2 border-b-2" key={item.id}>
                                                <div className="w-1/4 flex justify-center text-sm">
                                                    {item.sku}
                                                </div>
                                                <div className="w-1/4 flex justify-center">
                                                    <input type="number" value={item.quantity} onChange={(e) => updateCartHandler(item, e.target.value) } />
                                                </div>
                                                <div className="w-1/4 flex justify-center text-sm">
                                                    ${item.unitPrice * item.quantity}
                                                </div>
                                                <div className="w-1/4 flex justify-center">
                                                    <button onClick={() => removeCartHandler(item)} className="btn-cart-remove">
                                                        <XMarkIcon className="h-6 w-6"></XMarkIcon>
                                                    </button>
                                                </div>
                                            </div>
                                        ))
                                    }
                                    
                                </div>
                                <div className="py-4 text-center">
                                    Total ({cart.cartItems.reduce((a, c) => a + c.quantity, 0)}): ${cart.cartItems.reduce((a, c) => a + c.quantity * c.unitPrice, 0)}
                                </div>
                                <div className="flex justify-center p-2">
                                    <button>Confirm Order</button>
                                </div>
                            </>
                        ) : (
                            <>
                                <div className="py-4 text-center">
                                    Cart is empty
                                </div>
                            </> 
                        )
                    }
                        
                            
                        
                     
                        
               
                
            </div>

        </div>
    )
  }
  