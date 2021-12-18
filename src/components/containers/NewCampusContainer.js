import { Component } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

import NewCampusView from '../views/NewCampusView';
import { addCampusThunk } from '../../store/thunks';


class NewCampusContainer extends Component {
    constructor(props){
        super(props);
        this.state = {
          name: "", 
          imageUrl: "https://www.thoughtco.com/thmb/jfIJE14e4c4SbCw2ozOiTijzijQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
          address: "",
          description: null,
          redirect: false, 
          redirectId: null
        };
    }

    handleChange = event => {
      this.setState({
        [event.target.name]: event.target.value
      });
    }

    handleSubmit = async event => {
        event.preventDefault();

        let campus = {
            name: this.state.name,
            imageUrl: "https://www.thoughtco.com/thmb/jfIJE14e4c4SbCw2ozOiTijzijQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
            address: this.state.address,
            description: this.state.description,
        };
        
        let newCampus = await this.props.addCampus(campus);

        this.setState({
          name: "", 
          imageUrl: "https://www.thoughtco.com/thmb/jfIJE14e4c4SbCw2ozOiTijzijQ=/768x0/filters:no_upscale():max_bytes(150000):strip_icc():format(webp)/swarthmore-college-Eric-Behrens-flickr-5706ffe35f9b581408d48cb3.jpg",
          address: null,
          description: null,
          redirect: true, 
          redirectId: newCampus.id
        });
    }

    componentWillUnmount() {
        this.setState({redirect: false, redirectId: null});
    }

    render() {
        if(this.state.redirect) {
          return (<Redirect to={`/campus/${this.state.redirectId}`}/>)
        }
        return (
          <NewCampusView 
            handleChange = {this.handleChange} 
            handleSubmit={this.handleSubmit}      
          />
        );
    }
}

const mapDispatch = (dispatch) => {
    return({
        addCampus: (campus) => dispatch(addCampusThunk(campus)),
    })
}

export default connect(null, mapDispatch)(NewCampusContainer);