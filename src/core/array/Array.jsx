
export const items = [
  { name: "Utilisateurs", route: "/" },
  { name: "Base", route: "/base" },
  { name: "Contrôle", route: "/controle" },
  { name: "Workflow", route: "/workflow" },
  { name: "Alertes", route: "/alertes" },
  { name: "Rôles", route: "/roles" },
  { name: "Préferences", route: "/preferences" },
  { name: "Calendrier", route: "/calendrier" },
];
export const menuItems = [
    { icon: "dossier", label: "Dossier" },
    { icon: "projet", label: "Projet" },
    { icon: "direction", label: "Direction Technique" },
    { icon: "protection", label: "Protection" },
];
export const users = [
    { noms: "Doe", prenoms: "John", email: "john.doe@example.com", telephone: "+33 123456789", statut: "Validé", dateCreation: "2023-01-15", dateDerniereConnexion: "2023-08-30" },
    { noms: "Dupont", prenoms: "Marie", email: "marie.dupont@example.com", telephone: "+33 987654321", statut: "Actif", dateCreation: "2022-11-20", dateDerniereConnexion: "2023-08-29" },
    { noms: "Martin", prenoms: "Paul", email: "paul.martin@example.com", telephone: "+33 456789123", statut: "Inactif", dateCreation: "2023-02-10", dateDerniereConnexion: "2023-07-15" },
    { noms: "Bernard", prenoms: "Claire", email: "claire.bernard@example.com", telephone: "+33 654321987", statut: "Validé", dateCreation: "2021-09-05", dateDerniereConnexion: "2023-08-25" },
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
  