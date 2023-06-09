import Layout from "@/components/Layout"
import Link from "next/link"
import { ChevronRightIcon } from '@heroicons/react/24/solid'

export default function Index(){
	
	return (
		<Layout>
			<div className="p-4">
				<div className="flex justify-between items-center">
					<div>
						<span className="font-bold text-2xl">Categories</span><br />
						<small>Select a category to select products</small>
					</div>
					<div>
						<Link href="/orders" legacyBehavior>
							<a className="btn">Back</a>
						</Link>
					</div>
				</div>
				<div className="mt-4 flex gap-2">
					<Link href="/products" legacyBehavior>
						<a className="shadow transition p-4 w-1/2 flex justify-between items-center  gap-2 hover:bg-slate-200 md:w-1/3">
							<span className="font-bold text-xl">Bottoms</span>
							<ChevronRightIcon className="h-6 w-6"/>
						</a>
					</Link>
					<Link href="/products" legacyBehavior>
						<a className="shadow transition p-4 w-1/2 flex justify-between items-center  gap-2 hover:bg-slate-200 md:w-1/3">
							<span className="font-bold text-xl">Tops</span>
							<ChevronRightIcon className="h-6 w-6"/>
						</a>
					</Link>
				</div>
			</div>
		</Layout>
		)
	}
	
	