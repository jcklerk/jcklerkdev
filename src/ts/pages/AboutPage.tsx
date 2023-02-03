import { Helmet } from "react-helmet-async";
import Aboutme from "../components/Aboutme";

export default function AboutPage() {
  return (
    <>
      <Helmet>
        <title>@JCKLERK</title>
        <meta
          name="description"
          content="Hi, I'm Justin. I'm a software develop and I love to build applications."
        />
        <link rel="canonical" href="/aboutme" />
      </Helmet>
      <Aboutme />
    </>
  );
}
