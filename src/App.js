import React from "react";
import { QueryClient, QueryClientProvider } from "react-query";
import Personalia from "./components/Personalia";
import "./App.less";

const App = () => {
  return (
    <QueryClientProvider client={new QueryClient()}>
      <main className="main">
        <div className="app">
          <Personalia />
        </div>
      </main>
    </QueryClientProvider>
  );
};

export default App;
