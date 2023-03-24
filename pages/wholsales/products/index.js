import Layout from "@/components/Layout"
import Link from "next/link"

export default function index(){


  return (
    <Layout>

        <div className="p-4">
            <div className="flex justify-between items-center">
                <div>
                    <span className="font-bold text-2xl">Products</span><br />
                    <small>Configure your product by design, color and size</small>
                </div>

                <div>
                    <Link href="/wholsales" legacyBehavior>
                        <a className="btn">Back</a>
                    </Link>
                </div>

            </div>
            

            <div className="mt-4">
                
            </div>
        </div>

    </Layout>
  )
}

