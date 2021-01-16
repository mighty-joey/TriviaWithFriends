import React from "react";
import AuthenticationButton from "./auth/authentication-button";

export default class Game extends React.Component {
  render() {
    return (
      <nav className="navbar navbar-light bg-light">
        <span className="navbar-brand mb-0 h1">Trivia With Friends</span>
        <span>
          <AuthenticationButton />
        </span>
      </nav>
    );
  }
}
