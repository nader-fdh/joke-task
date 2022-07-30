import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import Page_01 from './pages/page_01';
import Page_02 from './pages/page_02';

function App() {
  return (
  
     <Router  >
      <div>
 

        <div>
          <Switch>
             <Route exact path="/" >
              <Page_01/>
             </Route>
             <Route exact path="/jokes/:jokeId">
              <Page_02/>
             </Route>
      
 
          </Switch>
        </div>
      </div>
    </Router>
  
 
 
  );
}

export default App;
