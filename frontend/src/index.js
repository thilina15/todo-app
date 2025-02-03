

// import React from "react";
// import ReactDOM from "react-dom";
// import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
// import App from "./App";

// // Create a QueryClient instance
// const queryClient = new QueryClient();

// ReactDOM.render(
//   <React.StrictMode>
//     {/* Wrap App with QueryClientProvider */}
//     <QueryClientProvider client={queryClient}>
//       <App />
//     </QueryClientProvider>
//   </React.StrictMode>,
//   document.getElementById("root")
// );




import React from "react";
import ReactDOM from "react-dom/client"; // Use `react-dom/client`
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import App from "./App";

const queryClient = new QueryClient();

// Create root
const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <App />
    </QueryClientProvider>
  </React.StrictMode>
);
