import {
  BrowserRouter as Router,
  Switch,
  Route,
} from 'react-router-dom';
import './App.css';
import Navbar from './components/navbar';
import Home from './components/Home';
import Tech from './components/Tech';
import Sport from './components/Sport'
import Entertainment from './components/Entertainment';
import Hedline from './components/Headline';

function App() {

  return (
    <>
      <Router>
        <Navbar />
        <Hedline />
        <div className='app'>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/tech" exact component={Tech} />
            <Route path="/sport" exact component={Sport} />
            <Route path="/entertainment" exact component={Entertainment} />
          </Switch>
        </div>
      </Router>
    </>
  );
}

export default App;
