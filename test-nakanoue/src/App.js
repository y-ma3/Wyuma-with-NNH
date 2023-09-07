import logo from './logo.svg';
import humanPng from './images/human1.png';
import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';

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
    <div className="App">
      <div class="flex">
        <img src={humanPng} alt="picture" />
        <p className="user-name">{userName}</p>
      </div>
      <p className="account-number">口座番号:10000000</p>
      <p className="account-balance">預金残高:{accountBalance}</p>
    </div>
  );
}

export default App;
