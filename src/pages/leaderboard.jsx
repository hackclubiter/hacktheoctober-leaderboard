import AllContributors from "../components/allcontributors";
import Top3Space from "../components/top3space";
import { useEffect, useState } from "react";
import { participants } from "../base";
import { getRepos, getTotalCommits, getUser } from "../utilities/github";

const LeaderBoard = () => {
  const [users, setUsers] = useState([]);
  useEffect(() => {
    participants.forEach((username) => {
      getUser(username)
        .then((data) => {
          getTotalCommits(username)
            .then((commits) => {
              getRepos(username)
                .then((repos) => {
                  setUsers((u) => [
                    ...u,
                    {
                      ...data,
                      totalCommits: commits.length ? commits.length : 0,
                      totalRepos: repos.length ? repos.length : 0,
                    },
                  ]);
                })
                .catch(console.error);
            })
            .catch(console.error);
        })
        .catch(console.error);
    });

    return () => {
      setUsers([]);
    };
  }, []);
  return (
    <div className="bg-gray-900 w-screen min-h-screen">
      <div className="w-full h-20 bg-white flex justify-center items-center md:text-5xl text-4xl uppercase font-extrabold rounded-b-full shadow-2xl">
        🏆LeaderBoard🏆
      </div>
      <Top3Space users={users} />
      <AllContributors users={users} />
    </div>
  );
};

export default LeaderBoard;
