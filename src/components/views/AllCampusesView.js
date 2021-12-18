import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles( () => ({
  image:{  
    width: '100px',
    height: '100px'
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

const AllCampusesView = (props) => {
  const {deleteCampus} = props;
  const classes = useStyles();
  if (!props.allCampuses.length) {
    return (
      <div className={classes.root}>
      <AppBar position="static" elevation={0} className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" className={classes.title} color="inherit" >
            StudentFinder
          </Typography>

          <Link className={classes.links} to={'/'} >
            <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
              Home
            </Button>
          </Link>

          <Link className={classes.links} to={'/students'} >
            <Button variant="contained" color="primary">
              All Students
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      
      <div className={classes.greeting}><h1>All Campuses</h1></div>
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
    <div className={classes.root}>
    <AppBar position="static" elevation={0} className={classes.appBar}>
      <Toolbar>
        <Typography variant="h6" className={classes.title} color="inherit" >
          StudentFinder
        </Typography>

        <Link className={classes.links} to={'/'} >
          <Button variant="contained" color="primary" style={{marginRight: '10px'}}>
            Home
          </Button>
        </Link>

        <Link className={classes.links} to={'/students'} >
          <Button variant="contained" color="primary">
            All Students
          </Button>
        </Link>
      </Toolbar>
    </AppBar>
    
    <div className={classes.greeting}><h1>All Campuses</h1></div>
      {props.allCampuses.map((campus) => (
        <div key={campus.id}>
          <Link to={`/campus/${campus.id}`}>
            <h1>{campus.name}</h1>
          </Link>
          <img src={campus.imageUrl} alt="Campus" className={classes.image}/>
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