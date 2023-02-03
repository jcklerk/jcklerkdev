import { Helmet } from "react-helmet-async";
import Banner from "../components/Banner";

export default function HomePage() {
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
    </>
  );
}
