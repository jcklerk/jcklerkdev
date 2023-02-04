import { useLocalStorage } from "usehooks-ts";
import meround from "../../img/meround.webp";
import merounddark from "../../img/merounddark.webp";

export default function Banner() {
  const [isDark] = useLocalStorage("darkMode", false);

  let me = meround;
  if (isDark) {
    me = merounddark;
  }

  return (
    <div className="grid w-full grid-cols-1 pb-8 md:grid-cols-3">
      <div className="md:col-span-1">
        <img
          src={me}
          alt="banner"
          width={"auto"}
          height={"auto"}
          className="w-full object-cover object-center  px-20 pb-3 md:px-0 md:pb-0"
        />
      </div>
      <div className="md:col-span-2">
        <div className="flex h-full flex-col justify-center">
          <div className="w-content m-auto md:mr-0 md:ml-auto">
            <h2 className="w-content text-left text-2xl font-bold text-black dark:text-white md:text-5xl">
              I'm
            </h2>
            <h1 className="w-content text-right text-5xl font-bold text-primary dark:text-secondary md:text-7xl xl:text-9xl">
              Justin Klerk
            </h1>
            <h2 className="w-content text-right text-2xl font-bold  text-black dark:text-white md:text-5xl">
              and I'm a
            </h2>
            <h1 className="w-content text-5xl font-bold text-primary dark:text-secondary md:text-7xl xl:text-9xl">
              Developer
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}
