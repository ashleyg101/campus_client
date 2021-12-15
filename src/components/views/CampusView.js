import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus, deleteCampus} = props;
  
  if (!campus.students.length) {
    return (
    <div>
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <h3>There are no students at this campus.</h3>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete</button>
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
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <div>
          <li key={student.id}>
          <Link to={`/student/${student.id}`}>
          {name}
          </Link>
          </li>
          </div>
        );
      })}
      </ul>
      <Link to={`/campuses`}>
      <button onClick={() => deleteCampus(campus.id)}>Delete</button>
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