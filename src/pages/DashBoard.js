import BasePage from "../basepage/basepage"
import {useNavigate } from "react-router-dom"

function DashBoard() {

  const navigate = useNavigate()
  return (
    <BasePage>
      <div className="text-center">
        <h1 className=" m-5">Welcome to Student All</h1>
        <button className="btn btn-primary"
          onClick={() => navigate("/AddStudents")}
        >Add More Students</button>
      </div>
    </BasePage>

  )
}

export default DashBoard