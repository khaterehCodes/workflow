import P from "../../atoms/customP/P";
import Input from "../../atoms/customInput/Input";
import Icons from "../../atoms/icons/Icons";
import Button from "../../atoms/customButton/Button";
import { useNavigate } from "react-router-dom";

function UserSearchBar() {
  const navigate = useNavigate();

  const handleAdd = () => {
    navigate("/edituser");
  };

  return (
    <div className="flex justify-center mt-10">
      <div className="flex flex-col items-start space-y-4 w-[1104px]">
        <P className="text-black text-[32px] font-semibold">Configuration</P>

        <div className="relative w-full">
          <div className="absolute left-3 top-1/2 -translate-y-1/2 w-10 h-10 flex items-center justify-center">
            <Icons name="search" />
          </div>
          <Input
            className="w-full h-[49px] border border-[#4763E4] rounded-[10px] pl-14 pr-4"
            placeholder="Vous cherchez quel utilisateur ..."
          />
        </div>

        <Button onClick={handleAdd}
          className="bg-[#4763E4] h-[48px] w-[226px] text-[18px] font-light rounded-[10px] text-white flex items-center justify-center gap-x-2">
          Ajouter un utilisateur
          <Icons name="plus" />
        </Button>
      </div>
    </div>
  );
}

export default UserSearchBar;
