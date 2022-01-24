import React, {Component} from "react";

class Skill extends Component{
    constructor(props){
        super(props);
        this.state={
            skill:'',
            cont: 0,
        }
        this.changeName = this.changeName.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }
    changeName(event){
        var value = event.target.value;
        this.setState({
                skill:value,
        });
        
    }
    handleSubmit(event){
        event.preventDefault();
        this.setState({
            cont: this.state.cont +1,
        });
        this.props.parentCallback(this.state);
        this.setState({
            skill:'',
        });
    }
    render(){
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div className="form-group">
                        <label>
                            <textarea className="form-control" value={this.state.skill} onChange={this.changeName}></textarea>
                        </label>
                    </div>
                    <button type="submit" className="btn btn-dark m-2" onClick={this.handleSubmit}>Add</button>
                </form>
                
            </>
        );
    }
}
export default Skill;