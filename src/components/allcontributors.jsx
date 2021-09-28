import ContributorCardRegular from "./contributor-card-regular";
import { useEffect, useState } from "react";
import { participants } from "../base";
import { getRepos, getTotalCommits, getUser } from "../utilities/github";
import { dynamicSort } from "../utilities/sort";

const AllContributors = () => {
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
    <div className="mw-screen min-h-screen flex text-center flex-col py-4">
      <div className="text-white font-thin text-4xl md:text-6xl py-8">
        All Participants ({users.length})
      </div>
      <div className="flex-1 flex gap-8 flex-col px-4 md:px-32">
        {users
          .sort(dynamicSort("totalCommits"))
          .reverse()
          .map((user, idx) => {
            return <ContributorCardRegular user={user} key={idx} />;
          })}
      </div>
    </div>
  );
};

export default AllContributors;
