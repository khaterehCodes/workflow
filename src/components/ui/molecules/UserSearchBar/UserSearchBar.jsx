import Input from "../../atoms/customInput/Input";
import Icons from "../../atoms/icons/Icons";

function UserSearchBar({ query, setQuery }) {
  return (
    <div className="w-full flex justify-center mb-4">
      <div className="relative w-[1104px]">
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center pointer-events-none">
          <Icons name="search" />
        </div>
        <Input
          className="w-full h-[49px] border border-[#4763E4] rounded-[10px] pl-12 pr-4"
          placeholder="Rechercher un utilisateur..."
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserSearchBar;
