import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from './Overview';

class FormEducation extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: {
                text: props.el,
                id : uniqid()
            },
            tasks: [],
        };
        this.onRemove = this.onRemove.bind(this);
    }
    onSubmitTask = (event)=>{
        event.preventDefault();
        this.setState({
            tasks: this.state.tasks.concat(this.state.task),
            task: {
                text: this.props.el,
                id: uniqid()
            },
        });
    }
    onRemove = ()=>{
        var last = this.state.tasks.length-1;
        var array = this.state.tasks;
        this.state.tasks.splice(last, 1);
        this.setState({
            tasks: array,
        });
    }
    render() {
        const { tasks } = this.state;
    
        return (
          <div>
              <Overview tasks={tasks} />
              <button onClick={this.onSubmitTask} type="button" className="btn btn-primary">
                Add Task
              </button>  
              <button onClick={this.onRemove} type="button" className="btn btn-danger m-2">
                Remove
              </button>            
          </div>
        );
      }
}
export default FormEducation;