import { Helmet } from "react-helmet-async";
import Aboutme from "../components/Aboutme";
import Banner from "../components/Banner";
import Projects from "../components/Projects";
import { Project } from "../typings";
import emblaProject from "../../img/emblaProject.jpg";

export default function HomePage() {
  let project: Project[] = [
    {
      id: 1,
      name: "Embla Iep Fink",
      image: emblaProject,
      description:
        "Embla Iep Fink is een massagetherapie praktijk. Wij hebben een website gemaakt en een afspraak systeem.",
      url: "https://iepfink.nl",
      technologies: ["Laravel", "Tailwind", "Editor.js", "FullCalendar"],
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
      name: "Embla Iep Fink",
      image: emblaProject,
      description:
        "Embla Iep Fink is een massagetherapie praktijk. Wij hebben een website gemaakt en een afspraak systeem.",
      url: "https://iepfink.nl",
      technologies: ["Laravel", "Tailwind", "Editor.js", "FullCalendar"],
    },
    {
      id: 4,
      name: "Embla Iep Fink",
      image: emblaProject,
      description:
        "Embla Iep Fink is een massagetherapie praktijk. Wij hebben een website gemaakt en een afspraak systeem.",
      url: "https://iepfink.nl",
      technologies: ["Laravel", "Tailwind", "Editor.js", "FullCalendar"],
    },
  ];
  return (
    <>
      <Helmet>
        <title>@JCKLERK</title>
        <meta
          name="description"
          content="Hi, I'm Justin. I'm a software develop and I love to build applications."
        />
        <link rel="canonical" href="/" />
      </Helmet>
      <Banner />
      {/* <Aboutme /> */}
      <Projects projects={project} />
    </>
  );
}
