import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Layout from "./pages/Layout";
import Test from "./pages/Test";
import NoPage from "./pages/NoPage";
import React from "react";
function App() {

  return (
      /*
    <div>
      <header>
        <h1 className="p-5">
          hello
        </h1>

        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/Test.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
    */

      <div className="flex h-screen">
          <BrowserRouter className="flex">
              <Routes>
                  <Route path="/" element={<Layout />}>
                      <Route path="/app" element={<App />} />
                      <Route path="/test" element={<Test />} />
                      <Route path="/*" element={<NoPage />} />
                  </Route>
              </Routes>
          </BrowserRouter>
      </div>
  )
}

export default App;
