import accelerio from "./assets/images/accelerio.png";
import placevendome from "./assets/images/404.png";
import comptax from "./assets/images/comptax.png";
import interfast from "./assets/images/interfast.png";
import inveskal from "./assets/images/inveskal.png";
import lgl from "./assets/images/lgl.png";
import area from "./assets/images/area.png";

const logotext = "ENZO";
const meta = {
  title: "Enzo Alaimo",
  description:
    "Bonjour, je m'appelle Enzo ALAIMO. Je suis un développeur Web Full Stack français et passionné actuellement en Angleterre.",
};

const introdata = {
  title: "Enzo Alaimo",
  animated: {
    first: "Développeur Web FrontEnd",
    second: "Développeur Mobile",
    third: "Passionné de nouvelles technologies",
  },
  description:
    "Bonjour, je m'appelle Enzo ALAIMO. Je suis un développeur Web Full Stack français et passionné actuellement en Angleterre.",
  your_img_url: "https://images.unsplash.com/photo-1514790193030-c89d266d5a9d",
};

const dataabout = {
  title: "A propos de moi",
  aboutme:
    "Je suis un développeur Web FrontEnd français et passionné actuellement en Angleterre. J'ai commencé à travailler en tant que développeur Web en 2022. J'aime apprendre de nouvelles technologies et je suis toujours prêt à relever de nouveaux défis.",
};
const worktimeline = [
  {
    jobtitle: "Développeur Web FrontEnd",
    where: "ACCELERIO",
    date: "Septembre 2021 - Décembre 2021",
  },
  {
    jobtitle: "Développeur Web/Mobile FrontEnd",
    where: "Asig-Tech",
    date: "Octobre 2022 - Mars 2023",
  },
  {
    jobtitle: "Développeur Web FullStack",
    where: "InterFast",
    date: "Avril 2023 - Août 2023",
  },
  {
    jobtitle: "Développeur Web FrontEnd",
    where: "Freelance",
    date: "Depuis Janvier 2023",
  },
];

const skills = [
  {
    name: "React",
    value: 90,
  },
  {
    name: "TypeScript",
    value: 85,
  },
  {
    name: "Javascript",
    value: 80,
  },
  {
    name: "HTML/CSS",
    value: 90,
  },
  {
    name: "Svelte",
    value: 80,
  },
  {
    name: "Python",
    value: 60,
  },
  {
    name: "React Native / Flutter",
    value: 70,
  },
];

const services = [
  {
    title: "Landing Pages",
    description:
      "Fort de mon expérience, je suis capable de créer des landing pages qui sauront convenir à vos besoins et qui mettrons en valeur vos projets.",
  },
  {
    title: "Applications Web",
    description:
      "Je suis capable de créer des applications Web qui sauront répondre à vos besoins tel que de la gestion interne, des sites vitrines, etc.",
  },
  {
    title: "Applications Mobiles",
    description:
      "Besoin d'une application mobile ? Je suis capable de créer des applications mobiles pour Android et iOS qui vous offririons une expérience utilisateur unique.",
  },
];

const dataportfolio = [
  {
    img: accelerio,
    description:
      "Travail FrontEnd pour une marketplace sur les sports automobiles.",
    link: "https://www.accelerio.com/",
  },
  {
    img: placevendome,
    description:
      "Création d'un backoffice permettant une meilleure gestion des commandes et des stocks.",
    link: "https://404placevendome.com/",
  },
  {
    img: comptax,
    description:
      "Développement d'une application web pour une entreprise de comptabilité. Réalisation complète de l'interface utilisateur ainsi que du site vitrine",
    link: "http://dev-showcase-compta-x.s3-website.eu-west-3.amazonaws.com/",
  },
  {
    img: interfast,
    description:
      "Amélioration de l'application web, et refonte d'une application mobile pour une entreprise de gestion de chantiers dans le BTP. J'ai travaillé sur l'interface utilisateur et la mise en place de nouvelles fonctionnalités.",
    link: "https://inter-fast.fr/",
  },
  {
    img: inveskal,
    description:
      "Correction de bugs et amélioration de l'interface utilisateur pour une application de finance.",
    link: "https://www.altiainvestment.com/InvesKal",
  },
  {
    img: lgl,
    description:
      "Travail sur l'amélioratiopn de l'interface utilisateur de l'app mobile pour une entreprise de vente de jeux de société.",
    link: "https://legrenierludique.fr/",
  },
  {
    img: area,
    description:
      "Projet d'école permettant de créer et d'automatiser certaines applications.",
    link: "#",
  },
  {
    img: placevendome,
    description:
      "Réalisation du site vitrine pour une entreprise de création de bijoux.",
    link: "https://404placevendome.com/",
  },
];

const contactConfig = {
  YOUR_EMAIL: "contact@enzo-alaimo.dev",
  YOUR_FONE: "+33 7 67 34 49 75",
  description:
    "Si vous voulez en savoir plus sur moi ou si vous avez un projet en tête, n'hésitez pas à me contacter. Je serais ravi de vous répondre.",
  YOUR_SERVICE_ID: "service_fle5exq",
  YOUR_TEMPLATE_ID: "template_nn3i816",
  YOUR_USER_ID: "8QQsM5e-63gT-uTR1",
};

const socialprofils = {
  github: "https://github.com/Enzo-ALAIMO",
  linkedin: "https://linkedin.com",
};
export {
  meta,
  dataabout,
  dataportfolio,
  worktimeline,
  skills,
  services,
  introdata,
  contactConfig,
  socialprofils,
  logotext,
};
