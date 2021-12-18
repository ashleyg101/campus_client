import { Link } from "react-router-dom";

import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  image:{  
    width: '500px',
    height: '400px'
  }
  
}));
const CampusView = (props) => {
  const {campus, deleteCampus, deleteStudent} = props;
  const classes = useStyles();

  if (!campus.students.length) {
    return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Campus" className={classes.image}/>
      <h3>{campus.description}</h3>
      <p>{campus.address}</p>
      <p>There are no students at this campus.</p>
      <br/>
      <Link to={`/editcampus/` + campus.id}>
      <button>Edit Campus</button>
      </Link>
      <br/>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campuses`}><button>Back to All Campuses</button></Link>
      <br/>
      <Link to={`/`}><button>Back to Home</button></Link>
    </div>
    )
  }
  return (
    <div>      
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
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete Campus</button>
      </Link>
      <br/>
      <br/>
      <Link to={`/campuses`}><button>Back to All Campuses</button></Link>
      <br/>
      <Link to={`/`}><button>Back to Home</button></Link>
    </div>
  );

};

export default CampusView;