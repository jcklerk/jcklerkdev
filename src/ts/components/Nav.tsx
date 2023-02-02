import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
import { Link, useMatchRoute, useRoute } from "@tanstack/react-router";
import { useLocalStorage } from "usehooks-ts";
import { rootRoute } from "../routes/web";

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
    <div className=" text-gray-700 dark:text-gray-200 body-font container px-auto py-4 md:py-10  mx-auto flex flex-wrap w-full mb-4">
      <Link to="/" className="mb-6 lg:mb-0 sm:w-1/3 hidden sm:block">
        <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2">
          @jcklerk
        </h1>
        <div
          className={
            "h-1.5 w-32 bg-primary dark:bg-secondary rounded " +
            (path == "/" ? null : "hidden")
          }
        ></div>
      </Link>
      <div className="sm:w-2/3 float-right m-auto">
        <div
          className="mb-6 lg:mb-0 w-max float-right p-2"
          style={{ cursor: "pointer" }}
        >
          <LanguageIcon className="p-2 w-[2rem] sm:w-[3rem]" />
        </div>
        <div
          className="mb-6 lg:mb-0 w-max float-right p-2 "
          onClick={toggleDarkMode}
          style={{ cursor: "pointer" }}
        >
          {isDark ? (
            <SunIcon className="p-2 w-[2rem] sm:w-[3rem]" />
          ) : (
            <MoonIcon className="p-2 w-[2rem] sm:w-[3rem]" />
          )}
        </div>
        <Link to="/projects" className="mb-6 lg:mb-0 w-max float-right p-2">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold title-font p-2 text-right">
            Projects
          </h2>
          <div
            className={
              "h-1.5 w-full bg-primary dark:bg-secondary  rounded float-right " +
              (path == "/projects" ? "" : "hidden")
            }
          ></div>
        </Link>
        <Link to="/aboutme" className=" mb-6 lg:mb-0 w-max float-right p-2">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold title-font p-2 text-right">
            Over Mij
          </h2>
          <div
            className={
              "h-1.5 w-full bg-primary dark:bg-secondary  rounded float-right " +
              (path == "/aboutme" ? "" : "hidden")
            }
          ></div>
        </Link>
        <Link to="/" className="mb-6 lg:mb-0 w-max float-right p-2">
          <h2 className="text-sm sm:text-xl md:text-2xl font-bold title-font p-2 text-right sm:hidden">
            Home
          </h2>
          <div
            className={
              "h-1.5 w-full bg-primary dark:bg-secondary  rounded float-right " +
              (path === "/" ? "" : "hidden")
            }
          ></div>
        </Link>
      </div>
    </div>
  );
}
