import Top3Card from "./top3card";

const Top3Space = () => {
  return (
    <div className="w-screen min-h-screen flex text-center flex-col py-4">
      <div className="text-white font-thin text-6xl py-8">
        Top 3 Contributors
      </div>
      <div className="flex-1 flex gap-8 flex-wrap justify-center items-center">
        <Top3Card />
        <Top3Card />
        <Top3Card />
      </div>
    </div>
  );
};

export default Top3Space;
