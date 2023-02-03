import { Helmet } from "react-helmet-async";
import Projects from "../components/Projects";
import { Project } from "../typings";
import emblaProject from "../../img/emblaProject.jpg";
import polderhockeyleagueProject from "../../img/polderhockeyleagueProject.jpg";
import cakevoorkidsProject from "../../img/cakevoorkidsProject.jpg";
import mhcschermenProject from "../../img/mhcschermenProject.png";

export default function ProjectPage() {
  let project: Project[] = [
    {
      id: 1,
      name: "Polder Hockey League",
      image: polderhockeyleagueProject,
      description:
        "Polder Hockey League is een hockey competitie. Georganiseerd door MHCFleovland.",
      url: "https://polderhockeyleague.nl/",
      technologies: ["Nextjs", "Tailwind", "Editor.js", "Strapi"],
    },
    {
      id: 2,
      name: "Embla Iep Fink",
      image: emblaProject,
      description:
        "Embla Iep Fink is een massagetherapie praktijk. Wij hebben een website gemaakt en een afspraak systeem.",
      url: "https://iepfink.nl",
      technologies: ["Laravel", "Tailwind", "Editor.js", "FullCalendar"],
    },
    {
      id: 3,
      name: "MHC InfoSchermen",
      image: mhcschermenProject,
      description:
        "MHC schermen is een web app om wedstrijd en club informatie te laten zien. Data word door webscraping van de website gehaald.",
      url: "https://github.com/MHCFlevoland/",
      technologies: ["Html", "Tailwind", "PHP", "JavaScript"],
    },
    {
      id: 4,
      name: "Cake voor Kids",
      image: cakevoorkidsProject,
      description:
        "Cake voor Kids is een stichting die kinderen die het niet zo breed hebben een taart geeft. Ik als vrijwilliger heb deze website gemaakt voor de stichting.",
      url: "https://cakevoorkids.nl/",
      technologies: ["Wordpress", "Divi", "Woocommerce"],
    },
  ];
  return (
    <>
      <Helmet>
        <title>Projects ~ @JCKLERK</title>
        <meta name="description" content="This are projects I made." />
        <link rel="canonical" href="/projects" />
      </Helmet>
      <Projects projects={project} />
    </>
  );
}
