import { useState } from "react";
import { Link } from "react-router-dom";

const ContributorCardRegular = ({ user }) => {
  const [over, setOver] = useState(false);
  return (
    <div
      onMouseEnter={() => {
        setOver(true);
      }}
      onMouseLeave={() => {
        setOver(false);
      }}
      style={{
        backdropFilter: "blur(20px)",
      }}
      className={`${
        over ? "bg-white" : "bg-gray-800"
      } hover:scale-105 transform duration-300 bg-clip-padding backdrop-filter backdrop-blur-xl ${
        over ? "" : "bg-opacity-60"
      } border-2 border-gray-600 h-28 w-full flex cursor-pointer`}
    >
      {over ? (
        <Link
          to={`/${user.login}`}
          className="w-full h-full hover:text-black text-black flex justify-center items-center font-extralight text-2xl"
        >
          View Stats
        </Link>
      ) : (
        <>
          <div className="h-full w-28">
            <img
              style={{
                height: "100%",
                width: "100%",
              }}
              src={user.avatar_url}
              alt="avatar"
            />
          </div>
          <div className="flex-1 flex flex-col md:flex-row justify-center items-center py-8 md:gap-8">
            <div className="text-white text-lg font-light md:text-2xl">
              {user.name}
            </div>
            <div className="flex">
              <div className="h-full flex flex-col text-left">
                <div className="text-white text-sm font-thin">
                  Total Contributions:
                </div>
                <div className="text-white text-sm font-thin">
                  Total repositories:
                </div>
              </div>
              <div className="h-full flex flex-col">
                <div className="text-white text-sm font-thin">
                  &nbsp;{user.totalCommits}
                </div>
                <div className="text-white text-sm font-thin">
                  &nbsp;{user.totalRepos}
                </div>
              </div>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default ContributorCardRegular;
