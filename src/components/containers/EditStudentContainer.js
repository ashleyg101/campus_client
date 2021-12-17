import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { deleteStudent } from "../../store/actions/actionCreators";
import { EditStudentView } from '../views';
import { addStudentThunk, fetchStudentThunk, editStudentThunk, deleteStudentThunk } from '../../store/thunks';

class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state =
        {
          firstname: "",
          lastname: "", 
          email: "",
          gpa: 0.0,
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    componentDidMount() {
        this.props.fetchStudent(window.location.pathname.slice(-1));
    }

 
    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        console.log(this.props.student.firstname);
        let student = {
            firstname: this.props.student.firstname,
            lastname: this.props.student.lastname,
            email: this.props.student.email,
            gpa: this.props.student.gpa,
            campusId: this.props.student.campusId,
            id: window.location.pathname.slice(-1)
        };
        
        await this.props.editStudent(student);

        this.setState({
          firstname: "", 
          lastname: "", 
          email: "",
          gpa: 0,
          campusId: null, 
          redirect: true, 
          redirectId: window.location.pathname.slice(-1)
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/student/${this.state.redirectId}`}/>)
        }
        return (
          <EditStudentView 
            student={this.props.student}
            editStudent={this.props.editStudent}
            deleteStudent={this.props.deleteStudent}
            fetchStudent={this.props.fetchStudent}
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

// map state to props
const mapState = (state) => {
    return {
      student: state.student,
    };
  };


// map dispatch to props
const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (student) => dispatch(fetchStudentThunk(student)),
        deleteStudent: (student) => dispatch(deleteStudentThunk(student)),
        addStudent: (student) => dispatch(addStudentThunk(student)),
    })
}

export default connect(mapState, mapDispatch)(EditStudentContainer);