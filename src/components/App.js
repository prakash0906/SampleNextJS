import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import React from 'react';
import Page1 from './page1';
import Page2 from './page2';
import Refresh from './Refresh';

export default () => {
  return (
    <React.Fragment>
      <h1>React example</h1>
      <Router>
        <div>
          <nav>
            <ul>
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="/page1">Page 1</Link>
              </li>
              <li>
                <Link to="/page2">Page 2</Link>
              </li>
              <li>
                <Link to="/sample">SSR Sample Page</Link>
              </li>

              <li>
                <Link to="/sample2">SSR Sample Page 2</Link>
              </li>
            </ul>
          </nav>

          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Switch>
            <Route path="/page1">
              <Page1 />
            </Route>
            <Route path="/page2">
              <Page2 />
            </Route>
            <Route path="/sample">
              <Refresh />
            </Route>

            <Route path="/sample2">
              <Refresh />
            </Route>
            <Route path="/">
              <h2>Home page</h2>
            </Route>
            <Route path="*">
              <h2>Page not found!!</h2>
            </Route>
          </Switch>
        </div>
      </Router>
    </React.Fragment>
  );
};
