import React from 'react';
import './style/Skill.scss';

const Skill = (props) => {
    const skill = ['html', 'css' ,'jquery'];
    const src = `./img/skill${skill.length}.png`
    for(let i=1; i <skill.length; i++){
        let skill = i+1;
    }
    
    
    return (
        <div id='Skill'>
            <div className="skillWrap">
                <h4>My Skills</h4>
                <div className="skillBox">
                    {
                        skill.map(function(i){
                            return(
                                <div className="skills image">
                        
                                <img src={src} alt="skill1" />
                                <span>{skill[i]}</span>
                            </div>
                    
                            )
                        })
                    }
                    
                </div>
            </div>
            <div className="toolWrap">
            <h4>My Skills</h4>
                <div className="toolBox">
                    <div className="tool image">
                        <span>GIT</span>
                    </div>
                    <div className="tool image">
                        <span>AXIOS</span>
                    </div>
                    <div className="tool image">
                        <span>API</span>
                    </div>
                    <div className="tool image">
                        <span>BOOTSTRAP</span>
                    </div>
                    <div className="tool image">
                        <span>FIGMA</span>
                    </div>
                    <div className="tool image">
                        <span>PREMIER PRO</span>
                    </div>
                    <div className="tool image">
                        <span>AFTER EFFECT</span>
                    </div>
                    <div className="tool image">
                        <span>PHOTOSHOP</span>
                    </div>
                    <div className="tool image">
                        <span>ILLUSTRATOR</span>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Skill;