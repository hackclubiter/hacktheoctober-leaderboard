import ContributorCardRegular from "./contributor-card-regular";

const AllContributors = () => {
  return (
    <div className="mw-screen min-h-screen flex text-center flex-col py-4">
      <div className="text-white font-thin text-6xl py-8">
        All Partcipants (10)
      </div>
      <div className="flex-1 flex gap-8 flex-col px-4 md:px-32">
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
        <ContributorCardRegular />
      </div>
    </div>
  );
};

export default AllContributors;
