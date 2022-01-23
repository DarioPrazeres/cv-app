import React, { Component } from 'react';
import uniqid from "uniqid";
import 'bootstrap/dist/css/bootstrap.min.css'
class Personal extends Component{
    constructor(props){
        super(props);
        this.state={
                name: '',
                adress: '',
                email: '',
                phone: '',
                birth: true,
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
        //console.log(this.state);
        this.props.parentCallback(this.state);
    }
    render(){
        return (
            <>
                <h3>Personal Details</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>Name</label>
                        <input type="text" className="form-control" placeholder="Your Name" onChange={this.changeName} value={this.state.name} name='name' id="name"/>
                    </div>
                    <div className="form-group">
                        <label>Adress</label>
                        <input type="text" className="form-control" name="adress" onChange={this.changeName} value={this.state.adress} id="adress"/>
                    </div>
                    <div className="form-group">
                        <label>Email</label>
                        <input type="email" className="form-control" onChange={this.changeName} name="email" value={this.state.email}  id="email" placeholder='myresume@gmail.com'/>
                    </div>
                    <div className="form-group">
                        <label>Phone</label>
                        <input type="number" onChange={this.changeName} name="phone" className="form-control" id="phone" value={this.state.phone} placeholder='+244946689138'/>
                    </div>
                    <button className="btn btn-dark m-2" type="submit">Send</button>
                </form>
            </>
        );
    }
}
export default Personal;