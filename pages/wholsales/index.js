import axios from "axios"
/*

Consumer Key
xw9fnrmo8n1mmdtgwfansa9botbauo18
Consumer Secret
8zrtbbronhp98h9rbnvj2b9xxslb1732
Access Token
sa6hd5nz771g2awaebw5ns182nzr9bi3
Access Token Secret
vdjdc8rg4yg6zh8bwzuaxti2afspv4v4


*/

const index = () => {


    const getCategories = () => { 
        axios({
            method: 'post',
            url: 'https://test3.innergyapparel.com/rest/default/V1/products',
            responseType: 'text/json',
            timeout: 1000,
            headers: {
                'authorization': 'Bearer sa6hd5nz771g2awaebw5ns182nzr9bi3', 
                withCredentials: true,
            },
            auth: {
                username: 'admin',
                password: 'Linux902019@'
            }
          })
            .then(function (response) {
              console.log(JSON.stringify(response.data));
            })
            .catch(function(err) {
                console.log(err.message);
            })
    }


    


  return (
    <div>
        
        <div className="m-4">


        <select className="w-full p-2 rounded border-solid border-2 border-slate-500">
            <option value="">Bottoms</option>
            <option value="">Top</option>
            <option value="">Sport Bras</option>
        </select>



        <div>
            
            
            <div>
            
                <div className="flex flex-col md:flex-row md:justify-evenly md:items-center my-2 py-2 bg-slate-200 rounded gap-2">
                    <div className="flex items-center flex-col md:1/4">
                        <img src="img\0010_Model-Dark_Innergy_Fall1-2022-Solid_Co-Black6C_Design-Template-v210221-leg2_Back.jpg" alt="product-image" className="w-32 h-32 object-contain" />
                        
                        <b>TWIST</b>
                        <small className="font-normal">SKU: TWIST-BLACK</small>
                    </div>
                    <div className="ml-2 md:w-2/4">
                        <b>Size</b><br/>
                    
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <div>
                                        XS
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0" />
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        S
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0" />
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        M
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        L
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        2XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div className="flex justify-evenly md:justify-between md:w-1/4">
                        <div>
                            <span>Unit price</span><br/>
                            <b>$40.00</b>
                        </div>
    
                        <div>
                            <span>Quantity</span><br/>
                            <b>1</b>
                        </div>
                        <div>
                            <span>Total</span><br/>
                            <b>$40.00</b>
                        </div>
                    </div>

                   

                </div>

            </div>

            <div>
            
                <div className="flex flex-col md:flex-row md:justify-evenly md:items-center my-2 py-2 bg-slate-200 rounded gap-2">
                    <div className="flex items-center flex-col md:1/4">
                        <img src="/img/0010_Model_Innergy_Fall1-2022-Solid_Co-Avocado_Design-Template-v210221-leg2_Front.jpg" alt="product-image" className="w-32 h-32 object-contain" />
                        
                        <b>TWIST</b>
                        <small className="font-normal">SKU: TWIST-AVOCADO</small>
                    </div>
                    <div className="ml-2 md:w-2/4">
                        <b>Size</b><br/>
                    
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <div>
                                        XS
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        S
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        M
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        L
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        2XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div className="flex justify-evenly md:justify-between md:w-1/4">
                        <div>
                            <span>Unit price</span><br/>
                            <b>$40.00</b>
                        </div>
    
                        <div>
                            <span>Quantity</span><br/>
                            <b>$40.00</b>
                        </div>
                        <div>
                            <span>Total</span><br/>
                            <b>$40.00</b>
                        </div>
                    </div>

                   

                </div>

            </div>

            <div>
            
                <div className="flex flex-col md:flex-row md:justify-evenly md:items-center my-2 py-2 bg-slate-200 rounded gap-2">
                    <div className="flex items-center flex-col md:1/4">
                        <img src="img\0010_Model-Dark_Innergy_Fall1-2022-MagicWakeup_Design-Template-v210221-leg2_Back.jpg" alt="product-image" className="w-32 h-32 object-contain" />
                        
                        <b>TWIST</b>
                        <small className="font-normal">SKU: TWIST-MAGICWAKEUP</small>
                    </div>
                    <div className="ml-2 md:w-2/4">
                        <b>Size</b><br/>
                    
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <div>
                                        XS
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        S
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        M
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        L
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        2XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div className="flex justify-evenly md:justify-between md:w-1/4">
                        <div>
                            <span>Unit price</span><br/>
                            <b>$40.00</b>
                        </div>
    
                        <div>
                            <span>Quantity</span><br/>
                            <b>$40.00</b>
                        </div>
                        <div>
                            <span>Total</span><br/>
                            <b>$40.00</b>
                        </div>
                    </div>

                   

                </div>

            </div>

            <div>
            
                <div className="flex flex-col md:flex-row md:justify-evenly md:items-center my-2 py-2 bg-slate-200 rounded gap-2">
                    <div className="flex items-center flex-col md:1/4">
                        <img src="img/0010_Model-Dark_Innergy_Fall1-2022-BorderSunset_Design-Template-v210221-leg2_Back.jpg" alt="product-image" className="w-32 h-32 object-contain" />
                        
                        <b>TWIST</b>
                        <small className="font-normal">SKU: TWIST-BORDERSUNSET</small>
                    </div>
                    <div className="ml-2 md:w-2/4">
                        <b>Size</b><br/>
                    
                            <div className="flex flex-wrap gap-2">
                                <div>
                                    <div>
                                        XS
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        S
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        M
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        L
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>

                                <div>
                                    <div>
                                        2XL
                                    </div>
                                    <div>
                                        <input type="number" min="0" value="0"/>
                                    </div>
                                </div>
                            </div>
                        
                    </div>

                    <div className="flex justify-evenly md:justify-between md:w-1/4">
                        <div>
                            <span>Unit price</span><br/>
                            <b>$40.00</b>
                        </div>
    
                        <div>
                            <span>Quantity</span><br/>
                            <b>$40.00</b>
                        </div>
                        <div>
                            <span>Total</span><br/>
                            <b>$40.00</b>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </div>

    </div>
  )
}

export default index