import Layout from "@/components/Layout"
import { ProductItem } from "@/components/ProductItem"
import ProductItemSkeleton from "@/components/skeletons/ProductItemSkeleton"
import { data } from "@/utils/data"
import Link from "next/link"

export default function Index({allProducts, setAllProducts}){


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
          {!data ? <ProductItemSkeleton /> :
            data.map((product, key) => (<ProductItem product={product} key={key}/>))
          }
        </div>
      </div>
    </Layout>
    )
  }
  
  