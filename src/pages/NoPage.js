import { useNavigate } from "react-router-dom"

export default function NoPage() {
    const navigate = useNavigate()
  return (
    <div className="grid place-items-center my-48">
        <h1>Sorry ! You entered a Wrong Universe</h1>
        <button className="btn btn-error text-black my-10"
            onClick={()=>navigate("/")}
        >Home</button>
    </div>
  )
}
