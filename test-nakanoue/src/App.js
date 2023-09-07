import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <div class="flex">
        <img src={humanPng} alt="picture" />
        <p className="user-name">TEST USER01</p>
      </div>
      <p class="account-number">口座番号：10000000</p>
    </div>
  );
}

export default App;
