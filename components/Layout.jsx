import Header from "./Header";

export default function Layout({children}){
  return (
    <div className="flex justify-center bg-slate-50 min-h-screen">
      <div className="max-w-5xl w-full bg-white">
        <Header />
        <div>
            {children}
        </div>
      </div>
    </div>
  )
}
