const ContributorCardRegular = () => {
  return (
    <div
      style={{
        backdropFilter: "blur(20px)",
      }}
      className=" bg-gray-800 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-2 border-gray-600 h-28 w-full flex"
    >
      <div className="h-full w-28 bg-white"></div>
      <div className="flex-1 flex flex-col md:flex-row justify-center items-center py-8 md:gap-8">
        <div className="text-white text-2xl font-thin">Krishna Mahato</div>
        <div className="flex">
          <div className="h-full flex flex-col text-left">
            <div className="text-white text-sm font-thin">Total Commits:</div>
            <div className="text-white text-sm font-thin">
              Total repositories:
            </div>
          </div>
          <div className="h-full flex flex-col">
            <div className="text-white text-sm font-thin">33</div>
            <div className="text-white text-sm font-thin">5</div>
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
