const ContributorCardRegular = ({ user }) => {
  return (
    <div
      style={{
        backdropFilter: "blur(20px)",
      }}
      className=" bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-2 border-gray-600 h-28 w-full flex"
    >
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
            <div className="text-white text-sm font-thin">Total Commits:</div>
            <div className="text-white text-sm font-thin">
              Total repositories:
            </div>
          </div>
          <div className="h-full flex flex-col">
            <div className="text-white text-sm font-thin">
              {user.totalCommits}
            </div>
            <div className="text-white text-sm font-thin">
              &nbsp;{user.totalRepos}
            </div>
          </div>
        </div>
      </div>
      <div className="h-full w-28 flex justify-center items-center">
        <span className="bg-white px-3 py-1 rounded-3xl text-sm font-bold cursor-pointer">
          Graph
        </span>
      </div>
    </div>
  );
};

export default ContributorCardRegular;
