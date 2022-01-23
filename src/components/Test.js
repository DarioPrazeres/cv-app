import React, { Component } from "react";
import uniqid from "uniqid";

class Test extends Component{
    constructor(props){
        super(props);
        this.state={
            datta:{
                text:'',
                id: uniqid(),
            },
            cont: 0,
        };
    }
    handleChange=(e)=>{
        this.setState({
            datta:{
                text: e.target.value,
                id: uniqid(),
            }
            
        });
    }
    handleSubmit=(e)=>{
        e.preventDefault();
        if(this.state.datta.text ===''){
            alert('Digite something');
        }else{
            this.setState({
            datta: {
                text:'',
                id: uniqid(),
            },
            });
            this.props.parentCallback(this.state.datta);
        }
        
    }
    render(){
        const { datta } = this.state
        return(
            <>
                <form onSubmit={this.handleSubmit}>
                    <div classdatta="form-group">
                      <label>datta
                        <input
                        className="form-control"
                        type="text" require="true"
                        datta="datta"
                        value={datta.text}
                        onChange={this.handleChange}
                        />
                        </label>  
                    </div>
                    <button type="submit" className="btn btn-dark" onClick={this.handleSubmit}>add</button>
                </form>
            </>
        );
    }
}
export default Test;