import { Route, Switch, BrowserRouter as Router } from 'react-router-dom';
import './App.css';
import Product from './components/product'
import About from './components/About';
import Voucher from './components/Voucher';
import Faq from './components/Faq';
import Navigation from './components/Navigation';

function App() {
  return (
    <Router>
      <div className="App">
          <Navigation/>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/about' component={About} />
          <Route exact path='/products' component={Product} />
          <Route exact path='/voucher' component={Voucher} />
          <Route exact path='/faq' component={Faq} />
        </Switch>

      </div>
    </Router>
  );
}

export default App;


const Home = () => (
  <div>Home Page</div>
)