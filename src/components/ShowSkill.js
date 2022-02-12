import React from "react";

const ViewSkill = (props) => {
    const { skills } = props;
    const showCont=(value)=>{
        props.parent(value);
    }
    return (
        <div>
            <h3>Skill</h3>
            <hr/>
            <ul>{skills.map((exp) =>
                    <li key={exp.cont}>
                        <h5>{exp.skill}</h5>
                        <button className="btn btn-dark" onClick={()=>showCont(exp.cont)} id="rem">Remove</button>
                    </li>)} 
            
            </ul>
        </div>
        
    );
};

export default ViewSkill;