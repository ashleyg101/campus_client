import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  image:{  
    width: '100px',
    height: '100px'
  }
}));

const AllCampusesView = (props) => {
  const {deleteCampus} = props;
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return (
    <div>
      <h3>There are no campuses.</h3>
    <Link to={`/newcampus`}>
      <button>Add New Campus</button>
    </Link>
    <br/>
    <Link to={`/`}><button>Back to Home</button></Link>
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
          <img src={campus.imageUrl} alt="Campus" className={classes.image}/>
          <h3>{campus.description}</h3>
          <p>{campus.address}</p>
          <button onClick={() => deleteCampus(campus.id)}>X</button>
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