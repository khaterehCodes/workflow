import { useSelector } from "react-redux";
import UserSearchBar from "../../molecules/UserSearchBar/UserSearchBar";
import UserTable from "../../molecules/UsersTable/UsersTable";
import useSearch from "../../../../core/hooks/UseSearch/UseSearch";

function UserListOrganisms() {
  const users = useSelector(state => state.data?.users || []);
  const { query, setQuery, filteredItems } = useSearch(users, user => user.noms);

  return (
    <>
      <h1 className="text-[#000000] w-[1104px] ml-6 text-[32px] font-semibold mb-6">
        Configuration
      </h1>
      <UserSearchBar query={query} setQuery={setQuery} />
      <UserTable users={filteredItems} />
    </>
  );
}

export default UserListOrganisms;
