import React, {Component, createContext} from "react";
import Child2 from "./Child2";
const Name = createContext();
class Child1 extends Component{
    render(){
        return (
            <>
                <Name.Provider value={"Dario Prazeres"}>
                    <Child2/>
                </Name.Provider>
            </>
        );
    }
}
export default Child1;
export {Name};