import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import "./App.css";
import { fetchData } from "./reducer/actions";
import { NavBar } from "./components/NavBar.jsx";
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchData());
  }, []);
  
  return (
    <div className="App">
      <NavBar />      
    </div>
  );
}

export default App;
