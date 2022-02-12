import React  from "react";

const ShowEducation = (props) => {
    const { dattas } = props;
    //console.log(datta);
    const show=(value)=>{
        props.parent(value);
    }
    return (
      <ul>
        {dattas.map((datta) => {
          return <li key={datta.cont}> 
                <h4>{datta.course}</h4>
                <h5>{datta.school}</h5>
                <h6>{datta.grade}</h6>
                <p>{datta.year}</p>
            <button onClick={()=>show(datta.cont)} id="rem" className="btn btn-dark">Rem</button>
          </li>;
        })}
      </ul>
    );
};
export default ShowEducation