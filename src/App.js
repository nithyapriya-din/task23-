// import logo from './logo.svg';
import "./App.css";
import BasePage from "./basepage/basepage";
import { Routes, Route } from "react-router-dom";
import StudentList from "./pages/studentlist";
import StudentCard from "./components/StudentCard";
import { useState } from "react";
import DashBoard from "./pages/DashBoard";
import Profile from "./pages/Profile";
import InterviewNotes from "./pages/InterviewNotes";
import AddStudents from "./components/AddStudents";
import EditStudents from "./components/EditStudents";
import NoPage from "./pages/NoPage";





function App() {

  //students data

  const StudentData = [
    {
      id: 1,
      name: "shyam",
      batch: "b47wd",
      education: "B.E"
    },
    {
      id: 2,
      name: "sudha",
      batch: "b47we",
      education: "B.com"
    }
  ]

  const pages = [
    {
      name: "student",
      path: "/student/all"
    }
  ]

  const [crumState,setCrumState]  = useState(pages)
  const [Data, setData] = useState(StudentData)
  return (
    <div className="App">

      <Routes>
        <Route exact path="/" element={<DashBoard />} />
        <Route path="/AddStudents" element=
          {
            <AddStudents
              StudentData={Data}
              setData={setData}
            />
          }
        />
        <Route path="/EditStudents/:id" element=
          {
            <EditStudents
              StudentData={Data}
              setData={setData}
              crumState={crumState}
              setCrumState={setCrumState}
            />
          }
        />
        <Route path="/profile" element={<Profile />} />
        <Route path="/student/all" element=
          {
            <StudentList
              crumState={crumState}
              setCrumState={setCrumState}
              StudentData={Data}
              setData={setData}
            />
          }
        />
        <Route path="/interview/notes" element={<InterviewNotes />} />
        <Route path="*" element={<NoPage/>}/>
      </Routes>


    </div>
  );
}

export default App;
