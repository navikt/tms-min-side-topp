import React from "react";
import ReactDOM from "react-dom";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";
import "./index.less";

const startMockWorker = async () => {
  const mock = await import("./mocks/browser");
  await mock.worker.start();
};

if (process.env.NODE_ENV === "development") {
  startMockWorker();
}

ReactDOM.render(
  <React.StrictMode>
    <QueryClientProvider client={new QueryClient()}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>,
  document.getElementById("mikrofrontend")
);
