/** @jsx h */
import { h, Component, render } from "preact";
import { Router } from "preact-router";
import AsyncRoute from 'preact-async-route';

import '../style/style.css'
import Nav from './nav/nav';
import Masthead from './masthead/masthead'
import Home from "../routes/home/home";
let new_scroll_position = 0;
class App extends Component {
    render() {
        return (
            <div id="root">
                <Masthead/>
                <Nav/>
                <Router>
                    <Home path="/" />
                    <AsyncRoute
                        path="/about"
                        getComponent={() =>
                            import('../routes/about/about').then(module => module.default)
                        }
                    />
                    <AsyncRoute
                        path="/profile/:optional?/:params?"
                        getComponent={() =>
                            import('../routes/profile/profile').then(module => module.default)
                        }
                    />
                    <AsyncRoute
                        path="/contact"
                        getComponent={() =>
                            import('../routes/contact/contact').then(module => module.default)
                        }
                    />

                    <Error type="404" default />
                </Router>
            </div>
        );
    }
}


/** fall-back route (handles unroutable URLs) */

const Error = ({ type, url }) => (
    <main className="error">
        <h2>Error {type}</h2>
        <p>It looks like we hit a snag.</p>
        <pre>{url}</pre>
    </main>
);


render(<App />, document.body, document.body.querySelector("#root"));