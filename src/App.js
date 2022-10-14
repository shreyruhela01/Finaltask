import React from "react";
import Events from "./components/Events";
import Home from './components/Home';
import Home2 from "./components/Home2";
import Review from "./components/Review";
import Collaboration from './components/Collaboration';
import Readme from "./components/Readme";

function App() {
  return (
    <div className="App">
     <Home />
     <Home2 />
     <Events />
     <Review />
     <Collaboration />
     <Readme />
    </div>
  );
}

export default App;
