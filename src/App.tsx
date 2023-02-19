import React, { useState } from 'react';
import './App.css';
import {BrowserRouter, Routes, Route} from 'react-router-dom';
import InputField from "./components/InputField";
import MainContent from "./components/MainContent";
import Weather from './components/Weather';

function App() {

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <BrowserRouter>
      <div className="App">
        <div className='main-heading'>
          <h1 className="heading">What's The Weather?</h1>
        </div>
        <InputField setInputValue={setInputValue}/>
        <Routes>
          <Route path="/" element={<MainContent inputValue = {inputValue}/>} />
          <Route path="/capital/:id" element={<Weather />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
