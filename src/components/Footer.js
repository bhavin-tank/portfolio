import {name, social} from "../data.json";
import {Icon} from "@iconify/react";

function Footer() {
    const socialLinks = social.map(network => (
        <span key={network.name} className="m-4">
                <a href={network.url} target="_blank" rel="noopener noreferrer">
                    <Icon icon={network.class}/>
                </a>
        </span>
    ));

    return (
        <footer>
            <div className="col-md-12">
                <div className="social-links">
                    {socialLinks}
                </div>
                <div className="copyright py-4 text-center">
                    <div className="container">
                        <small>
                            Copyright &copy; {name}
                        </small>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
