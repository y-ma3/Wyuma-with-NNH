import { Link } from "react-router-dom";
import humanPng from '../images/human1.png';
import '../App.css';

function Home() {
  return (
    <div className="App">
      <div class="flex">
        <img src={humanPng} alt="picture" />
        <p className="user-name">TEST USER01</p>
      </div>
      <p className="account-number">口座番号:10000000</p>
      <p className="account-balance">預金残高:1000000</p>
      <button type="submit" name="submitButton">submit</button><br/>
    </div>
  );
}

export default Home;