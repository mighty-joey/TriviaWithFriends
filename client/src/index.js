import ReactDOM from "react-dom";
import Game from "./components/game";
import "./index.css";
import { BrowserRouter } from "react-router-dom";
import Auth0ProviderWithHistory from "./auth/auth0-provider";

ReactDOM.render(
  <BrowserRouter>
    <Auth0ProviderWithHistory>
      <Game />
    </Auth0ProviderWithHistory>
  </BrowserRouter>,
  document.getElementById("root")
);
