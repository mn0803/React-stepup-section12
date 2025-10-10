import { Route, Switch } from "react-router-dom";
import { LoginUserProvider } from "../../providers/LoginUserProvider";

import { Login } from "../pages/Login";
import { Page404 } from "../pages/Page404";
import { HeaderLayout } from "../templates/HeaderLayout";
import { homeRoutes } from "./HomeRoutes";

export const Router = () => {
  return (
    <Switch>
      <LoginUserProvider>
        <Route exact path="/">
          <Login />
        </Route>
        <Route
          path="/home"
          render={({ match: { url } }) => (
            <Switch>
              {homeRoutes.map((route) => (
                <Route
                  key={route.path}
                  exact={route.exact}
                  path={`${url}${route.path}`}
                >
                  <HeaderLayout> {route.children}</HeaderLayout>
                </Route>
              ))}
            </Switch>
          )}
        />
      </LoginUserProvider>
      <Route path="*">
        <Page404 />
      </Route>
    </Switch>
  );
};
