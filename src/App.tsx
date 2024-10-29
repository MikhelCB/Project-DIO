import { BrowserRouter } from "react-router-dom";
import MainRoutes from "./routes";

import Menu from "./Components/menu/menu";

function App() {
  return (
    <BrowserRouter>
      <Menu />
      <MainRoutes />
    </BrowserRouter>
  );
}

export default App;
