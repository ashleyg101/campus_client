import { Link } from "react-router-dom";

const CampusView = (props) => {
  const {campus} = props;
  return (
    <div>      
      <h1>{campus.name}</h1>
      <p>{campus.description}</p>
      <ul>
      {campus.students.map( student => {
        let name = student.firstname + " " + student.lastname;
        return (
          <li key={student.id}>
          <Link to={`/student/${student.id}`}>
          {name}
          </Link></li>
        );
      })}
      </ul>
    </div>
  );

};

export default CampusView;