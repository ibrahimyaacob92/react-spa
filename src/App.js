import {TopBar} from './components'
import {Route, Switch, BrowserRouter as Router} from 'react-router-dom'
import './App.css'
import Navbar from './components/Navbar/Navbar'

function App() {
  return (
    <Router>
      <TopBar main={'Ibrahim Yaacob'}/>
      <Navbar/>
    </Router>

  );
}

export default App;
