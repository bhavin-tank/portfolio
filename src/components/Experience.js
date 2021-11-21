import {experience} from "../data.json";
import "react-vertical-timeline-component/style.min.css";
import {VerticalTimeline, VerticalTimelineElement} from "react-vertical-timeline-component";
import {Icon} from "@iconify/react";
import Badge from "react-bootstrap/Badge";

function Experience() {
    let experienceList = experience.map(({icon, title, company, years, technologies, mainTech}, i) => {
        return (
            <VerticalTimelineElement
                className="vertical-timeline-element--work"
                date={years}
                iconStyle={{
                    background: "#AE944F",
                    color: "#fff",
                    textAlign: "center",
                }}
                icon={<Icon icon={icon} className="experience-icon"/>}
                key={i}
            >
                <h3 className="vertical-timeline-element-title" style={{textAlign: "left"}}>{title}</h3>
                <h4 className="vertical-timeline-element-subtitle" style={{textAlign: "left"}}>{company}</h4>
                <div className="my-3">
                    {mainTech.map((technology, i) =>
                        <Badge pill className="main-badge mr-2 mb-2" key={i}>
                            {technology}
                        </Badge>
                    )}
                </div>
                <div style={{textAlign: "left", marginTop: "15px"}}>
                    {technologies.map((technology, i) =>
                        <Badge pill className="experience-badge mr-2 mb-2" key={i}>
                            {technology}
                        </Badge>
                    )}
                </div>
            </VerticalTimelineElement>
        );
    });
    return (
        <section id="resume" className="pb-5">
            <div className="col-md-12 mx-auto">
                <div className="col-md-12">
                    <h1 className="section-title" style={{color: "black"}}>
                      <span className="text-black" style={{textAlign: "center"}}>
                          Experience
                      </span>
                    </h1>
                </div>
            </div>
            <div className="col-md-8 mx-auto">
                <VerticalTimeline>
                    {experienceList}
                    <VerticalTimelineElement
                        iconStyle={{
                            background: "#AE944F",
                            color: "#fff",
                            textAlign: "center",
                        }}
                        icon={<Icon icon="fa-solid:hourglass-start" className="experience-icon"/>}
                    />
                </VerticalTimeline>
            </div>
        </section>
    );
}

export default Experience;
