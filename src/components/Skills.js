import {skills} from "../data.json";
import {Icon} from "@iconify/react";

function Skills() {
    const skillsList = skills.map((skill, i) =>
        <li className="list-inline-item mx-3 skills-title text-center p-4 mb-4" key={i}>
            <Icon icon={skill.icon} width="50" height="50"/>
            <div className="text-center text-dark mt-3" style={{"fontSize": 14}}>
                {skill.text}
            </div>
        </li>
    );
    return (
        <section id="skills">
            <div className="col-md-12">
                <div className="col-md-12">
                    <h1 className="section-title">
                        <span className="text-white">Skills</span>
                    </h1>
                </div>
                <div className="col-md-12 text-center">
                    <ul className="list-inline mx-auto skill-icon">{skillsList}</ul>
                </div>
            </div>
        </section>
    );
}

export default Skills;
