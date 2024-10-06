import logo from './logo.svg';
import './App.css';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import Home from "./pages/Home";
import Download from "./pages/Download";
import React from "react";
import RecordingMenu from "./pages/RecordingMenu";
function App() {

  return (
      <div>
          <BrowserRouter>
              <Routes>
                  <Route path="/" element={<Home/>}>
                      <Route path="/App" element={<App/>}/>
                      <Route path="/recordingmenu" element={<RecordingMenu/>}/>
                      <Route path="/download" element={<Download/>}/>
                  </Route>
              </Routes>
          </BrowserRouter>

          <div className="flex flex-col justify-center align-middle items-center h-screen w-screen bg-white">
              <h1 className="">
                  Voicebank Maker
              </h1>
          </div>
      </div>
  )
}

export default App;
