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

export const tabs = [
    { id: 1, label: 'Société' },
    { id: 2, label: 'Commissaires contrôleurs' },
    { id: 3, label: 'CRCA' },
    { id: 4, label: 'Paramètres de contrôle' },
];

export const SociétéTabs=[
    'Sociétés',
    'Pays',
    'Villes',
    'Branches',
    'E-mail',
    'Téléphone',
    'Site web',
    'Commissaire respo.',
    'Nombre de contrôle',
    'Actions',
];

export const SociétéUsers=[
    {id:1,name:'Sit.',country:'Cameroun',city:'Douala',branch:'VIE',email:'contact@sit.cm',phone:'(+237) 233-333-333',web:'www.gropamai.cm',company:'Phasellus aliquet ac sed.',number:'02'},
    {id:2,name:'Augue.',country:'Eget.',city:'Proin eu eget.',branch:'NON VIE',email:'contacts@auguep.com',phone:'(+241) 033-333-333',web:'www.khm-group.com',company:'Ornare id malesuada.',number:'13'},
];

export const countries=[
    'Cameroun',
    'Eget',
    'France',
];

export const activeStatus=[
    'NON VIE',
    'VIE',
];

export const cities=[
    'Douala',
    'Proin',
];