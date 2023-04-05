import { pool } from '../../config/db'

export default async function Handler(req,res) {
  switch(req.method){
    
    case 'GET':
      const [result] = await pool.query('SELECT * FROM orders WHERE id_user = 1')

      if(result.length > 0){

        console.log(result);
       
        res.status(200).json({ status: true, orders: result })

      }else{
        res.status(200).json({ status: false, message: 'Incorrect email or password'})
      }
      return
  }

  
}