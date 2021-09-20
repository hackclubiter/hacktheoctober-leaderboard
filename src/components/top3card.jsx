const Top3Card = () => {
  return (
    <div
      style={{
        width: "390px",
        height: "490px",
        backdropFilter: "blur(20px)",
      }}
      className=" bg-gray-700 bg-clip-padding backdrop-filter backdrop-blur-xl bg-opacity-60 border-2 border-gray-600 rounded-xl shadow-2xl px-4 flex flex-col"
    >
      <div className="w-full h-10 bg-white rounded-b-3xl flex justify-center items-center font-bold text-xl">
        Rank 1
      </div>
      <div className="h-1/2 w-full flex justify-center items-center flex-col">
        <div className="w-40 h-40 bg-white rounded-full"></div>
        <div className="text-white text-3xl py-2">Krishna Mahato</div>
      </div>
      <hr />
      <div className="flex-1 flex flex-col p-4 py-2">
        <div className="text-white text-2xl font-light">Insights ~</div>
        <div className="flex-1 flex py-8">
          <div className="w-2/3 h-full flex flex-col text-left">
            <div className="text-white text-sm font-thin">Total Commits:</div>
            <div className="text-white text-sm font-thin">
              Total repositories:
            </div>
          </div>
          <div className="w-1/3 h-full flex flex-col">
            <div className="text-white text-sm font-thin">33</div>
            <div className="text-white text-sm font-thin">5</div>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <span className="bg-white p-3 rounded-3xl font-bold cursor-pointer shadow-2xl">
          View Graph
        </span>
      </div>
    </div>
  );
};

export default Top3Card;
