import { Store } from "@/utils/Store"
import { useContext, useState, useEffect } from "react"

export const ProductItem = ({product}) => {
  const [cartItem, setCartItem] = useState({})
  const [totalQuantity, setTotalQuantity] = useState(0)
  const [totalPrice, setTotalPrice] = useState(0)

  // inicializar el estado

  const {state, dispatch} = useContext(Store)


  // funcion para garegar al carrito

  const addToCartHandler = e => {
    const {name, value} = e.target

    if(value > product.options.find(x => x.size === name).qty){
      alert('The maximum quantity in stock has been reached!')
      return
    }

    const existItem = state.cart.cartItems.find(x => x.sku === product.sku)

    if(existItem){
      
      const existOption = existItem.options.find(x => x.size == name)

      if(existOption){

        existOption.qty = Number(value)

      }else{
        existItem.options.push({
          size: name,
          qty: Number(value),
          price: product.options.find(x => x.size === name).price
        })

      }

    }else{
      setCartItem({...product, options: 
        [
          {
            size: name,
            qty: Number(value),
            price: product.options.find(x => x.size === name).price
          }
        ]
      })
    }

    dispatch({type: 'PRODUCT_ADD_ITEM', payload: {...cartItem}})
    
  }

  useEffect(() => {

    const p = state.cart.cartItems.find(x => x.sku === product.sku)

    if(p){
      setTotalQuantity(p.options.reduce((a, c) => a + c.qty, 0))
      setTotalPrice(p.options.reduce((a, c) => a + (c.qty * c.price), 0))
    }


  }, [product, state])
  

  return (
    <div className="shadow p-2 flex flex-wrap items-center mb-4">
      <div className="w-1/4 md:w-1/3 text-center">
        <div className="flex justify-center">
          <img src={product.image} alt="product-image" className="w-32 h-32 object-contain" />
        </div>
      <div>
        <span className="uppercase">{product.productName}</span><br />
        <small className="uppercase">SKU: {product.sku}</small>
      </div>
      </div>
      <form className="flex flex-wrap gap-2 pl-2 w-3/4 md:w-1/3 sizes-block">
        {
          product.options.map((option, key) => (
            <div key={key}>
              <label htmlFor={option.size} className="font-bold uppercase">
                {option.size}
                <span className="font-normal ml-1 text-xs">${option.price.toFixed(2)}</span>
              </label>
              <input type="number" min={0} max={option.qty} step="1" onKeyUp={addToCartHandler} onChange={addToCartHandler} name={option.size} />
            </div>
          ))
        }
      </form>
      <div className="w-full md:w-1/3 flex justify-evenly mt-4 text-center">
        <div>
          <span>Total Quantity</span><br />
          <span className="font-bold">{totalQuantity}</span>
        </div>
        <div>
          <span>Total</span><br />
          <span className="font-bold">${totalPrice}</span>
        </div>
      </div>
    </div>
    )
  }
  