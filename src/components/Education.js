import React, { Component } from 'react';
import uniqid from "uniqid";

class Education extends Component{
    constructor(props){
        super(props);
        this.state={
                course: '',
                school: '',
                grade: '',
                year: '',
                cont: 0,
                id : uniqid()            
        };
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event){
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
            [name]:value,
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            cont: this.state.cont + 1,
        });
        this.props.parentCallback(this.state);
        this.setState({
            course: '',
            school: '',
            grade: '',
            year: '',
        });
    }
    render(){
        return(
            <div>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Course/Degree</label>
                    <input type="text" name="course" id="course" value={this.state.course} className="form-control" onChange={this.handleChange}/>
                </div>
                <div className="form-group">
                    <label>School/University</label>
                    <input type="text" className="form-control"  value={this.state.school} name="school" onChange={this.handleChange} id="school"/>
                </div>
                <div className="form-group">
                    <label>Grade/Score</label>
                    <input type="text" className="form-control" value={this.state.grade} onChange={this.handleChange} name="grade" id="grade"/>
                </div>
                <div className="form-group">
                    <label>Year</label>
                    <input type="text" onChange={this.handleChange} value={this.state.year} className="form-control" name="year" id="year"/>
                </div>
                <button type="submit" className="btn btn-dark" onClick={this.handleSubmit}>Send</button>
                </form>
                
            </div>
        );
    }
}
export default Education;