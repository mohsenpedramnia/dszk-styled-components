import React from "react";

import "./App.css";

import { BrowserRouter as Router } from "react-router-dom";
import { Helmet } from "react-helmet";

import Home from "./pages";

function App() {
  return (
    <>
      <Helmet>
        <title>
          دایا سیمرغ زیگورات کیان daya simurgh ziggurat kian dayasimurgh
        </title>
        <meta
          name="description"
          content="شرکت مهندسی بازرسی سیمرغ زیگورات کیان Daya Simurgh Ziggurat Kian Engineering Inspection CO , dayasimurgh"
        />
      </Helmet>
      <Router>
        <Home />
      </Router>
    </>
  );
}

export default App;
