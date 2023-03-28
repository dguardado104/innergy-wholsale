import { Store } from "@/utils/Store"
import { useContext } from "react"

export const ProductItem = ({product}) => {

  // inicializar el estado

  const {state, dispatch} = useContext(Store)


  // funcion para garegar al carrito

  const addToCartHandler = e => {
    const {name} = e.target
    const existItem = state.cart.cartItems.find(x => x.sku === product.sku)
    const quantity = existItem ? existItem.quantity + 1 : 1

    
    if(product.quantity[name] < quantity){
      console.log('Sorry, product is out of stock')
      return
    }

    dispatch({type: 'PRODUCT_ADD_ITEM', payload: {...product, quantity} })

  }


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
        <div>
          <label htmlFor="">XS</label>
          <input type="number" step="1" onChange={addToCartHandler} name="xs" />
        </div>
        <div>
          <label htmlFor="">S</label>
          <input type="number" step="1" onChange={addToCartHandler} name="s" />
        </div>
        <div>
          <label htmlFor="">M</label>
          <input type="number" step="1" onChange={addToCartHandler} name="m" />
        </div>
        <div>
          <label htmlFor="">L</label>
          <input type="number" step="1" onChange={addToCartHandler} name="l" />
        </div>
        <div>
          <label htmlFor="">XL</label>
          <input type="number" step="1" onChange={addToCartHandler} name="xl" />
        </div>
        <div>
          <label htmlFor="">2XL</label>
          <input type="number" step="1" onChange={addToCartHandler} name="xxl" />
        </div>
      </form>
      <div className="w-full md:w-1/3 flex justify-between mt-4 text-center">
        <div>
          <span>Unit price</span><br />
          <span className="font-bold">${product.unitPrice.toFixed(2)}</span>
        </div>
        <div>
          <span>Quantity</span><br />
          <span className="font-bold">{state.cart.cartItems.reduce((a, c) => a + c.quantity, 0)}</span>
        </div>
        <div>
          <span>Total</span><br />
          <span className="font-bold">${state.cart.cartItems.reduce((a, c) => a + c.quantity * c.unitPrice, 0)}</span>
        </div>
      </div>
    </div>
    )
  }
  