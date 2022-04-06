import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Personalia from "./components/Personalia";
import "./App.less";

const App = ({ emitter }) => {
  console.log(emitter);
  emitter.on("level", (level) => console.log(level));

  return (
    <main className="main-topp">
      <div className="app">
        <QueryClientProvider client={new QueryClient()}>
          <Personalia />
        </QueryClientProvider>
      </div>
    </main>
  );
};

export default App;
