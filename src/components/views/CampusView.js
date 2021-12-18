import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  image:{  
    width: '500px',
    height: '400px'
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
const CampusView = (props) => {
  const {campus, deleteCampus, deleteStudent} = props;
  const classes = useStyles();

  if (!campus.students.length) {
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
      
      <div className={classes.greeting}><h1>{campus.name}</h1></div>
      <img src={campus.imageUrl} alt="Campus" className={classes.image}/>
      <h3>{campus.description}</h3>
      <p>{campus.address}</p>
      <p>There are no students at this campus.</p>
      <br/>
      <Link to={`/editcampus/` + campus.id}>
      <button>Edit Campus</button>
      </Link>
      <br/>
      <Link to={`/newstudent/`}>
        <button>Add Student</button>
      </Link>
      <br/>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </Link>
      <br/>
   </div>
    )
  }
  return (
    <div>      
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

      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Campus" className={classes.image}/>
      <p>{campus.description}</p>
      <p>{campus.address}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div>
          <li key={student.id}>
          <Link to={`/student/${student.id}`}>
          {name}
          </Link>
          <br/>
          <Link to={`/students`}>
          <button onClick={() => deleteStudent(student.id)}>Delete Student</button>
          </Link>
          </li>
          </div>
        );
      })}
      </ul>
      <Link to={`/editcampus/` + campus.id}>
        <button>Edit Campus</button>
      </Link>
      <br/>
      <Link to={`/newstudent/`}>
        <button>Add Student</button>
      </Link>
      <br/>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </Link>
      <br/>
   </div>
  );

};

export default CampusView;