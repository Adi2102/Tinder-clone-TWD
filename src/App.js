import "./App.css";
import Header from "./components/Header";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import TinderCards from "./components/TinderCards";
import AddUser from "./components/AddUser";

function App() {
  return (
    <Router>
      <div className="App">
        <Header />
        <Switch>
          <Route path="/add_user">
            <AddUser />
          </Route>
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
