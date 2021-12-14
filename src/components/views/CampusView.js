import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus, deleteCampus} = props;
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
      <button onClick={() => deleteCampus(campus.id)}>Delete</button>
    </div>
  );

};

export default CampusView;