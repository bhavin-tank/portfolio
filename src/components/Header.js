import {memo, useState} from "react";
import Typical from "react-typical";
import {Icon} from "@iconify/react";
import Switch from "react-switch";
import {name, titles} from "../data.json";

function Header() {
    const [checked, setChecked] = useState(false);

    const onThemeSwitchChange = (checked) => {
        setChecked(checked);
        let dataThemeAttribute = "data-theme";
        let body = document.body;
        let newTheme = body.getAttribute(dataThemeAttribute) === "dark" ? "light" : "dark";
        body.setAttribute(dataThemeAttribute, newTheme);
    }

    const HeaderTitleTypeAnimation = memo(() => {
        return <Typical className="title-styles" steps={titles} loop={50}/>
    });

    return (
        <header id="home" style={{height: window.innerHeight, display: 'block'}}>
            <div className="row aligner" style={{height: '100%'}}>
                <div className="col-md-12">
                    <Icon icon="la:laptop-code" className="header-icon"/>
                    <h1 className="mb-0 d-flex flex-row justify-content-center">
                        <span className="text-nowrap">Hi, I'm</span>&nbsp;<Typical steps={[name]} wrapper="p"/>
                    </h1>
                    <div className="title-container">
                        <HeaderTitleTypeAnimation/>
                    </div>
                    <Switch
                        checked={checked}
                        onChange={onThemeSwitchChange}
                        offColor="#baaa80"
                        onColor="#353535"
                        className="react-switch mx-auto"
                        width={90}
                        height={40}
                        uncheckedIcon={
                            <Icon
                                icon="twemoji:owl"
                                style={{
                                    display: "block",
                                    height: "100%",
                                    fontSize: 25,
                                    textAlign: "end",
                                    marginLeft: "20px",
                                    color: "#353239",
                                }}/>
                        }
                        checkedIcon={
                            <Icon
                                icon="noto-v1:sun-with-face"
                                className="iconify"
                                style={{
                                    display: "block",
                                    height: "100%",
                                    fontSize: 25,
                                    textAlign: "end",
                                    marginLeft: "10px",
                                    color: "#353239",
                                }}
                            />
                        }
                        id="icon-switch"
                    />
                </div>
            </div>
        </header>
    );
}

export default Header;
