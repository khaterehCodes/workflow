import { useSelector } from "react-redux";
import UserSearchBar from "../../molecules/UserSearchBar/UserSearchBar";
import UsersTable from "../../molecules/UsersTable/UsersTable";
import useSearch from "../../../../core/hooks/UseSearch/UseSearch";
function UserListOrganisms() {
    const users = useSelector(state => state.users.list);
    const { query, setQuery, filteredItems } = useSearch(users, user => user.noms);

    return (
        <>
            <UserSearchBar query={query} setQuery={setQuery} />
            <UsersTable users={filteredItems} />
        </>
    );
}

export default UserListOrganisms;
