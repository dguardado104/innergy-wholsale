import { useState, useEffect } from "react"
export default function ProductItem(props){

    const [quantity, setQuantity ] = useState(0)
    const [total, setTotal ] = useState(0)
    const [unitPrice, setUnitPrice] = useState(10)
    const [form, setForm] = useState({
        xs: "",
        s: "",
        m: "",
        l: "",
        xl: "",
        xxl: ""
    })

    const handleInput = e => {
        const { name, value } = e.target
        
        e.target.value = Math.trunc(value)

        switch (name) {
            case "xs":
                if(e.target.value > props.product.quantity.xs){
                    e.target.value = props.product.quantity.xs 
                }
                break;
            case "s":
                if(e.target.value > props.product.quantity.s){
                    e.target.value = props.product.quantity.s  
                }
                break;
            case "m":
                if(e.target.value > props.product.quantity.m){
                    e.target.value = props.product.quantity.m  
                }
                break;
            case "l":
                if(e.target.value > props.product.quantity.l){
                    e.target.value = props.product.quantity.l  
                }
                break;
            case "xl":
                if(e.target.value > props.product.quantity.xl){
                    e.target.value = props.product.quantity.xl  
                }
                break;
            case "xxl":
                if(e.target.value > props.product.quantity.xxl){
                    e.target.value = props.product.quantity.xxl  
                }
                break;
        }

        setForm({
          ...form,
          [name]: Math.trunc(e.target.value)
        })

    }

    
    useEffect(() => {

        setUnitPrice(props.product.unitPrice)

        setQuantity(Number(form.xs) + Number(form.s) + Number(form.m) + Number(form.l) + Number(form.xl) + Number(form.xxl))

        setTotal(quantity * unitPrice)

   }, [form, quantity, total])
    
    return(
        <div className="shadow p-2 flex flex-wrap items-center mb-4">
            <div className="w-1/4 md:w-1/3 text-center">
                <div className="flex justify-center">
                    <img src={props.product.image} className="w-32 h-32 object-contain" />
                </div>
                <div>
                    <span className="uppercase">{props.product.productName}</span><br />
                    <small className="uppercase">SKU: {props.product.sku}</small>
                </div>
            </div>
            <form className="flex flex-wrap gap-2 pl-2 w-3/4 md:w-1/3 sizes-block">
                <div>
                    <label htmlFor="">XS</label>
                    <input type="number" pattern="/d+" step="1" min={0} max={props.product.quantity.xs} name="xs" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">S</label>
                    <input type="number" pattern="/d+" step="1" min={0} max={props.product.quantity.s} name="s" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">M</label>
                    <input type="number" pattern="/d+" step="1" min={0} max={props.product.quantity.m} name="m" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">L</label>
                    <input type="number" pattern="/d+" step="1" min={0} max={props.product.quantity.l} name="l" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">XL</label>
                    <input type="number" pattern="/d+" step="1" min={0} max={props.product.quantity.xl} name="xl" onChange={handleInput} />
                </div>
                <div>
                    <label htmlFor="">2XL</label>
                    <input type="number" pattern="/d+" step="1" min={0} name="xxl" max={props.product.quantity.xxl} onChange={handleInput} />
                </div>
            </form>
            <div className="w-full md:w-1/3 flex justify-between mt-4 text-center">
                <div>
                    <span>Unit price</span><br />
                    <span className="font-bold">${unitPrice}</span>
                </div>
                <div>
                    <span>Quantity</span><br />
                    <span className="font-bold">{quantity}</span>
                </div>
                <div>
                    <span>Total</span><br />
                    <span className="font-bold">${total}</span>
                </div>
            </div>
        </div>
    )
}