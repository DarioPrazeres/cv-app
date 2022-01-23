import React from "react";

const ViewSkill = (props) => {
    const { skills } = props;
    const showCont=(value)=>{
        console.log(value);
        props.parent(value);
    }
    return (
        <div>
            <h3>Experience</h3>
            <ul>{skills.map((exp) =>
                    <li key={exp.cont}>
                        <h5>{exp.skill}</h5>
                        <button className="btn btn-dark" onClick={()=>showCont(exp.cont)}>Remove</button>
                    </li>)} 
            
            </ul>
        </div>
        
    );
};

export default ViewSkill;