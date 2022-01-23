import React, { Component } from 'react';
import uniqid from "uniqid";
import Overview from './Overview';

class Add extends Component{
    constructor(props){
        super(props);
        this.state = {
            task: {
                text: props.el,
                id : uniqid()
            },
            tasks: [],
        };
        this.onSubmitTask = this.onSubmitTask.bind(this);
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
    render() {
        const { tasks } = this.state;
    
        return (
          <div>

              <Overview tasks={tasks} />
              <button onClick={this.onSubmitTask} type="button" className="btn btn-primary">
                Add Task
              </button>                        
          </div>
        );
      }
}
export default Add;