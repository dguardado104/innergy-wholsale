import { pool } from '../../../config/db'

export default async function Handler(req,res) {
  switch(req.method){
    
    case 'POST':
      const {id} = req.body

      const [result] = await pool.query('SELECT * FROM users WHERE id = ?',id)

      if(result.length > 0){
        
        res.status(200).json({ status: true, data: result[0] })

      }else{
        res.status(200).json({ status: false})
      }
      return
  }

  
}