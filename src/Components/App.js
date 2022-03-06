import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Login from "./Login";
import Home from "./Home";

function App() {
  const [isLogged, setIsLogged] = useState(false);

  function LogIn() {
    setIsLogged(true);
  }
  function LogOut() {
    setIsLogged(false);
  }

  return (
    <div>
      <Header logged={isLogged} logout={LogOut} />
      {isLogged ? <Home /> : <Login logged={LogIn} />}
      <Footer />
    </div>
  );
}

export default App;
