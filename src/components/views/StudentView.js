import { Link } from "react-router-dom";
import { deleteStudent, fetchCampus } from "../../store/actions/actionCreators";
const StudentView = (props) => {
  const { student, deleteStudent } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {/* <h3>{student.campus.name}</h3> */}
      <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
      </Link>
      <br/>
      <br/>
      <Link to={`/students`}>
      <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </Link>
      <br/>
      <Link to={`/students`}><button>Back to All Students</button></Link>
      <br/>
      <Link to={`/`}><button>Back to Home</button></Link>
    </div>
  );
};

export default StudentView;