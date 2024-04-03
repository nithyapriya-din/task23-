import { useNavigate } from "react-router-dom";

export default function LeftSideBar() {
  const navigate = useNavigate()
  return (
    <div>
      <div>
        <ul>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent"
            onClick={()=>navigate("/")}
            >
              Dashborad
            </button>
          </li>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent"
            onClick={()=>navigate("/profile")}
            >
              profile
            </button>
          </li>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent"
            onClick={()=>navigate("/student/all")}
            >
              studentlist
            </button>
          </li>
          <li>
            <button className="btn my-5 w-full border-none hover:bg-gray-700 bg-transparent"
            onClick={()=>navigate("/interview/notes")}
            >
              interview notes
            </button>
          </li>
        </ul>
      </div>
      <div>
        <ul>
          <li>
            <button className="btn border-none absolute inset-x-0 bottom-5 hover:bg-gray-700 bg-transparent">
              Logout
            </button>
          </li>
        </ul>
      </div>
      <div></div>
    </div>
  );
}
