import { useState, useContext, useEffect } from "react"
import { Store } from "@/utils/Store"
import MenuUser from "./MenuUser"

export default function Header(){
  
  const {state, dispatch} = useContext(Store)
  const { cart } = state
  const [cartItemsCount, setCartItemsCount] = useState(0)
  const [cartItemsTotal, setCartItemsTotal] = useState(0)
  
  const removeCartHandler = (item) => {
    dispatch({type: 'CART_REMOVE_ITEM', payload: item})
  }
  
  useEffect(() => {

    setCartItemsCount(cart.cartItems.length) 

    let total = 0

    if(cart.cartItems.length > 0){
      cart.cartItems.map(x => {
        if(x.options){
          total += x.options.reduce((a, c) => a + (c.qty * c.price), 0)
        }   
      })
    }

    setCartItemsTotal(total)

  }, [cart.cartItems])
  
  const [active, setActive] = useState(false)
  
  return (
    <div className="relative flex justify-between items-center p-4 shadow">
      <div>
        <img src="/logo-black.png" className="w-28" />
      </div>
      <div className="flex items-center gap-2">
        <div>
          <MenuUser />
        </div>
        <div>
          <button onClick={() => setActive(!active)}>Cart {cartItemsCount}</button>
        </div>
      </div>
    
      <div className={`absolute bg-white w-3/4 md:w-1/2 shadow  top-16 right-4 flex flex-col ${active ? '' : 'hidden'}`} >
        <div className="text-white bg-[#222] text-center py-2 font-bold">
          <span>Cart</span>
        </div>

        {cart.cartItems.length > 0 ? (
          <>
            <div>
            {
              cart.cartItems.map((item, key) => (
                <div className="flex items-center py-4 mx-2 border-b-2" key={key}>
                  <div className="w-1/4 flex justify-center text-sm">
                    <img src={item.image} alt={`Product-${item.sku}`} className="w-10 h-10 object-contain" />
                  </div>
                  <div className="w-1/4 flex justify-center text-sm capitalize">
                    {item.sku}
                  </div>
                  <div className="w-1/4 flex justify-center text-sm">
                    {
                      item.options ? item.options.reduce((a, c) => a + c.qty, 0) : 0
                    }
                  </div>
                  <div className="w-1/4 flex justify-center">
                    Total ${item.options ? item.options.reduce((a, c) => a + (c.qty * c.price), 0) : 0}
                  </div>
                </div>
              ))
            }  
            </div>
            <div className="py-4 text-center">
              Total ({cartItemsCount}): ${cartItemsTotal}
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
  )}
        