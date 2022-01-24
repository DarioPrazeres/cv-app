import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../css/menu.module.css';
import person from '../img/person.png';
import expert from '../img/expert.png';
import school from '../img/school.png';
import target from '../img/target.png';
import skill from '../img/skill.png';
import reference from '../img/reference.png';
import Personal from './Personal';
import Education from './Education';
import ShowEducation from './ShowEducation';
import Experience from './Experience';
import Skill from './Skill';
import Reference from './Reference';
import Objective from './Objective';
import ViewReference from './ViewReference';
import ViewSkill from './ShowSkill';
import View from './ShowExperience';
class Menu extends Component{
    constructor(){
        super();
        this.state={
            show:false,           
            educations: [],
            experience: [],
            reference: [],
            skills: [],
            personal: {},
            objective: '',
            status: false,
        };
        this.showMe = this.showMe.bind(this);
        this.handleCallBack = this.handleCallBack.bind(this);
        this.hundleExperience = this.hundleExperience.bind(this);
        this.hundleDelete = this.hundleDelete.bind(this);
        this.hundleReference = this.hundleReference.bind(this);
        this.hundleObjective = this.hundleObjective.bind(this);
        this.hundleEducation = this.hundleEducation.bind(this);
        this.hundleSkill = this.hundleSkill.bind(this);
        this.hundleDeleteSkill = this.hundleDeleteSkill.bind(this);
        this.hundleDeleteEdu = this.hundleDeleteEdu.bind(this);
        this.showView = this.showView.bind(this);
    }
    handleCallBack = (childDatta) =>{
        this.setState({
            personal: childDatta,
        });        
        this.showMe("personal");
        console.log(this.state.personal);
    }
    hundleEducation = (childDatta) =>{
        this.setState({
            educations: this.state.educations.concat(childDatta),
        });  
        console.log(this.state.educations)
    }
    hundleExperience = (childDatta) =>{
        this.setState({
            experience: this.state.experience.concat(childDatta),
        });  
        console.log(this.state.experience);
    }
    hundleObjective=(datta)=>{
        this.setState({
            objective: datta,
        });  
        console.log(this.state.objective);
    }
    hundleReference = (childDatta) =>{
        this.setState({
            reference: this.state.reference.concat(childDatta),
        });  
        console.log(this.state.reference);
    }
    hundleSkill = (childDatta) =>{
        this.setState({
            skills: this.state.skills.concat(childDatta),
        });  
        console.log(this.state.skills);
    }
    hundleDeleteSkill=(datta)=>{
        var array = this.state.skills;
        this.state.skills.splice(datta, 1);
        this.setState({
            skills: array,
        }); 
    }
    hundleDelete=(datta)=>{
        var array = this.state.experience;
        this.state.experience.splice(datta, 1);
        this.setState({
            experience: array,
        }); 
    }
    hundleDeleteRefer=(datta)=>{
        var array = this.state.reference;
        this.state.reference.splice(datta, 1);
        this.setState({
            reference: array,
        }); 
    }
    hundleDeleteEdu=(datta)=>{
        var array = this.state.educations;
        this.state.educations.splice(datta, 1);
        this.setState({
            educations: array,
        }); 
    }
    showMe(id){
        if(this.state.show === false){
            this.setState({
                show: true
            });
            document.getElementById(id).classList.remove('d-none');
            document.getElementById(id).classList.add('d-print-none');
        }else{
            this.setState({
                show: false
            });
            document.getElementById(id).classList.remove('d-print-none');
            document.getElementById(id).classList.add('d-none');
        }
        
    }
    showView(idShow, idHide){
        
        document.getElementById(idShow).classList.remove('d-none');
        document.getElementById(idShow).classList.add('d-print-none');
        document.getElementById(idHide).classList.remove('d-print-none');
        document.getElementById(idHide).classList.add('d-none');
    }
    render(){
        return(
            <>
                <header className='bg-dark'>
                    <h1> Perfil</h1>
                </header>
                <div className="container-fluid p-4" id={styles.grid}>
                    <button type="button" onClick={()=>{this.showView("edith","view")}} className="btn  btn-dark mb-2 align-items-center" >Edith</button>
                    <button type="button" onClick={()=>{this.showView("view","edith")}} className="btn  btn-dark mb-2 align-items-center" >View</button>
                </div>
                <div className="container-fluid p-4 menu d-print-none" id="edith">
                    <div className="container-fluid">
                         <button type="button" onClick={()=>this.showMe('personal')} className="btn  mb-2" id={styles.btn}><img src={person} alt="icon"/>Personal</button>  
                    </div>
                    <div className="container-fluid d-none" id='personal'>
                        <Personal parentCallback={this.handleCallBack} />
                        <div className="container-fluid" id={styles.center}>
                        <h3>{this.state.personal.name}</h3>
                        <h5>{this.state.personal.adress}</h5>
                        <h5>{this.state.personal.email}</h5>
                        {this.state.personal.phone}
                    </div>
                    </div>
                    
                    <button type="button" onClick={()=>this.showMe('education')} className="btn  mb-2" id={styles.btn}><img src={school} alt="icon"/>Education</button>
                    <div className="container-fluid d-none" id='education'> 
                        <Education parentCallback={this.hundleEducation} /> 
                        <ShowEducation dattas={this.state.educations} parent={this.hundleDeleteEdu} />                     
                    </div>
                    <button type="button" onClick={()=>this.showMe('experience')} className="btn  mb-2" id={styles.btn}><img src={expert} alt="icon"/>Profisional Experience</button>
                    <div className="container-fluid d-none" id='experience'>                        
                      <Experience parentCallback={this.hundleExperience} />
                      <View exps={this.state.experience} parent={this.hundleDeleteEdu} />
                    </div>                   
                    <button type="button" onClick={()=>this.showMe('skill')} className="btn  mb-2" id={styles.btn}><img src={skill} alt="icon"/>Skill</button>
                    <div className="container-fluid d-none" id='skill'>                        
                        <Skill parentCallback={this.hundleSkill} />
                        <ViewSkill skills={this.state.skills} parent={this.hundleDeleteSkill} /> 
                    </div>
                    <button type="button" onClick={()=>this.showMe('object')} className="btn  mb-2" id={styles.btn}><img src={target} alt="icon"/>Objective</button>
                    <div className="container-fluid d-none" id='object'>                        
                        <Objective parentCallback={this.hundleObjective}/>
                        <h5>{this.state.objective}</h5>  
                    </div>
                    <button type="button" onClick={()=>this.showMe('refer')} className="btn  mb-2" id={styles.btn}><img src={reference} alt="icon"/>Reference</button>
                    <div className="container-fluid d-none" id='refer'>                        
                        <Reference parentCallback={this.hundleReference} />
                        <ViewReference refs={this.state.reference} parent={this.hundleDeleteRefer} /> 
                    </div>                                       
                </div>   
                <div className="container-fluid p-4 d-none" id="view">
                    <div className="container-fluid" id={styles.center}>
                        <h3>{this.state.personal.name}</h3>
                        <h5>{this.state.personal.adress}</h5>
                        <h5>{this.state.personal.email}</h5>
                        {this.state.personal.phone}
                    </div>
                    <hr/>
                    <div className="container-fluid">
                        <h3>Education</h3>
                        <hr/>
                        <ShowEducation dattas={this.state.educations} parent={this.hundleDeleteEdu} />
                    </div>
                    <div className="container-fluid">
                        <View exps={this.state.experience} parent={this.hundleDeleteEdu} />                       
                    </div>
                    <div className="container-fluid">
                        <h3>Objective</h3>
                        <hr/>    
                        <h5>{this.state.objective}</h5>          
                    </div>
                    <div className="container-fluid">
                        <ViewSkill skills={this.state.skills} parent={this.hundleDeleteSkill} />                       
                    </div>
                    <div className="container-fluid">
                        <ViewReference refs={this.state.reference} parent={this.hundleDeleteRefer} />                       
                    </div>
                </div>        
            </>
        );
    }
}

export  default Menu;