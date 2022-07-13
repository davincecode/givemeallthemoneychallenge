import React from "react"
import ReactDOM from "react-dom/client"
import App from "./App"

import DonationsContextProvider from "./context/DonationsContext"

const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(
  <React.StrictMode>
    <DonationsContextProvider>
      <App />
    </DonationsContextProvider>
  </React.StrictMode>
)
