import {Modal} from "react-bootstrap";
import {Icon} from "@iconify/react";
import AwesomeSlider from "react-awesome-slider";
import AwesomeSliderStyles from "../scss/light-slider.scss";
import AwesomeSliderStyles2 from "../scss/dark-slider.scss";
import "react-awesome-slider/dist/custom-animations/scale-out-animation.css";

function ProjectDetailsModal({show, onHide, data}) {
    const {title, description, images, url, technologies} = data;

    const technologiesList = technologies.map((tech, i) =>
        <li className="list-inline-item mx-3 skills-title text-center p-4 mt-4" key={i}>
            <Icon icon={tech.icon} width="50" height="50"/>
            <div className="text-center text-dark mt-3" style={{"fontSize": 14}}>
                {tech.text}
            </div>
        </li>
    );

    const imageList = images.map((elem, i) => <div key={i} data-src={elem} />);

    return (
        <Modal
            show={show}
            onHide={onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            className="modal-inside"
            centered
        >
            <span onClick={onHide} className="modal-close">
                <Icon icon="fa:times" width="20" height="20"/>
            </span>
            <div className="col-md-12">
                <div className="col-md-10 mx-auto" style={{paddingBottom: "50px"}}>
                    <div className="slider-tab p-2">
                        <Icon icon="emojione:red-circle"/>
                        <Icon icon="twemoji:yellow-circle" className="mx-2"/>
                        <Icon icon="twemoji:green-circle"/>
                    </div>
                    <AwesomeSlider
                        cssModule={[AwesomeSliderStyles, AwesomeSliderStyles2]}
                        animation="scaleOutAnimation"
                        className="slider-image"
                    >
                        {imageList}
                    </AwesomeSlider>
                    <h3 className="my-4">
                        {url ? <a href={url} target="_blank" rel="noopener noreferrer" className="link-href">
                            {title} <Icon icon="fa-solid:external-link-alt"/>
                        </a> : title}
                    </h3>
                    <p className="modal-description">{description}</p>
                    <div className="col-md-12 text-center">
                        <ul className="list-inline mx-auto">{technologiesList}</ul>
                    </div>
                </div>
            </div>
        </Modal>
    );
}

export default ProjectDetailsModal;