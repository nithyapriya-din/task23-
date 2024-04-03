import { useNavigate } from "react-router-dom"


function StudentCard({student,StudentData,setData,crumState,setCrumState}) {

  const navigate = useNavigate()
  
  const removeStud = (id)=>{
    
    let response = window.confirm("Are you sure want to delete?");
    if(response){
        const newStudData = StudentData.filter((stud,ind)=>stud.id !== id)
        setData(newStudData)
    }
    
  }
  const handleEdit =(id)=>{
    const newCrum = {
        name:"EditStudents",
        path: `/EditStudents/${id}`
    }
    setCrumState([...crumState,newCrum])
    navigate(`/EditStudents/${id}`)
  }
  return (
    <div>
        <div className="card w-48 bg-base-100 shadow-xl mx-3 mt-3">
            <div className="card-body items-center">
                <h2 className="card-title text-white">{student.name}</h2>
                <p className="text-left">{student.batch}</p>
                <p className="text-left">{student.education}</p>
                <div className="card-actions justify-end">
                    <button className="btn bg-red-800 text-white mt-3"
                    onClick={()=>handleEdit(student.id)}
                    >edit</button>
                    
                </div>
                <div>
                    <button className="btn bg-red-800 text-white mt-3"
                    onClick={()=>removeStud(student.id)}
                    >Delete</button>
                </div>
            </div>
        </div>
    </div>
  )
}

export default StudentCard