import { Link } from "react-router-dom";
import { fetchCampus } from "../../store/actions/actionCreators";
const StudentView = (props) => {
  const { student } = props;
  return (
    <div>
      <h1>{student.firstname + " " + student.lastname}</h1>
      {/* <h3>{student.campus.name}</h3> */}
      <Link to={`/campus/${student.campus.id}`}>
        {student.campus.name}
      </Link>
    </div>
  );
};

export default StudentView;