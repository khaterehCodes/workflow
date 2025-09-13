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


export const tabs = [
    { id: 1, label: 'Société' },
    { id: 2, label: 'Commissaires contrôleurs' },
    { id: 3, label: 'CRCA' },
    { id: 4, label: 'Paramètres de contrôle' },
];

export const SociétéTabs = ['Sociétés','Pays','Villes','Branches','E-mail','Téléphone','Site web','Commissaire respo.','Nombre de contrôle','Actions',];

export const SociétéUsers = [
    { id: 1, name: 'Sit.', country: 'Cameroun', city: 'Douala', branch: 'VIE', email: 'contact@sit.cm', phone: '(+237) 233-333-333', web: 'www.gropamai.cm', company: 'Phasellus aliquet ac sed.', number: '02' },
    { id: 2, name: 'Augue.', country: 'Eget.', city: 'Proin eu eget.', branch: 'NON VIE', email: 'contacts@auguep.com', phone: '(+241) 033-333-333', web: 'www.khm-group.com', company: 'Ornare id malesuada.', number: '13' },
];

export const countries = [
    'Cameroun',
    'Eget',
    'France',
];

export const activeStatus = [
    'NON VIE',
    'VIE',
];

export const cities = [
    'Douala',
    'Proin',
];

export const commissairesTab = [
    'Noms',
    'Prenoms',
    'N° Pièce didentification',
    'Date de délivrence',
    'Lieu de délivrence',
    'E-mail',
    'URL WebDAV',
    'Numéro Tél.',
    'Actions',
];

export const commissairesUsers = [
    { id: 1, name: 'Foley', lastName: 'Alexander', identity: '101010101010101010', birth: '2018-06-23', area: 'CAM LT05', email: 'contact@gropamai.cm', web: 'www.domaine.cm', phone: '(+237) 233-333-333' },
    { id: 2, name: 'DOE', lastName: 'John', identity: '101010101010101010', birth: '2018-06-23', area: 'CAM LT05', email: 'contacts@khm-group.com', web: 'www.domaine.cm', phone: '(+241) 033-333-333' },
];

export const area = [
    'CAM LT05',
    'CAM LT0576',
];

export const CRCAtab = [
    'Noms',
    'Prenoms',
    'Numéro Tél.',
    'E-mail',
    'Date dajout',
    'Profil',
    'Actions',
];

export const CRCAitem = [
    { id: 1, name: 'Foley', lastName: 'Alexander', phone: '(+237) 233-333-333', email: 'contact@gropamai.cm', date: '2018-06-23', number: '.' },
    { id: 2, name: 'DOE', lastName: 'John', phone: '(+241) 033-333-333', email: 'contacts@khm-group.com', date: '2018-06-23', number: '.' },
];

export const controlSettingTabs = [
    'Libellé',
    'Description',
    'Actions',
];

export const controleArray = [
    { id: 1, label: 'Brigade test #1', description: '.' }
];

export const groupsControle = [
    { id: 1, label: 'Equipe #1', description: 'Première équipe de test' },
    { id: 2, label: 'Equipe #2', description: '.' },
    { id: 3, label: 'Equipe #3', description: '.' },
    { id: 4, label: 'Equipe #4', description: '.' },
];

export const dutyLists = [
    { id: 1, label: 'Essai digilente', description: '.' },
];