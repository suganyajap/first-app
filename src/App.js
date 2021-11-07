//import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <PricingTable />
    </div>
  );
}

function PricingTable(){
  return (
    <div className="price-container">
      <div class="free">
      <h5 className="heading">FREE</h5>
      <p><span className="price">$0</span>/month</p>
      <hr/>
      <ul class="list">
        <li><i class="fa fa-check" aria-hidden="true"></i> Single User</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> 5GB Storage</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Unlimited Public Projects</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Community Access</li>
        <li className="disabled"><i class="fa fa-times" aria-hidden="true"></i> Unlimited Private Projects</li>
        <li className="disabled"><i class="fa fa-times" aria-hidden="true"></i> Dedicated Phone Support</li>
        <li className="disabled"><i class="fa fa-times" aria-hidden="true"></i> Free Subdomain</li>
        <li className="disabled"><i class="fa fa-times" aria-hidden="true"></i> Monthly Status Reports</li>
      </ul>
      <button className="btn">BUTTON</button>
      </div>
      <div class="plus">
      <h5 className="heading">PLUS</h5>
      <p><span className="price">$9</span>/month</p>
      <hr/>
      <ul class="list">
        <li><i class="fa fa-check" aria-hidden="true"></i> <span className="highlight"> 5 User</span></li>
        <li><i class="fa fa-check" aria-hidden="true"></i> 50GB Storage</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Unlimited Public Projects</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Community Access</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Unlimited Private Projects</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Dedicated Phone Support</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Free Subdomain</li>
        <li className="disabled"><i class="fa fa-times" aria-hidden="true"></i> Monthly Status Reports</li>
      </ul>
      <button className="btn">BUTTON</button>
      </div>

      <div class="pro">
      <h5 className="heading">PRO</h5>
      <p><span className="price">$49</span>/month</p>
      <hr/>
      <ul class="list">
        <li><i class="fa fa-check" aria-hidden="true"></i> <span className="highlight"> Unlimitted User</span></li>
        <li><i class="fa fa-check" aria-hidden="true"></i> 150GB Storage</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Unlimited Public Projects</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Community Access</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Unlimited Private Projects</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Dedicated Phone Support</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> <span className="highlight">unlimitted</span> Free Subdomain</li>
        <li><i class="fa fa-check" aria-hidden="true"></i> Monthly Status Reports</li>
      </ul>
      <button className="btn">BUTTON</button>
      </div>
    </div>
  );
}

export default App;
