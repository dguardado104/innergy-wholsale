import Layout from "@/components/Layout"
import axios from 'axios'
import { useState, useContext } from "react"
import { ToastContainer, toast } from 'react-toastify'
import { useRouter } from 'next/router'
import Link from "next/link"
import { Auth } from '@/utils/Auth'

export default function Login() {

  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")

  const router = useRouter()

  const {state, dispatch} = useContext(Auth)

  async function handleSubmit(event) {
    event.preventDefault()

    try {
      const response = await axios.post('/api/user/login', {
        email,
        password,
      })

      if (response.data.status) {
        toast.success(response.data.message)
        dispatch({type: 'USER_LOG_IN', payload: response.data.data })
        localStorage.setItem("innergy_ws", response.data.data.id)
        router.push('/orders')
      } else {
        toast.error(response.data.message)
      }
    } catch (error) {
      console.error(error);
      toast.error('An error occurred while trying to log in. Please try again later.')
    }
  }

  return (
    <Layout>
      <ToastContainer />
      <div className="flex justify-center items-center min-h-screen">
        <form onSubmit={handleSubmit} className="max-w-xs w-full m-4 p-4 flex flex-col gap-4 shadow">
          <div className="flex justify-center">
            <img src="/logo-black.png" alt="Innergy" className="w-28" />
          </div>
          <div>
            <span className="font-bold text-lg">Log in</span>
          </div>
          <div>
            <input type="email" placeholder="Enter Email" value={email} onChange={(e) => setEmail(e.target.value)} required  />
          </div>
          <div>
            <input type="password" placeholder="Enter Password" value={password} onChange={(e) => setPassword(e.target.value)} required  />
          </div>
          <div className="flex gap-1 flex-col text-center">
            <button type="submit">Login</button>
            <div className="divider my-4"></div>
            <Link href="/user/register" legacyBehavior>
              <a className="btn">
                Register
              </a>
            </Link>
          </div>
        </form>
      </div>
    </Layout>
  )
}
