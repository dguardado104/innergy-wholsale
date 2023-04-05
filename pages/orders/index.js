import Badget from "@/components/Badget"
import Layout from "@/components/Layout"
import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/24/solid'


export default function Index({data}){

    

  return (
    <Layout>
        <div className="p-4">
            <div className="flex justify-between">
                <span className="font-bold text-2xl">Orders</span>
                <Link href="/categories" legacyBehavior>
                    <a className="btn">New wholsale</a>
                </Link>
            </div>
            

            <div className="mt-4">
                {data.orders && data.orders.lenght > 0 ? (
                    <Link href="#" legacyBehavior>
                    <a className="border-b-2 p-4 w-full flex justify-between items-center gap-2 hover:bg-slate-200 ">
                        <span>Order N° 0001</span>
                        <small>October 13, 2014 11:13</small>
                        <Badget status="completed" />
                        <ChevronRightIcon className="h-6 w-6"/>
                    </a>
                </Link>
                ) : ''
                }
                
            
            </div>
        </div>

    </Layout>
  )
}

export async function getServerSideProps() {
    
    const res = await fetch(`http://localhost:3000/api/orders`)
    const data = await res.json()

    // Pass data to the page via props
    return { props: { data } }
  }