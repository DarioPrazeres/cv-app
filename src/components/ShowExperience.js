import React from "react";

const View = (props) => {
    const { exps } = props;
    const showCont=(value)=>{
        console.log(value);
        props.parent(value);
    }
    return (
        <div>
            <h3>Experience</h3>
            <hr/>
            <ul>{exps.map((exp) =>
                    <li key={exp.cont}>
                        <h4>{exp.nameC}</h4>
                        <h5>{exp.job}</h5>
                        <h6>{exp.dateS} at {exp.dateE}</h6>
                        <p>{exp.details}</p>
                        <button className="btn btn-dark" onClick={()=>showCont(exp.cont)} id="rem" >Rem</button>
                    </li>)} 
            
            </ul>
        </div>
        
    );
};

export default View;