import React from "react";
import { useContext } from "react";
import Spinner from "../layout/Spinner.js";
import UserItem from "./UserItem.js";
import GithubContext from "../../context/github/GithubContext.js";
function UserResults() {
  const { users, loading } = useContext(GithubContext);
  // useEffect(() => {
  //   fetchUser();
  // });

  if (!loading) {
    return (
      <div className="grid grid-cols-1 gap-8 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-1">
        {users.map((user) => (
          <UserItem key={user.id} user={user} />
        ))}
      </div>
    );
  } else {
    return <Spinner />;
  }
}

export default UserResults;
