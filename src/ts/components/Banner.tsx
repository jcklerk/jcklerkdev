import { useLocalStorage } from "usehooks-ts";
import meround from "../../img/meround.png";
import merounddark from "../../img/merounddark.png";

export default function Banner() {
  const [isDark] = useLocalStorage("darkMode", false);

  let me = meround;
  if (isDark) {
    me = merounddark;
  }

  return (
    <div className="w-full grid grid-cols-1 md:grid-cols-3 pb-8">
      <div className="md:col-span-1">
        <img
          src={me}
          alt="banner"
          width={"auto"}
          height={"auto"}
          className="w-full px-20 md:px-0  object-cover object-center pb-3 md:pb-0"
        />
      </div>
      <div className="md:col-span-2">
        <div className="flex flex-col justify-center h-full">
          <div className="w-content m-auto md:mr-0 md:ml-auto">
            <h2 className="text-black dark:text-white font-bold text-2xl md:text-5xl text-left w-content">
              I'm
            </h2>
            <h1 className="text-primary dark:text-secondary font-bold text-5xl md:text-7xl xl:text-9xl text-right w-content">
              Justin Klerk
            </h1>
            <h2 className="text-black dark:text-white font-bold text-2xl  md:text-5xl text-right w-content">
              and I'm a
            </h2>
            <h1 className="text-primary dark:text-secondary font-bold text-5xl md:text-7xl xl:text-9xl w-content">
              Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
