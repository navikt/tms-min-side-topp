import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Personalia from "./components/Personalia";
import "./App.less";

const App = (props) => {
  props.emitter.on("level", (level) => {
    console.log("Recieved level in min-side-topp");
    console.log(level);
  });

  props.emitter.emit("loaded", "loaded successfully");

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
