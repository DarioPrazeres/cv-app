import React, {Component} from "react";
import {Name} from "./Child1";
class Child2 extends Component{
    render(){
        return (
            <>
                <Name.Consumer>
                  {
                      (fname)=>{

                          return <h1>My Name is {fname}</h1>
                      }
                  }  
                </Name.Consumer>
            </>
        );
    }
}
export default Child2;