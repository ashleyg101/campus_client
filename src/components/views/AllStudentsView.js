import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  image:{  
    width: '100px',
    height: '100px'
  }
}));

const AllStudentsView = (props) => {
  const {students, deleteStudent} = props;
  const classes = useStyles();

  if (!students.length) {
    return (
    <div>
      <p>There are no students.</p>
      <Link to={`newstudent`}>
        <button>Add New Student</button>
      </Link>
      <br/>
      <Link to={`/`}><button>Back to Home</button></Link>
    </div>
    );
  }
  
  return (
    <div>
      <h1>ALL STUDENTS</h1>
      {students.map((student) => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div key={student.id}>
          <Link to={`/student/${student.id}`}>
            <h1>{name}</h1>
          </Link>
          <img src={student.imageUrl} alt="Student profile" className={classes.image}/>
          <button onClick={() => deleteStudent(student.id)}> X </button>
          </div>
        );
      }
      )}
      <Link to={`/newstudent`}>
        <button>Add New Student</button>
      </Link>
      <br/>
      <br/>
      <Link to={`/`}><button>Back to Home</button></Link>
    </div>
  );
};


export default AllStudentsView;