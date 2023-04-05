
import { ArrowRightOnRectangleIcon } from '@heroicons/react/24/solid'
import { useState } from 'react'
import { ToastContainer, toast } from 'react-toastify';
import { useRouter } from 'next/router'

export default function MenuUser(){
  const [active, setActive] = useState(false)
  const route = useRouter()

  const handleLogout = () => { 
    
  }

  return(
    <div>
      <ToastContainer />
      <span onClick={() => setActive(!active)} className="font-bold relative cursor-pointer">prueba</span>
      <div className={`shadow bg-white w-1/4 absolute right-4 ${active ? '' : 'hidden'}`} onClick={handleLogout}>
        <div className='py-4 flex gap-2 pl-4 cursor-pointer hover:bg-slate-50'>
          <div>
            <ArrowRightOnRectangleIcon className='w-6 h-6'/> 
          </div>
          <span>Log out</span>
        </div>
      </div>

    </div>
  )
}