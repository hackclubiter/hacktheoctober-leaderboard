import "./App.css";
import AllContributors from "./components/allcontributors";
import Top3Space from "./components/top3space";

function App() {
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <Top3Space />
      <AllContributors />
    </div>
  );
}

export default App;
