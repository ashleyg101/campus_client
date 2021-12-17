import { Link } from "react-router-dom";
import { deleteStudent, fetchCampus } from "../../store/actions/actionCreators";
const StudentView = (props) => {
  const { student, deleteStudent } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="Student"/>
      <br></br>
      <p>{student.email}</p>
      <p>GPA: {student.gpa}</p>
      {student.campus != null &&
      <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
      </Link>
      }
      {student.campus === null &&
      <h3>Student is not Enrolled in a Campus</h3>
      }

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