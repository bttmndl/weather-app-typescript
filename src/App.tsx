import React, { useState } from 'react';
import './App.css';
import InputField from "./components/InputField";
import MainContent from "./components/MainContent";

function App() {

  const [inputValue, setInputValue] = useState<string>("");

  return (
    <div className="App">
      <div className='main-heading'>
        <h1 className="heading">What's The Weather?</h1>
      </div>
      <InputField setInputValue={setInputValue}/>
      <MainContent inputValue = {inputValue}/>
    </div>
  );
}

export default App;
