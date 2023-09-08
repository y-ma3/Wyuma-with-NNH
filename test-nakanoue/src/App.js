import { BrowserRouter, Route, Routes } from 'react-router-dom';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import logo from './logo.svg';
// import humanPng from './images/human1.png';
import AccountOverview from "./pages/AccountOverview";
// import Test from "./pages/Test";
import RecipientSelect from "./pages/RecipientSelect";
import MoneyTransfer from "./pages/MoneyTransfer";
import './App.css';


function App() {

  const [post, setPosts] = useState([])

  useEffect(() => {
    axios.get('http://localhost:3000')
    .then(res => {
        setPosts(res.data)
    })
  }, [])

  const userName = post.userName;
  const accountBalance = post.accountBalance;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<AccountOverview />} index={true} /> {}
        <Route path="/RecipientSelect" element={<RecipientSelect />} index={true} />
        <Route path="/MoneyTransfer" element={<MoneyTransfer />} />
      </Routes>
    </BrowserRouter>
//     <div className="App">
//       <div class="flex">
//         <img src={humanPng} alt="picture" />
//         <p className="user-name">{userName}</p>
//       </div>
//       <p className="account-number">口座番号:10000000</p>
//       <p className="account-balance">預金残高:{accountBalance}</p>
//     </div>
  );
}

export default App;
