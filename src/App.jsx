import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import LeaderBoard from "./pages/leaderboard";
import ProfileStats from "./pages/profileStats";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/">
          <LeaderBoard />
        </Route>
        <Route path="/:githubId">
          <ProfileStats />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

export default App;
