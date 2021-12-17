import React, { Component } from "react";
import { connect } from "react-redux";
import { editCampusThunk, fetchCampusThunk, deleteCampusThunk, deleteStudentThunk } from "../../store/thunks";

import { CampusView } from "../views";

class CampusContainer extends Component {
  componentDidMount() {
    //getting campus ID from url
    this.props.fetchCampus(this.props.match.params.id);
  }

  render() {
    return (
      <CampusView 
        campus={this.props.campus}
        deleteCampus={this.props.deleteCampus}
        deleteStudent={this.props.deleteStudent}
        editCampus={this.props.editCampus}
      />
    );
  }
}

// map state to props
const mapState = (state) => {
  return {
    campus: state.campus,
  };
};

// map dispatch to props
const mapDispatch = (dispatch) => {
  return {
    fetchCampus: (id) => dispatch(fetchCampusThunk(id)),
    deleteCampus: (id) => dispatch(deleteCampusThunk(id)),
    deleteStudent: (id) => dispatch(deleteStudentThunk(id)),
    editCampus: (id) => dispatch(editCampusThunk(id)),
  };
};

export default connect(mapState, mapDispatch)(CampusContainer);