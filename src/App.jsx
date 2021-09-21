import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LeaderBoard from "./pages/leaderboard";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LeaderBoard />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
