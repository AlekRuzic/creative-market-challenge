import './App.scss';
import SellerApplicationForm from './components/SellerApplicationForm';
import logo from './assets/Logo.png';

function App() {
  return (
    <div className="App">
      <div className="header"><img src={logo} /></div>
      <SellerApplicationForm />
    </div>
  );
}

export default App;
