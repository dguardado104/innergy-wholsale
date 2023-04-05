import { pool } from '../../../config/db'

export default async function Handler(req,res) {
  switch(req.method){
    
    case 'POST':
      const {email, password} = req.body
      const [result] = await pool.query('SELECT * FROM users WHERE email = ? AND password = ?',[email, password])

      if(result.length > 0){
        await pool.query('UPDATE users SET isActive = 1 WHERE id= ?',result[0].id)
        
        res.status(200).json({ status: true, message: `Wellcome, ${result[0].buyerName}`, data: result[0] })

      }else{
        res.status(200).json({ status: false, message: 'Incorrect email or password'})
      }
      return
  }

  
}