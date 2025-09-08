import Button from "../../atoms/customButton/Button";
import H1 from "../../atoms/customH1/H1";
import Icons from "../../atoms/icons/Icons";
import UserSearchBar from "../../molecules/UserSearchBar/UserSearchBar";
import { useState } from "react";
import UserPagination from "../UserPagination/UserPagination";
import Span from "../../atoms/customSpan/Span";
function CountryList() {
  const [query, setQuery] = useState("");

  return (
    <div className="bg-white p-4">
      <div className="flex justify-between items-center mb-4">
        <H1>Liste des pays</H1>
        <Button className={"bg-[#4763E4]"}>Ajouter <Icons name={"plus"}/></Button>
      </div>
      <UserSearchBar
        query={query}
        setQuery={setQuery}
        placeholder="Vous cherchez un pays ..."
      />
      <span>Libellé</span>
      <span>Code ISO</span>
      <span>Description</span>
      <span>Actions</span>
      <span>Tortor.      CMR           alexander.foley@gmail.com</span><button>Modifier</button><button>Supprimer</button>
      <span>Gabon        GAB            alexander.foley@gmail.com</span><button>Modifier</button><button>Supprimer</button>
      <hr />
      <span>02 pays</span>
  
    </div>
  );
}

export default CountryList;
