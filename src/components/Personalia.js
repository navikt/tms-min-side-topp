import React from "react";
import { useQuery } from "react-query";
import { navnUrl } from "../api/urls";
import { fetcher } from "../api/api";
import Panel from "nav-frontend-paneler";
import "./Personalia.less";

const Personalia = () => {
  const { data } = useQuery(navnUrl, fetcher, { retry: false });

  return (
    <div className="personalia">
      <Panel className="personalia__panel">
        <h2>Dette kommer til å bli en awesome mikrofrontend! 😊🎉</h2>
      </Panel>
    </div>
  );
};

export default Personalia;
