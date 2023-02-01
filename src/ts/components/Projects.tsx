import { useLocalStorage } from "usehooks-ts";
import meround from "../../img/meround.png";
import merounddark from "../../img/merounddarkpng.png";
import { Project } from "../typings";

export default function Projects({ projects }: { projects: Project[] }) {
  const [isDark] = useLocalStorage("darkMode", false);

  let me = meround;
  if (isDark) {
    me = merounddark;
  }

  return (
    <div className="w-full py-8 text-slate-700">
      <h3 className="text-black dark:text-white font-bold text-3xl  md:text-6xl w-content text-center">
        Projects
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 py-10">
        {projects.map((project: Project) => (
          <div
            className=" border-4 border-primary dark:border-secondary rounded-3xl w-full flex flex-col h-[50vh] sm:h-[55vw] lg:h-[35vw] !bg-cover bg-center bg-no-repeat"
            style={{
              background: "url('" + project?.image + "')",
            }}
            key={project?.id}
          >
            <div className="w-full bg-primary dark:bg-secondary bg-opacity-90 dark:bg-opacity-90 rounded-b-2xl border-opacity-0 bg-blue  bottom-0 mt-auto px-2">
              <h3 className="text-xl md:text-2xl font-bold title-font p-2">
                <a
                  className="hover:text-black hover:dark:text-black"
                  href={project?.url}
                >
                  {project?.name}
                </a>
              </h3>
              <p className="text-sm md:text-base p-2">{project?.description}</p>
              <div className="flex flex-wrap justify-center text-slate-700 dark:text-slate-100">
                {project?.technologies.map((tech: string) => (
                  <span
                    className="text-xs md:text-sm p-2 m-1 bg-slate-100 dark:bg-slate-700 bg-opacity-70 dark:bg-opacity-70 hover:bg-opacity-100 hover:dark:bg-opacity-100 rounded-full"
                    key={tech}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
