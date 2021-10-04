import { dynamicSort } from "../utilities/sort";
import Top3Card from "./top3card";

const Top3Space = ({ users }) => {
  return (
    <div className="w-screen flex text-center flex-col py-4">
      <div className="text-white font-thin md:text-6xl text-4xl py-8">
        Top 3 Contributors 🥳
      </div>
      <div className="flex gap-8 flex-wrap justify-center px-4 items-center">
        {users
          .sort(dynamicSort("totalCommits"))
          .reverse()
          .slice(0, 3)
          .map((user, idx) => {
            return <Top3Card user={user} key={idx} idx={idx} />;
          })}
      </div>
    </div>
  );
};

export default Top3Space;
