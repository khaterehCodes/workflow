import { useLocation } from "react-router-dom";

function usePathName() {
   const location=useLocation();
   const pathName=location.pathname==='/'?'Utilisateurs':
   location.pathname.split('/').toLowerCase()
   return pathName.toLocaleLowerCase()
}

export default usePathName;