import ContributorCardRegular from "./contributor-card-regular";
import { dynamicSort } from "../utilities/sort";

const AllContributors = ({ users }) => {
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
