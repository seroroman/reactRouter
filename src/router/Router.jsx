import { Route, Switch } from "react-router-dom";
import { Home } from "../home";
import { Page3 } from "../Page3";
import { page1Routes } from "./Page1Routes";
import { page2Routes } from "./Page2Routes";
export const Router = () => {
  return (
    <Switch>
      <Route exact path="/">
        <Home />
      </Route>
      <Route
        path="/page1"
        render={({ match: { url } }) => (
          <Switch>
            {page1Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {console.log(route.path)}
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route
        path="/page2"
        render={({ match: { url } }) => (
          <Switch>
            {page2Routes.map((route) => (
              <Route
                key={route.path}
                exact={route.exact}
                path={`${url}${route.path}`}
              >
                {console.log(route.path)}
                {route.children}
              </Route>
            ))}
          </Switch>
        )}
      ></Route>
      <Route path="/page3">
        <Page3 />
      </Route>
    </Switch>
  );
};
