import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import humanPng from './images/human1.png';
import AccountOverview from "./pages/AccountOverview";
// import Test from "./pages/Test";
import RecipientSelect from "./pages/RecipientSelect";
import MoneyTransfer from "./pages/MoneyTransfer";


import './App.css';

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<AccountOverview />} index={true} /> {}
        <Route path="/RecipientSelect" element={<RecipientSelect />} index={true} />
        <Route path="/MoneyTransfer" element={<MoneyTransfer />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
