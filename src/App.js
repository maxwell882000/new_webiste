import './App.css';
import './components/css/layout.css';
import  './components/css/icon.css';

import Main from "./components/models/main/Main";
import Portfolio from "./components/models/portfolio/Portfolio";
import Prices from "./components/models/prices/Prices";
import Reviews from "./components/models/reviews/Reviews";
import ContactUs from "./components/models/contact_us/ContactUs";

import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Routing} from "./components/routes/Routes";
import {useMediaQuery} from "react-responsive";
import {RESPONSIVE} from "./responsive/Responsive";
import React, {useRef} from "react";
import DesktopHeader from "./components/helpers/headers/desktop/DesktopHeader";
import MobileHeader from "./components/helpers/headers/mobile/MobileHeader";


function App() {
    const mobile = useMediaQuery(RESPONSIVE.MOBILE);
    const desktop = !mobile;
    const arrayOfRefs = [
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null),
        useRef(null)
    ]


    return (
        <main>
            <Router>
                {
                    desktop &&
                    <Switch>
                        <Route exact path={Routing.MAIN}>
                            <DesktopHeader index={0}/>
                            <Main/>
                        </Route>
                        <Route path={Routing.PORTFOLIO}>
                            <DesktopHeader index={1}/>
                            <Portfolio/>
                        </Route>
                        <Route path={Routing.SERVICES}>
                            <DesktopHeader index={2}/>
                            <Prices/>
                        </Route>
                        <Route path={Routing.REVIEWS}>
                            <DesktopHeader index={3}/>
                            <Reviews/>
                        </Route>
                        <Route path={Routing.CONTACT_US}>
                            <DesktopHeader index={4}/>
                            <ContactUs/>
                        </Route>
                    </Switch>
                }
                {mobile && <>
                    <MobileHeader onClickMenu={(index) => {
                        window.scrollTo(0, arrayOfRefs[index].current.offsetTop)
                    }}/>
                    <Main ref={arrayOfRefs[0]}/>
                    <Portfolio ref={arrayOfRefs[1]}/>
                    <Prices ref={arrayOfRefs[2]}/>
                    <Reviews ref={arrayOfRefs[3]}/>
                    <ContactUs ref={arrayOfRefs[4]}/>
                </>
                }
            </Router>
        </main>

    );
}

export default App;
