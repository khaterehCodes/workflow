import React from "react";
import { Link, useLocation } from "react-router-dom";
import useBreadcrumbs from "use-react-router-breadcrumbs";

const routes = [    
    { path: "/", breadcrumb: "Utilisateurs" },
    { path: "/edituser", breadcrumb: "Edition d'un compte" },
    { path: "/base", breadcrumb: "Base" },
    { path: "/controle", breadcrumb: "Contrôle" },
    { path: "/controle/societe", breadcrumb: "Gestion des sociétés" },
    { path: "/controle/commissaires", breadcrumb: "Gestion des commissaires contrôleurs" },
    { path: "/controle/crca", breadcrumb: "CRCA" },
    { path: "/controle/settings", breadcrumb: "Paramètres de contrôle" },
  ];
  

export default function Breadcrumbs() {
  const breadcrumbs = useBreadcrumbs(routes);
  const location = useLocation();
  const hideHomePaths = ["/base", "/controle" , "/controle/societe"];
  const filteredBreadcrumbs =
    hideHomePaths.some((path) => location.pathname.startsWith(path))
      ? breadcrumbs.filter((b) => b.match.pathname !== "/")
      : breadcrumbs;

  return (
    <nav className="text-sm  ml-5 text-gray-600 flex items-center gap-2">
      {filteredBreadcrumbs.map(({ breadcrumb, match }, index) => (
        <span key={match.pathname} className="flex text-[17px] items-center">
          {index > 0 && (
            <span className="mx-1 text-gray-400">{">"}</span>
          )}
          {index === filteredBreadcrumbs.length - 1 ? (
            <span className="font-semibold text-[17px] text-[#4658AC]">{breadcrumb}</span>
          ) : (
            <Link to={match.pathname} className="hover:underline flex items-center">
              {breadcrumb}
            </Link> 
          )}
        </span>
      ))}
    </nav>
  );
}
