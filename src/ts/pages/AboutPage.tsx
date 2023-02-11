import { Helmet } from "react-helmet-async";
import Aboutme from "../components/Aboutme";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>AboutMe ~ @JCKLERK</title>
        <meta
          name="description"
          content="Ik ben Justin Klerk 20 jaar en studeer Software Development in Landstede Harderwijk."
        />
        <link rel="canonical" href="/aboutme" />
      </Helmet>
      <Aboutme />
    </>
  );
}
