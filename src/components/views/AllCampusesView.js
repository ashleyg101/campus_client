import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const AllCampusesView = (props) => {
  const {campus, deleteCampus} = props;
  if (!props.allCampuses.length) {
    return (
    <div>
      <h1>There are no campuses.</h1>
    <Link to={`/newcampus`}>
      <button>Add New Campus</button>
    </Link>
    </div>
    )
  }

  return (
    <div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <p>{campus.description}</p>
          <p>{campus.address}</p>
          <button onClick={() => deleteCampus(campus.id)}>Delete</button>
        </div>
      ))}
      <Link to={`/newcampus`}>
        <button>Add New Campus</button>
      </Link>
      <br/>
      <br/>
      <Link to={`/`}><button>Back to Home</button></Link>
    </div>
  );
};

AllCampusesView.propTypes = {
  allCampuses: PropTypes.array.isRequired,
};

export default AllCampusesView;