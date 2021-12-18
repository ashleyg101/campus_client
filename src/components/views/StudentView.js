import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles( () => ({
  image:{  
    width: '300px',
    height: '300px'
  },
  root: {
    flexGrow: 1,
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    fontType: 'bold',
    fontFamily: 'Courier, sans-serif', 
    fontSize: '35px', 
    color: '#CDDC39'
  },
  appBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  greeting:{
    display: 'flex',
    justifyContent: 'center',
    backgroundColor: 'white',
    width: "50%",
    margin: "auto",
  },
  links:{
    textDecoration: 'none',
  }
}));
const StudentView = (props) => {
  const { student, deleteStudent } = props;
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            StudentFinder
          </Typography>

          <Link className={classes.links} to={'/campuses'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Campuses
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              All Students
            </Button>
          </Link>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="primary">
              Home
            </Button>
          </Link>

        </Toolbar>
      </AppBar>
      
      <div className={classes.greeting}><h1>Home Page</h1></div>

      <h1>{student.firstname + " " + student.lastname}</h1>
      <img src={student.imageUrl} alt="Student profile" className={classes.image}/>
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
      <Link to={`/editstudent/` + student.id}>
      <button>Edit Student</button>
      </Link>
      <br/>
      <Link to={`/students`}>
      <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
      </Link>
    </div>
  );
};

export default StudentView;