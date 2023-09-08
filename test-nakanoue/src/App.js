import logo from './logo.svg';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
// import humanPng from './images/human1.png';
// import Test from "./pages/Test";
import RecipientSelect from "./pages/RecipientSelect";
import MoneyTransfer from "./pages/MoneyTransfer";
import AccountOverview from "./pages/AccountOverview";
import TransferSuccess from "./pages/TransferSuccess";
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';


function App() {

  const [post, setPosts] = useState([])
  const [data, setData] = useState({
    accountNumber: 10000000,
  });

  useEffect(() => {
    axios.post('http://localhost:5000/bank/user?accountNumber=10000000')
      .then(response => {
        console.log('データがサーバーに送信されました:', response.data);
      })
      .catch(error => {
        console.error('データの送信に失敗しました:', error);
      });
  }, [])

  // const imageURL = post.imageURL
  // const userName = post.userName;
  // const accountBalance = post.accountBalance;

  return (
    <BrowserRouter>
      <Routes>
        <Route path={`/`} element={<AccountOverview />} index={true} /> {}
        <Route path="/RecipientSelect" element={<RecipientSelect />} index={true} />
        {/* <Route path="/MoneyTransfer" element={<MoneyTransfer />} /> */}
        <Route path="/MoneyTransfer/:userName" element={<MoneyTransfer />} />
        <Route path="/TransferSuccess" element={<TransferSuccess />} />
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
