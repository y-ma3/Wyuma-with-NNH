import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import humanPng from './images/human1.png';
// import Home from "./pages/Home";
import Test from "./pages/Test";
import TestSend from "./pages/TestSend";

import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<Test />} index={true} /> {}
        <Route path="/testsend" element={<TestSend />} index={true} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
