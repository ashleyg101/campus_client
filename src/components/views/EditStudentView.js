import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from "react-router-dom";


import { makeStyles } from '@material-ui/core/styles';


const useStyles = makeStyles( () => ({
  formContainer:{  
    width: '500px',
    backgroundColor: '#f0f0f5',
    borderRadius: '5px',
    margin: 'auto',
  },
  title: {
    flexGrow: 1,
    textAlign: 'left',
    textDecoration: 'none'
  }, 
  customizeAppBar:{
    backgroundColor: '#11153e',
    shadows: ['none'],
  },
  formTitle:{
    backgroundColor:'#c5c8d6',
    marginBottom: '15px',
    textAlign: 'center',
    borderRadius: '5px 5px 0px 0px',
    padding: '3px'
  },
  
}));

const EditStudentView = (props) => {
  const { handleChange, handleSubmit } = props;
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <div className={classes.formContainer}>
        <div className={classes.formTitle}>
          <Typography style={{fontWeight: 'bold', fontFamily: 'Courier, sans-serif', fontSize: '20px', color: '#11153e'}}>
            Edit Student
          </Typography>
        </div>
        <form style={{textAlign: 'center'}} onSubmit={(e) => handleSubmit(e)}>
          <label style= {{color:'#11153e', fontWeight: 'bold'}}>First Name: </label>
          <input type="text" name="firstname" onChange ={(e) => handleChange(e)} defaultValue={props.student.firstname}/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Last Name: </label>
          <input type="text" name="lastname" onChange={(e) => handleChange(e)} defaultValue={props.student.lastname}/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>Email: </label>
          <input type="email" name="email" onChange={(e) => handleChange(e)} defaultValue={props.student.email}/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>campusId: </label>
          <input type="text" name="campusId" onChange={(e) => handleChange(e)} defaultValue={props.student.campusId}/>
          <br/>
          <br/>

          <label style={{color:'#11153e', fontWeight: 'bold'}}>GPA: </label>
          <input type="number" step="0.01" min="0.00" max="4.0" name="gpa" onChange={(e) => handleChange(e)} defaultValue={props.student.gpa} />
          <br/>
          <br/>

          <Button variant="contained" color="primary" type="submit">
            Submit
          </Button>
          <br/>
          <br/>
        </form>
        </div>
        <br/>
        <br/>
        <Link to={`/students`}><button>Back to All Students</button></Link>
        <br/>
        <Link to={`/`}><button>Back to Home</button></Link>
      </div>
    
  )
}

export default EditStudentView;