export const items = [
  { name: "Utilisateurs", route: "/", paths: ["/", "/edituser", "/userdetails"] },
  { name: "Base", route: "/base", paths: ["/base"] },
  { name: "Contrôle", route: "/controle", paths: ["/controle"] },
  { name: "Workflow", route: "/workflow", paths: ["/workflow"] },
  { name: "Alertes", route: "/alertes", paths: ["/alertes"] },
  { name: "Rôles", route: "/roles", paths: ["/roles"] },
  { name: "Préferences", route: "/preferences", paths: ["/preferences"] },
  { name: "Calendrier", route: "/calendrier", paths: ["/calendrier"] },
];

export const menuItems = [
  { icon: "dossier", label: "Dossier" },
  { icon: "projet", label: "Projet" },
  { icon: "direction", label: "Direction Technique" },
  { icon: "protection", label: "Protection" },
];
export const UsersColumn = [
  { key: "noms", label: "Noms" },
  { key: "prenoms", label: "Prénoms" },
  { key: "email", label: "E-mails" },
  { key: "telephone", label: "Téléphone" },
  { key: "statut", label: "Statut" },
  { key: "actions", label: "Actions" },
];
export const EvaluationMethodColumns = [
  { key: "name", label: "Nom" },
  { key: "description", label: "Description" },
  { key: "actions", label: "Actions" },
];

export const columns = [
  { key: "libelle", label: "Libellé", width: "300px" },
  { key: "codeISO", label: "Code ISO", width: "200px" },
  { key: "description", label: "Description", width: "400px" },
  { key: "actions", label: "Actions", width: "180px" },
];
export const statusStyles = {
  "Validé": "text-[#166534] bg-[#DCFCE7]",
  "Actif": "text-[#9A3412] bg-[#FFEDD5]",
  "Inactif": "text-[#991B1B] bg-[#FEE2E2]",

};
export const fields = [
  { label: "Adresse e-mail", name: "email", type: "email" },
  { label: "Numéro de téléphone", name: "telephone" },
  { label: "Nom", name: "noms" },
  { label: "Prénom", name: "prenoms" },
  { label: "Date de création de compte", name: "dateCreation", type: "date" },
  { label: "Date de dernière connexion", name: "dateDerniereConnexion", type: "date" },
];
