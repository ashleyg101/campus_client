import { Link } from "react-router-dom";
import { deleteStudent, fetchCampus } from "../../store/actions/actionCreators";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  image:{  
    width: '500px',
    height: '400px'
  }
  
}));
const StudentView = (props) => {
  const { student, deleteStudent } = props;
  const classes = useStyles();
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="Student profile image" className={classes.image}/>
      <br></br>
      <p>{student.email}</p>
      <p>GPA: {student.gpa}</p>
      {student.campus != null &&
      <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
      </Link>
      }
      {student.campus === null &&
      <p>Student is not Enrolled in a Campus</p>
      }

      <br/>
      <br/>
      <Link to={`/editstudent` + `/` + student.id}>
      <button>Edit Student</button>
      </Link>
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