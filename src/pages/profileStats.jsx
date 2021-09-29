import { useEffect, useState } from "react";
import { getRepos, getTotalCommits, getUser } from "../utilities/github";
import { useParams } from "react-router-dom";
import { Spin } from "antd";
import MultiAxisLine from "../components/multiAxisLine";

const ProfileStats = () => {
  const { githubId } = useParams();
  const [user, setUser] = useState(null);
  useEffect(() => {
    getUser(githubId)
      .then((data) => {
        getTotalCommits(githubId)
          .then((commits) => {
            getRepos(githubId)
              .then((repos) => {
                setUser({
                  ...data,
                  totalCommits: commits,
                  totalRepos: repos,
                });
              })
              .catch(console.error);
          })
          .catch(console.error);
      })
      .catch(console.error);
    return () => {};
    // eslint-disable-next-line
  }, []);

  if (!user) {
    return (
      <div className="w-screen h-screen text-white text-xl font-light bg-gray-900 flex justify-center items-center">
        Loading details&nbsp;&nbsp; <Spin />
      </div>
    );
  }

  return (
    <div className="min-h-screen w-screen bg-gray-900">
      <div className="w-full bg-white p-4 flex gap-4 md:flex-row flex-col">
        <div className="md:w-1/2 w-full h-full flex justify-center items-center">
          <div className="rounded-full w-40 h-40 border-2 shadow-lg border-black">
            <img
              className="w-full h-full rounded-full"
              src={user.avatar_url}
              alt="avatar"
            />
          </div>
        </div>
        <div className="md:w-1/2 w-full flex flex-col md:items-start items-center justify-center">
          <a
            href={user.html_url}
            target="_blank"
            rel="noreferrer"
            className="text-2xl text-black font-bold hover:underline"
          >
            @{user.login}
          </a>
          <div className="font-light">
            <span className="font-bold">{user.name ? user.name : ""}</span>
            {user.location ? `,📍 ${user.location}` : ""}
          </div>
          {user.bio ? (
            <div className="font-light italic">{user.bio}</div>
          ) : null}
          <div className="font-bold">
            Public repositories: {user.public_repos}
          </div>
          <div className="font-bold flex gap-4">
            <span>Followers:&nbsp;{user.followers}</span>
            <span>Following:&nbsp;{user.following}</span>
          </div>
        </div>
      </div>
      <div className="w-full flex items-center flex-col">
        <div className="w-full p-6 text-center text-white text-3xl md:text-5xl font-extralight">
          ~: October statistics :~
        </div>
        <div className="w-full flex text-white justify-center items-center p-4">
          <MultiAxisLine totalCommits={user.totalCommits} />
        </div>
        <div className="flex w-full md:w-3/4 flex-col gap-4 p-2 px-8">
          <div className="w-full p-6 text-center text-white text-3xl md:text-4xl font-extralight">
            All Contributions ({user.totalCommits.length})
          </div>
          {user.totalCommits.length ? (
            user.totalCommits.map((contrib, idx1) => {
              return (
                <div key={idx1} className="w-full border flex flex-col">
                  <div className="w-full bg-gray-800 p-2 text-white text-lg font-bold">
                    {contrib.repo.url.slice(29, contrib.repo.url.length)}
                  </div>
                  <div className="w-full text-white flex flex-col">
                    {contrib.payload.commits.map((commit, idx2) => {
                      return (
                        <a
                          key={idx2}
                          target="_blank"
                          rel="noreferrer"
                          href={`https://github.com/${commit.url.slice(
                            29,
                            commit.url.length
                          )}`}
                          className="w-full text-white hover:text-gray-50 hover:underline  p-2"
                        >
                          {commit.message}
                        </a>
                      );
                    })}
                  </div>
                </div>
              );
            })
          ) : (
            <div className="w-full text-white text-center text-lg font-thin">
              Oops! No contributions. :(
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProfileStats;
