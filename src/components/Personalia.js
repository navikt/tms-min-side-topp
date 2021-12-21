import React from "react";
import Panel from "nav-frontend-paneler";
import "./Personalia.less";

const Personalia = ({ navn }) => {
  return (
    <div className="personalia">
      <Panel className="personalia__panel">
        <h1>Hei, {navn}</h1>
        <p>Dette kommer til å bli en awesome mikrofrontend! 😊🎉</p>
      </Panel>
    </div>
  );
};

export default Personalia;
