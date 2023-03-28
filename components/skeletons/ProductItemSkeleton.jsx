export default function ProductItemSkeleton(){
  return (
    <>
      <div className="shadow p-2 flex flex-col mb-4 md:flex-row md:items-center gap-2 animate-pulse">
        <div className="w-full flex gap-2 md:w-3/4">
            <div className="bg-slate-100 h-32 w-1/4 md:w-1/4"></div>
            <div className="bg-slate-100 h-32 w-3/4 md:w-3/4"></div>
        </div>
        <div className="bg-slate-100 h-14 w-full md:w-1/4 "></div>
      </div>
      <div className="shadow p-2 flex flex-col mb-4 md:flex-row md:items-center gap-2 animate-pulse">
          <div className="w-full flex gap-2 md:w-3/4">
              <div className="bg-slate-100 h-32 w-1/4 md:w-1/4"></div>
              <div className="bg-slate-100 h-32 w-3/4 md:w-3/4"></div>
          </div>
          <div className="bg-slate-100 h-14 w-full md:w-1/4 "></div>
      </div>
    </>
  )
}
