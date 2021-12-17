import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import EditStudentView from '../views/EditStudentView';
import { fetchStudentThunk, editStudentThunk } from '../../store/thunks';


class EditStudentContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          firstname: this.props.fetchStudent(window.location.pathname.slice(-1)).firstname, 
          lastname: "", 
          email: "",
          gpa: 0,
          campusId: null, 
          redirect: false, 
          redirectId: null
        };
    }

    // componentDidMount() {
    //     console.log(window.location.pathname.slice(-1));
    //     this.props.fetchStudent(window.location.pathname.slice(-1));
    // }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let student = {
            firstname: this.state.firstname,
            lastname: this.state.lastname,
            email: this.state.email,
            gpa: this.state.gpa,
            campusId: this.state.campusId
        };
        
        let editStudent = await this.props.editStudent(student);

        this.setState({
          firstname: "", 
          lastname: "", 
          email: "",
          gpa: 0,
          campusId: null, 
          redirect: true, 
          redirectId: editStudent.id
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
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        editStudent: (student) => dispatch(editStudentThunk(student)),
        fetchStudent: (student) => dispatch(fetchStudentThunk(student)),
    })
}

export default connect(null, mapDispatch)(EditStudentContainer);