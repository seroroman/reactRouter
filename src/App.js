import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Home } from "./home";
import { Page1 } from "./Page1";
import { Page1DetailA } from "./Page1DetailA";
import { Page1DetailB } from "./Page1DetailB";
import { Page2 } from "./Page2";
import { Page3 } from "./Page3";
import "./styles.css";

export default function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
        <br />
        <Link to="/page3">Page3</Link>
      </div>

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route
          path="/page1"
          render={({ match: { url } }) => (
            <Switch>
              <Route exact path={url}>
                <Page1 />
              </Route>
              <Route exact path={`${url}/detailA`}>
                <Page1DetailA />
              </Route>
              <Route exact path={`${url}/detailB`}>
                <Page1DetailB />
              </Route>
            </Switch>
          )}
        ></Route>
        <Route path="/page2">
          <Page2 />
        </Route>
        <Route path="/page3">
          <Page3 />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
