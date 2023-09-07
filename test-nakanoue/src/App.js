import logo from './logo.svg';
import humanPng from './images/human1.png';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="flex">
        <img src={humanPng} alt="picture" />
        <p className="user-name">TEST USER01</p>
      </div>
      <p className="account-number">口座番号:10000000</p>
      <p className="account-balance">預金残高:1000000</p>
    </div>
  );
}

export default App;
