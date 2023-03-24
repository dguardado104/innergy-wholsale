export default function Header(){
    return (
        <div className="flex justify-between items-center p-4 shadow">
            <div>
                <img src="https://test3.innergyapparel.com/media/wysiwyg/logo-black.png" alt="Innergy" className="w-28" />
            </div>
            <div className="flex items-center gap-2">
                <div>
                    <span className="font-bold">John Doe</span>
                </div>
                <div>
                    <button>Cart 0</button>
                </div>
            </div>
        </div>
    )
  }
  