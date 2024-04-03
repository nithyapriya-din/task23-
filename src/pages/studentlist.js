import BasePage from "../basepage/basepage";
import CrumBar from "../components/CrumBar";
import StudentCard from "../components/StudentCard";

export default function StudentList({StudentData,setData,crumState,setCrumState}){
    return(
        <BasePage>
        <CrumBar
            crumState={crumState}
            setCrumState={setCrumState}
        />
            {StudentData.map((stud,ind)=>(
                <StudentCard
                    student={stud}
                    StudentData={StudentData}
                    setData={setData}
                    key={stud.id}
                    crumState={crumState}
                    setCrumState={setCrumState}
                />
            ))}
        </BasePage>
    )
}