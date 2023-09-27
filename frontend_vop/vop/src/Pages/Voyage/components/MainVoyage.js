import "../Voyage.css";
import DetailsVoyage from "./DetailsVoyage";
import italie1 from "../../../media/images/italie1.jpg";
import italie2 from "../../../media/images/italie2.jpg";
import italie3 from "../../../media/images/italie3.jpg";
import greece1 from "../../../media/images/greece1.jpg";
import greece2 from "../../../media/images/greece2.jpg";
import greece3 from "../../../media/images/greece3.jpg";
import finland1 from "../../../media/images/finland1.jpg";
import finland2 from "../../../media/images/finland2.jpg";
import finland3 from "../../../media/images/finland3.jpg";




export default function MainVoyage(props) {
    
        // Récupérez la valeur de la prop cName depuis l'URL (si vous utilisez react-router-dom)
        const searchParams = new URLSearchParams(window.location.search);
        const cName = searchParams.get("cName");
      
    return (
        <>
        {/*------ITALIE----*/}
         {/* Affichez le composant DetailsVoyage seulement si cName est "italie" */}
      {cName === "italie" && (
        <DetailsVoyage
        cName="italie"
        continent="Europe"
        pays="Italie"
       
       
        myImg1={italie1}
        myImg2={italie2}
        myImg3={italie3}
        date="Capitale : Rome"
        depart="2h de vol depuis Paris"
       
       paragraphe="L'Italie constitue sans l'ombre d'un doute l'une des destinations les plus célèbres et appréciées du monde entier. La célèbre botte d'Europe du Sud abrite en effet d'incroyables trésors. On y découvre ainsi sa capitale, Rome, imprégnée d'une histoire millénaire. Ancien centre névralgique de l'Empire Romain, la capitale italienne abrite de nombreux monuments incontournables tels que le légendaire Colisée. L'Italie, ce sont aussi des milliers de kilomètres de côtes, idéales pour des vacances reposantes au soleil et au bord de la mer. La gastronomie italienne constitue également l'un des traits de caractères les plus emblématiques du pays européen. Pâtes en tout genre, pizzas napolitaines, tiramisu... Autant de spécialités qu'il ne faudra sous aucun prétexte manquer lors de son séjour. Entre les ruines de Pompéi et d'Herculanum, le volcan du Vésuve ou encore les villages colorés de Cinque Terre, l'Italie ne peut que surprendre et émerveiller."
       
       />
      )}
       {/*------GREECE----*/}
       {cName === "grece" && (
       <DetailsVoyage
        cName="grece"
        continent="Europe"
        pays="Grèce"
       
       
        myImg1={greece1}
        myImg2={greece2}
        myImg3={greece3}
        date="Capitale : Athène"
        depart="3h15 de vol depuis Paris"
       
       paragraphe="Destination phare de la Méditerranée, la Grèce se démarque par une histoire riche et complexe, des paysages côtiers à couper le souffle et une culture singulière. Lors d'un séjour en Grèce, on a l'opportunité de découvrir certains des sites archéologiques les plus impressionnants et les mieux entretenus du monde entier. Ainsi, à l'occasion d'un passage dans la capitale, Athènes, on découvre l'incroyable Parthénon, niché au sommet d'une colline depuis laquelle il est possible d'admirer l'ensemble de la cité grecque. Bien sûr, de part et d'autre de ce pays qui ne fait qu'un avec la mer, on découvre des îles paradisiaques, et notamment au sein de l'archipel des Cyclades. Là-bas, apprenez-en davantage sur ces demeures blanches aux toitures bleues caractéristiques. Rendez-vous jusqu'en Crète pour faire la découverte du palais de Cnossos. Lors de votre séjour, goûtez certaines spécialités légendaires parmi lesquelles la moussaka et la feta.."
       />

       )}
        {/*------FINLAND----*/}
{cName === "finland" && (
       <DetailsVoyage
        cName="finland"
        continent="Europe"
        pays="Finlande"
       
       
        myImg1={finland1}
        myImg2={finland2}
        myImg3={finland3}
        date="du 6/10/2023 au 13/10/2023"
        depart="Paris"
       
       paragraphe="Située entre mer Adriatique et montagne, la Finlande se veut une destination nature par excellence. Les sommets enneigés promettent sports de glisse et le plein de sensations. Ses paysages parsemés d’innombrables lacs sont le terrain de jeu préféré des amateurs de randonnées. Le pays compte pas moins de 40 parcs nationaux qui possèdent une faune et une flore généreuse. Entre les aurores boréales visibles jusqu’en mars et le fameux soleil de minuit, en été, vos excursions vous donneront l’opportunité d’assister à des spectacles à couper le souffle. Au-delà de ses curiosités naturelles, le pays est riche d’un patrimoine exceptionnel. Pour une escapade culturelle, n’oubliez pas de visiter la belle Helsinki qui regorge de galeries d’art, de musées, de monuments fabuleux. Sur les îles Åland, vous découvrirez les traditions maritimes du pays. Villages de pêcheurs et musées spécialisés dévoilent une autre facette de la Finlande."
       />

       )}
       </>
    );
}