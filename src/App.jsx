import './STYLES/App.scss';
import Header from "./COMPONENTS/Header/Header";
import Footer from "./COMPONENTS/Footer/Footer";
import React from "react";
import AppRoutes from "./routes/Routes";

function App() {
  return (
      <div className="app">
          <Header />
          <AppRoutes />
          <Footer />
      </div>
  );
}

export default App;
