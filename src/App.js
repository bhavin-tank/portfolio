import {Fragment} from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import About from "./components/About";

function App() {
    return (
        <Fragment>
            <Header/>
            <About/>
            <Experience/>
            <Skills/>
            <Projects/>
            <Footer/>
        </Fragment>
    );
}

export default App;
