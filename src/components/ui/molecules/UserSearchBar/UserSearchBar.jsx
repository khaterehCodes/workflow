import Input from "../../atoms/customInput/Input";
import Icons from "../../atoms/icons/Icons";

function UserSearchBar({ query, setQuery,height, width = "1190px", placeholder = "Rechercher un utilisateur..." }) {
  return (
    <div className="w-full flex justify-center mb-4">
      <div className="relative" style={{ width , height}}>
        <div className="absolute left-4 top-1/2 -translate-y-1/2 w-6 h-6 flex items-center justify-center pointer-events-none">
          <Icons name="search" />
        </div>
        <Input
          className="w-full h-[49px] border border-[#4763E4] rounded-[10px] pl-12 pr-4"
          placeholder={placeholder}
          value={query}
          onChange={e => setQuery(e.target.value)}
        />
      </div>
    </div>
  );
}

export default UserSearchBar;
