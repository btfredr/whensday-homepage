import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Navigation from "./components/Navigation";

function App() {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <Router>
        <Navigation toggle={toggle} />
      </Router>
    </>
  );
}

export default App;
