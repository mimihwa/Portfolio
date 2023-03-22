import React from 'react';
import './style/AboutSkill.scss';

const AboutSkill = (props) => {
    const skills = ['HTML', 'CSS' ,'JQUERY','JAVASCRIPT', 'REACT', 'VUE'];
    const tools = ['GIT', 'AXIOS' ,'API','BOOTSTRAP', 'FIGMA', 'PREMIER PRO', 'AFTER EFFECT', 'PHOTOSHOP', 'ILLUSTRATOR'];
    
    return (
        <div id='Skill'>
            <div className="skillWrap wrap">
                <h4>My Skills</h4>
                <div className="skillBox box">
                    {
                        skills.map((skill, idx)=>(
                            <div key={idx} className='skill rec'>
                                <img src={`./img/skill${idx+1}.png`}/>
                                <span>{skill}</span>
                            </div>
                        ))
                    }
                </div>
            </div>

            <div className="toolWrap wrap">
            <h4>My Tools</h4>
                <div className="toolBox box">
                    {
                        tools.map((tool, idx)=>(
                            <div key={idx} className='tool rec'>
                                <img src={`./img/skill${idx+7}.png`}/>
                                <span>{tool}</span>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div >
    );
};
export default AboutSkill;