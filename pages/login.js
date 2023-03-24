import Link from "next/link"

export default function Login() {

    return (
        <div className="flex justify-center items-center min-h-screen">
            <div className="max-w-xs w-full m-4 p-4 flex flex-col gap-4">

                <div className="flex justify-center">
                    <img src="https://test3.innergyapparel.com/media/wysiwyg/logo-black.png" alt="Innergy" className="w-28" />
                </div>
                
                <div>
                    <span className="font-bold text-lg">Log in</span>
                </div>

                <div>
                    <input type="email" placeholder="Enter Email" />
                </div>
            
                <div>
                    <input type="password" placeholder="Enter Password" />
                </div>

                <div>
                    <Link href="/orders" legacyBehavior>
                        <a className="btn w-full">Login</a>
                    </Link>
                </div>
            
            </div>
        </div>
    )
}
    