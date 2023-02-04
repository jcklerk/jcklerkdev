import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Link } from "@tanstack/react-router";
import { useLocalStorage } from "usehooks-ts";

export default function Nav() {
  const [isDark, setIsDark] = useLocalStorage("darkMode", false);

  const editDarkMode = (dark: boolean) => {
    if (isDark) {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
  };

  editDarkMode(isDark);

  const toggleDarkMode = () => {
    editDarkMode(!isDark);
    setIsDark(!isDark);
  };

  const path = window.location.pathname;

  return (
    <div className=" body-font px-auto container mx-auto mb-4 flex w-full  flex-wrap py-4 text-gray-700 dark:text-gray-200 md:py-10">
      <Link to="/" className="mb-6 hidden sm:block sm:w-1/3 lg:mb-0">
        <h1 className="title-font mb-2 text-5xl font-bold sm:text-4xl">
          @jcklerk
        </h1>
        <div
          className={
            "h-1.5 w-32 rounded bg-primary dark:bg-secondary " +
            (path === "/" ? null : "hidden")
          }
        ></div>
      </Link>
      <div className="float-right m-auto sm:w-2/3">
        <div
          className="float-right mb-6 w-max p-2 lg:mb-0"
          style={{ cursor: "pointer" }}
        >
          <LanguageIcon className="w-[2rem] p-2 sm:w-[3rem]" />
        </div>
        <div
          className="float-right mb-6 w-max p-2 lg:mb-0 "
          onClick={toggleDarkMode}
          style={{ cursor: "pointer" }}
        >
          {isDark ? (
            <SunIcon className="w-[2rem] p-2 sm:w-[3rem]" />
          ) : (
            <MoonIcon className="w-[2rem] p-2 sm:w-[3rem]" />
          )}
        </div>
        <Link to="/projects" className="float-right mb-6 w-max p-2 lg:mb-0">
          <h2 className="title-font p-2 text-right text-sm font-bold sm:text-xl md:text-2xl">
            Projects
          </h2>
          <div
            className={
              "float-right h-1.5 w-full rounded  bg-primary dark:bg-secondary " +
              (path === "/projects" ? "" : "hidden")
            }
          ></div>
        </Link>
        <Link to="/aboutme" className=" float-right mb-6 w-max p-2 lg:mb-0">
          <h2 className="title-font p-2 text-right text-sm font-bold sm:text-xl md:text-2xl">
            Over Mij
          </h2>
          <div
            className={
              "float-right h-1.5 w-full rounded  bg-primary dark:bg-secondary " +
              (path === "/aboutme" ? "" : "hidden")
            }
          ></div>
        </Link>
        <Link to="/" className="float-right mb-6 w-max p-2 lg:mb-0">
          <h2 className="title-font p-2 text-right text-sm font-bold sm:hidden sm:text-xl md:text-2xl">
            Home
          </h2>
          <div
            className={
              "float-right h-1.5 w-full rounded  bg-primary dark:bg-secondary " +
              (path === "/" ? "" : "hidden")
            }
          ></div>
        </Link>
      </div>
    </div>
  );
}
