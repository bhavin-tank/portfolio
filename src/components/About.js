import {image, description} from "../data.json";
import {Icon} from "@iconify/react";

function About() {
    return (
        <section id="about">
            <div className="col-md-12">
                <h1 style={{color: "black"}}>
                    <span>About me</span>
                </h1>
                <div className="row center mx-auto mb-5">
                    <div className="col-md-4 mb-5 center">
                        <div className="shadow p-3">
                            <img height="250px" src={`/images/${image}`} alt="Avatar placeholder"/>
                        </div>
                    </div>
                    <div className="col-md-8 center">
                        <div className="col-md-10">
                            <div className="card">
                                <div className="card-header">
                                    <Icon icon="emojione:red-circle"/>
                                    <Icon icon="twemoji:yellow-circle" className="mx-2"/>
                                    <Icon icon="twemoji:green-circle"/>
                                </div>
                                <div className="card-body font-trebuchet text-justify h4 m-3">
                                    <div className="wave mb-4">Hi :) </div>
                                    <p>{description}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default About;
