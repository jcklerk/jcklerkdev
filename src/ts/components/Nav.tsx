import { LanguageIcon, MoonIcon, SunIcon } from "@heroicons/react/24/solid";
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

  return (
    <div className=" text-gray-700 dark:text-gray-200 body-font container px-auto py-4 md:py-10  mx-auto flex flex-wrap w-full mb-4">
      <div className="mb-6 lg:mb-0 sm:w-1/3 hidden sm:block">
        <h1 className="sm:text-4xl text-5xl font-bold title-font mb-2">
          @jcklerk
        </h1>
        <div className="h-1.5 w-32 bg-primary dark:bg-secondary  rounded"></div>
      </div>
      <div className="sm:w-2/3 float-right m-auto">
        <div className="mb-6 lg:mb-0 w-max float-right p-2 ">
          <LanguageIcon style={{ width: "3rem" }} className="p-2" />
        </div>
        <div
          className="mb-6 lg:mb-0 w-max float-right p-2 "
          onClick={toggleDarkMode}
        >
          {isDark ? (
            <SunIcon style={{ width: "3rem" }} className="p-2" />
          ) : (
            <MoonIcon style={{ width: "3rem" }} className="p-2" />
          )}
        </div>
        <div className="mb-6 lg:mb-0 w-max float-right p-2">
          <h2 className="text-xl md:text-2xl font-bold title-font p-2 text-right">
            Projects
          </h2>
          <div className="h-1.5 w-full bg-primary dark:bg-secondary  rounded float-right"></div>
        </div>
        <div className=" mb-6 lg:mb-0 w-max float-right p-2">
          <h2 className="text-xl md:text-2xl font-bold title-font p-2 text-right">
            Over Mij
          </h2>
          <div className="h-1.5 w-full bg-primary dark:bg-secondary  rounded float-right"></div>
        </div>
      </div>
    </div>
  );
}
