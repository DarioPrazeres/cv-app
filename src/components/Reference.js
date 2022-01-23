import React, {Component} from "react";

class Reference extends Component{
    constructor(props){
        super(props);
        this.state={
            nameR: '',
            phone: '',
            job: '',
            nameC: '',
            email: '',
            cont: 0,
        }
        this.changeName = this.changeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeName(event){
        var name = event.target.name;
        var value = event.target.value;
        this.setState({
                [name]:value,
        });
        
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            cont: this.state.cont +1,
        });
        this.props.parentCallback(this.state);
    }
    render(){
        return (
            <>
                <h3>Reference</h3>
                <form  onSubmit={this.handleSubmit}>
                <div className="form-group">
                    <label>Referee's Name</label>
                    <input type="text" className="form-control" value={this.state.nameR} onChange={this.changeName} name="nameR"/>
                </div>
                <div className="form-group">
                    <label>Job Title</label>
                    <input type="text" className="form-control" value={this.state.job} onChange={this.changeName} name="job"/>
                </div>
                <div className="form-group">
                    <label>Company Name</label>
                    <input type="text" className="form-control" value={this.state.nameC} onChange={this.changeName} name="nameC"/>
                </div>
                <div className="form-group">
                    <label>Email</label>
                    <input type="Email" placeholder="example@gmail.com" value={this.state.email} onChange={this.changeName} className="form-control" name="email"/>
                </div>
                <div className="form-group">
                    <label>Phone</label>
                    <input type="Number" placeholder="+244946689138" value={this.state.phone} name="phone" onChange={this.changeName} className="form-control"/>
                </div>
                <button type="submit" className="btn btn-dark m-2" onClick={this.handleSubmit}>Send</button>
                </form>
            </>
        );
    }
}
export default Reference;