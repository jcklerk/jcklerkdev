import FotoJustin from "./FotoJustin";

export default function AboutMe() {
  return (
    <div className="w-full py-8 text-slate-700">
      <h3 className="w-content text-center text-3xl font-bold  text-black dark:text-white md:text-6xl">
        Over Mij
      </h3>
      <div className="grid w-full grid-cols-1 pb-8 md:grid-cols-3">
        <FotoJustin />
        <div className="grid content-center md:col-span-2 md:pl-20">
          <h3 className="w-content h-fit text-xl font-semibold  text-black dark:text-white md:text-3xl">
            Ik ben Justin Klerk 20 jaar, Ben een full stack software developer met een passie voor programmeren.
          </h3>
          <h3 className="w-content h-fit text-xl font-semibold  text-black dark:text-white md:text-3xl">
            MBO studie Software Developer afgerond op Landstede Haderwijk en studeer nu aan Windesheim Zwolle HBO-ICT.
          </h3>
          <h3 className="w-content h-fit text-xl font-semibold  text-black dark:text-white md:text-3xl">
            Zelf vind ik het leuk om full stack development te doen voor web en
            iOS / Android apps. Naast het bouwen van web en apps vind ik het ook
            heel leuk om bezig te zijn met IoT en automatisering.
          </h3>
          <br />
          <h3 className="w-content h-fit text-xl font-semibold  text-black dark:text-white md:text-3xl">
            Met mijn bedrijf jcklerk Development kan ik u helpen met het bouwen van een web applicate, IOT solution of IOS / Android app.
          </h3>
        </div>
      </div>
    </div>
  );
}
