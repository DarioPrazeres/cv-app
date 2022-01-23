import React, {Component} from 'react';

class Objective extends Component{
    constructor(props){
        super(props);
        this.state={
            text: ''
        }
        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange=(e)=>{
        this.setState({
            text: e.target.value,
        });
    }
    handleSubmit(event){
        event.preventDefault();
        this.props.parentCallback(this.state.text);
    }
    render(){
        return (
            <>
                <h3>Objective</h3>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <textarea className="form-control" value={this.state.text} onChange={this.handleChange}></textarea>
                    </div>
                    <button className="btn btn-dark" onClick={this.handleSubmit}>UpDate</button>
                </form>
            </>
        );
    }
}
export default Objective;