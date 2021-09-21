import AllContributors from "../components/allcontributors";
import Top3Space from "../components/top3space";

const LeaderBoard = () => {
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <div className="w-full h-20 bg-white flex justify-center items-center md:text-5xl text-4xl uppercase font-extrabold rounded-b-full shadow-2xl">
        🏆LeaderBoard🏆
      </div>
      <Top3Space />
      <AllContributors />
    </div>
  );
};

export default LeaderBoard;
