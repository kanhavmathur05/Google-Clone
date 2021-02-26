import logo from './logo.svg';
import './App.css';
import Home from './pages/Home';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import SearchPage from './pages/SearchPage'; 

function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
            <Route path="/search">
              <SearchPage />
            <h1>This is the search page</h1>
            </Route>
            <Route path="/">
                <Home/>
            </Route>  
        </Switch>  
      </Router>
    </div>
  );
}

export default App;
