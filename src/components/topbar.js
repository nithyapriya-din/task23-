export default function TopBar(){
    return(
        <div className="navbar bg-base-300 rounded-box">
            <div className="flex-1">
                <a className="btn btn-ghost normal-case text-xl">LOGO</a>
            </div>
            <div className="flex-none gap-2">
                <div className="form-control">
                    <input type="text" placeholder="Search" className="input input-bordered w-24 md:w-auto" />
                </div>
            </div>
        </div>
    )
}