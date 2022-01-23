import React from "react";

const ViewReference = (props) => {
    const { refs } = props;
    const showCont=(value)=>{
        console.log(value);
        props.parent(value);
    }
    return (
        <div>
            <h3>Reference</h3>
            <ul>{refs.map((exp) =>
                    <li key={exp.cont}>
                        <h4>{exp.nameR}</h4>
                        <h5>{exp.job}</h5>
                        <h6>{exp.nameC}</h6>
                        <p>{exp.email}</p>
                        <p>{exp.phone}</p>
                        <button className="btn btn-dark" onClick={()=>showCont(exp.cont)}>Remove</button>
                    </li>)} 
            
            </ul>
        </div>
        
    );
};

export default ViewReference;