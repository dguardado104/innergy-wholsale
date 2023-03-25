import Layout from "@/components/Layout"
import ProductItem from "@/components/ProductItem"
import Link from "next/link"

export default function index(){


    const data = [
        {
            productName: "Twist",
            sku: "Twist-Black",
            image: "/img/0010_Model-Dark_Innergy_Fall1-2022-Solid_Co-Black6C_Design-Template-v210221-leg2_Back.jpg",
            unitPrice: 20.50,
            quantity: {
                xs: 200,
                s: 200,
                m: 200,
                l: 200,
                xl: 200,
                xxl: 200
            }
        },
        {
            productName: "Twist",
            sku: "Twist-Avocado",
            image: "/img/0010_Model_Innergy_Fall1-2022-Solid_Co-Avocado_Design-Template-v210221-leg2_Front.jpg",
            unitPrice: 25.50,
            quantity: {
                xs: 200,
                s: 200,
                m: 200,
                l: 200,
                xl: 200,
                xxl: 200
            }
        },
        {
            productName: "Twist",
            sku: "Twist-MAGICWAKEUP",
            image: "/img/0010_Model-Dark_Innergy_Fall1-2022-MagicWakeup_Design-Template-v210221-leg2_Back.jpg",
            unitPrice: 30.50,
            quantity: {
                xs: 200,
                s: 200,
                m: 200,
                l: 200,
                xl: 200,
                xxl: 200
            }
        },
        {
            productName: "Twist",
            sku: "Twist-BORDERSUNSET",
            image: "/img/0010_Model-Dark_Innergy_Fall1-2022-BorderSunset_Design-Template-v210221-leg2_Back.jpg",
            unitPrice: 45.50,
            quantity: {
                xs: 200,
                s: 200,
                m: 200,
                l: 200,
                xl: 200,
                xxl: 200
            }
        }
    ]


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
                {
                    data.map((product, key) => (
                        <ProductItem product={product} key={key} />
                    ))
                }
            </div>
        </div>

    </Layout>
  )
}

