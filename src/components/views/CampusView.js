import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus, deleteCampus, deleteStudent} = props;
  
  if (!campus.students.length) {
    return (
    <div>
      <h1>{campus.name}</h1>
      <img src={campus.imageUrl} alt="Campus"/>
      <p>{campus.description}</p>
      <h3>There are no students at this campus.</h3>
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
      <img src={campus.imageUrl} alt="Campus"/>
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