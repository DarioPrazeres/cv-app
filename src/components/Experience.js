import React, {Component} from "react";
import uniqid from "uniqid";
class Experience extends Component{
    constructor(props){
        super(props);
        this.state={
                nameC: '',
                job: '',
                dateS: '',
                dateE: '',
                details: '',
                cont: 0,
                id: uniqid(),
        }
        this.changeName = this.changeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeName(event){
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
                [name]:value,
                id: uniqid(),
        });
        
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            cont: this.state.cont +1,
        });
        console.log(this.state);
        this.props.parentCallback(this.state);
    }
    render(){
        return(
            <>
                <h3>Experience</h3>
                <form onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text"
                     onChange={this.changeName}  value={this.state.nameC} className="form-control" name="nameC"/>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input type="text"  onChange={this.changeName} value={this.state.job} className="form-control" name="job"/>
                </div>
                <div className="form-group">
                    <label>Start Date
                        <input type="date" onChange={this.changeName} value={this.state.dateS} className="form-control" id="dateS" name="dateS"/>
                    </label>
                    <label className="m-2">End Date
                        <input type="date" onChange={this.changeName} value={this.state.dateE} className="form-control" id="dateE" name="dateE"/>
                    </label>
                </div>
                <div className="form-group">
                    <label>Details</label>
                    <textarea className="form-control" value={this.state.details} onChange={this.changeName} name="details">
                    </textarea>
                </div>
                <button className="btn btn-dark m-2" type="submit">Send</button>
                </form>
                
            </>
        );
    }
}
export default Experience;