import Layout from "@/components/Layout"
import Link from "next/link"

export default function Login() {
	
	const data = {
		email: "",
		password: "",
		storeName: "",
		address: "",
		city: "",
		state: "",
		Zip: "",
		buyerName: "",
		phone: "",
		shipTo: "",
		fax: ""
	}
	
	return(
		<Layout>
			<div className="flex justify-center items-center min-h-screen">
				<div className="shadow">

					<div className="flex justify-center m-4">
						<img src="/logo-black.png" className="w-28" />
          </div>
					
					<div className="m-4">
						<span className="font-bold text-lg">Register</span>
						<p><small>Register your business for wholesale ordering</small></p>
					</div>
				
					<form action="#" className="max-w-3xl w-full flex flex-wrap">
						<div className="w-1/2 p-4">
							<label htmlFor="">Email</label>
							<input type="email" placeholder="Enter Email" />
						</div>
						
						<div className="w-1/2 p-4">
							<label htmlFor="" className="required">Password</label>
							<input type="password" placeholder="Enter Password" required />
						</div>
						
						<div className="divider mx-4"></div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Store Name</label>
							<input type="text" placeholder="Enter Store Name" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Address</label>
							<input type="text" placeholder="Enter Address" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">City</label>
							<input type="text" placeholder="Enter City" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">State</label>
							<input type="text" placeholder="Enter State" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Zip</label>
							<input type="text" placeholder="Enter Zip" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">City</label>
							<input type="text" placeholder="Enter City" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Buyer Name</label>
							<input type="text" placeholder="Enter Buyer Name" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Phone</label>
							<input type="tel" placeholder="Enter Phone" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Fax</label>
							<input type="text" placeholder="Enter Fax" />
						</div>
						
						<div className="w-1/2 px-4 pt-4">
							<label htmlFor="">Ship To</label>
							<input type="text" placeholder="Enter Ship To" />
						</div>
						
						<div className="p-4 flex justify-end w-full gap-2">
							<Link href="/user/login" legacyBehavior>
								<a className="btn">Cancel</a>
							</Link>
							<button >Register</button>
						</div>
					</form>
				</div>
			</div>
		</Layout>
		
	)
}