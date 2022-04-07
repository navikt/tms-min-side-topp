import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Personalia from "./components/Personalia";
import "./App.less";

const App = (props) => {
  console.log(props);

  props.emitter.emit("loaded", "loaded successfully");
  props.emitter.on("level", (level) => {
    console.log("Recieved level in min-side");
    console.log(level);
  });

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
