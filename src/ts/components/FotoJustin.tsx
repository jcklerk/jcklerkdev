import { useLocalStorage } from "usehooks-ts";
import meRound from "../../img/meround.webp";
import meRoundDark from "../../img/merounddark.webp";

export default function FotoJustin() {
  const [isDark] = useLocalStorage("darkMode", false);

  return (
    <div className="md:col-span-1">
      <img
        src={isDark ? meRoundDark : meRound}
        alt="banner"
        width={"auto"}
        height={"auto"}
        loading="lazy"
        className="w-full object-cover object-center  px-20 pb-3 md:px-0 md:pb-0"
      />
    </div>
  );
}
