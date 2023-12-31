/**
 *  Copyright (c) 2018, The Regents of the University of California,
 *  through Lawrence Berkeley National Laboratory (subject to receipt
 *  of any required approvals from the U.S. Dept. of Energy).
 *  All rights reserved.
 *
 *  This source code is licensed under the BSD-style license found in the
 *  LICENSE file in the root directory of this source tree.
 */

import "./App.css";
import React, {Component} from 'react';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Prism from "prismjs"; // eslint-disable-line
import "prismjs/components/prism-typescript";
import "prismjs/themes/prism.css";

// import Intro from "./components/Intro";
// import Guide from "./components/Guide";
import Example from "./webcomponents/Example";
// import API from "./components/API";
// import Header from './Header';
// import Sidebar from './Sidebar';
import ScrollToTop from "./ScrollToTop";

import {bodyStyle, mainStyle, contentStyle} from './styles';

class App extends Component {
    render() {
        return(
            <Router>
                <div style={bodyStyle}>
                    {/* <Header /> */}
                    <Route component={ScrollToTop} />
                    <div style={mainStyle}>
                        <div style={contentStyle}>
                                    {"home "}
                            <Switch>
                                {/* <Route exact path="/" component={Intro}/> */}
                                {/* <Route path="/guide/:doc" component={Guide} /> */}
                                <Route path="/" component={Example} />
                                {/* <Route path="/api/:component" component={API} /> */}
                            </Switch>
                        </div>
                        {/* <Sidebar /> */}
                    </div>
                </div>
            </Router>
        )
    }
}

export default App;


