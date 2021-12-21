import React from "react";
import Personalia from "./components/Personalia";
import { useQuery } from "react-query";
import { navnUrl } from "./api/urls";
import { fetcher } from "./api/api";
import "./App.less";

const App = () => {
  const { data: personalia } = useQuery(navnUrl, fetcher);

  return (
    <main className="main">
      <div className="app">
        <Personalia navn={personalia?.navn} />
      </div>
    </main>
  );
};

export default App;
