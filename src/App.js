import React from "react";
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from './components/home-component';
import Projects from './components/projects-component';
import Resources from './components/resources-component';
import Contact from './components/contact-component';



function App() {
  return (
    <Router>
      <div>
        <div>
          <nav className="navbar navbar-dark bg-dark  navbar-expand-lg">
            <div className="collapse navbar-collapse">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item active">
                  <Link className="nav-link" to="/">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/projects">Projects</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/resources">Resources</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link" to="/contact">Contact</Link>
                </li>

              </ul>
            </div>
          </nav>
        </div>

        <div>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/projects">
            <Projects />
          </Route>
          <Route exact path="/resources">
            <Resources />
          </Route>
          <Route exact path="/contact">
            <Contact />
          </Route>
        </div>
      </div>



    </Router >

  );
}

export default App;
