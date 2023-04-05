import {createPool} from 'mysql2/promise'

const pool = createPool({
  host: 'localhost',
  user: 'root',
  password: 'admin123',
  port: 33060,
  database: 'innergy_wholsales'
})

export { pool }