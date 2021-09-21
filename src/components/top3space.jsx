import { useEffect, useState } from "react";
import { participants } from "../base";
import { getRepos, getTotalCommits, getUser } from "../utilities/github";
import { dynamicSort } from "../utilities/sort";
import Top3Card from "./top3card";

const Top3Space = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    participants.forEach((username) => {
      getUser(username).then((data) => {
        getTotalCommits(username).then((commits) => {
          getRepos(username).then((repos) => {
            setUsers((u) => [
              ...u,
              {
                totalCommits: commits.length,
                ...data,
                totalRepos: repos.length,
              },
            ]);
          });
        });
      });
    });
    return () => {
      setUsers([]);
    };
  }, []);

  return (
    <div className="w-screen min-h-screen flex text-center flex-col py-4">
      <div className="text-white font-thin md:text-6xl text-4xl py-8">
        Top 3 Contributors 🥳
      </div>
      <div className="flex-1 flex gap-8 flex-wrap justify-center items-center">
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
