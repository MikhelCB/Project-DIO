import { Switch, Route } from "react-router-dom";

import home from "./pages/Home";
import perfil from "./pages/perfil";

const MainRoutes = () => {
  return (
    <Switch>
      <Route path="/" exact={true} component={home} />
      <Route path="/perfil" exact={true} component={perfil} />
    </Switch>
  );
};

export default MainRoutes;
