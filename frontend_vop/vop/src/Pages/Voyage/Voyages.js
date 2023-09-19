//page détaillant le voyage --> voir Figma "page voyage détaillé"
import Header from "../Accueil/components/Header";
import Footer from "../../componentsG/Footer";
import MainVoyage from "../Voyage/components/MainVoyage";
import italie1 from "../../media/images/italie1.jpg";
import italie2 from "../../media/images/italie2.jpg";
import italie3 from "../../media/images/italie3.jpg";
import "./Voyage.css";





export default function Voyage (){
return (
<>
 <Header/>
 <MainVoyage
 className="main"
 continent="Europe"
 pays="Italie"


 myImg1={italie1}
 myImg2={italie2}
 myImg3={italie3}


paragraphe="L'Italie constitue sans l'ombre d'un doute l'une des destinations les plus célèbres et appréciées du monde entier. La célèbre botte d'Europe du Sud abrite en effet d'incroyables trésors. On y découvre ainsi sa capitale, Rome, imprégnée d'une histoire millénaire. Ancien centre névralgique de l'Empire Romain, la capitale italienne abrite de nombreux monuments incontournables tels que le légendaire Colisée. L'Italie, ce sont aussi des milliers de kilomètres de côtes, idéales pour des vacances reposantes au soleil et au bord de la mer. La gastronomie italienne constitue également l'un des traits de caractères les plus emblématiques du pays européen. Pâtes en tout genre, pizzas napolitaines, tiramisu... Autant de spécialités qu'il ne faudra sous aucun prétexte manquer lors de son séjour. Entre les ruines de Pompéi et d'Herculanum, le volcan du Vésuve ou encore les villages colorés de Cinque Terre, l'Italie ne peut que surprendre et émerveiller."
/>
 <Footer/>
 
</>
);


}